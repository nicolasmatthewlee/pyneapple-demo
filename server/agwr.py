import pandas as pd
from helpers.SampleModules.SpatialModules import smgwr_module
from helpers.SampleModules.MLModules import random_forrest

from ModularFramework.ModularFramework import ModularFramework
import utils as utils
import time
import math
import multiprocessing

kc_filename = "kc_house_sample.csv"
ny_filename = "ny_airbnb_sample.csv"

print(f"[1] {kc_filename}\n[2] {ny_filename}")

try:
    selection = int(input("choose a dataset: "))
except:
    raise Exception("You must choose an available dataset.")

if selection == 1:
    prediction_filename = "kc_predictions.csv"
    df = pd.read_csv(kc_filename)
    x_train = df[["bedrooms", "bathrooms", "sqft_living", "sqft_lot", "floors"]].values
    y_train = df["price"].values.reshape(-1, 1)
    coords_train = df[["lat", "long"]].values
elif selection == 2:
    prediction_filename = "ny_predictions.csv"
    df = pd.read_csv(ny_filename)
    x_train = df[
        [
            "minimum_nights",
            "number_of_reviews",
            "reviews_per_month",
            "calculated_host_listings_count",
            "availability_365",
        ]
    ].values
    y_train = df["price"].values.reshape(-1, 1)
    coords_train = df[["latitude", "longitude"]].values


# 2. define spatial, ml models
spatial_module, ML_module = smgwr_module, random_forrest

# 3. train random forest
nn = ML_module(x_train, coords_train, y_train)

# 4. train spatial model
mean_time = 0
mean_res = 0
rep_count = 1
for rep in range(rep_count):
    start_time = time.time()

    # selecting spatial and ml modules
    spatial_module, ML_module = smgwr_module, random_forrest

    # creating the A-GWR setting
    temp = len(x_train)
    temp /= 900
    processes = min(multiprocessing.cpu_count(), math.ceil(temp))
    sec1 = max(1, math.floor(temp ** (0.5)))
    sec2 = max(1, math.ceil(temp ** (0.5)))

    print("processes:", processes)

    A_GWR_config = {
        "process_count": processes,
        "divide_method": "equalCount",
        "divide_sections": [sec1, sec2],
        "pipelined": False,
    }  # a-gwr configurations
    A_GWR = ModularFramework(spatial_module, ML_module, A_GWR_config)

    # train model
    A_GWR.train(x_train, coords_train, y_train)

    end_time = time.time()

    # predict and print result
    # pred = A_GWR.predict(x_test, coords_test, y_test)
    # test_r2 = utils.R2(y_test.reshape(-1).tolist(), pred)

    # mean_time += end_time - start_time
    # mean_res += test_r2
    # print(rep, end_time - start_time, test_r2)

    # print bandwidths
    # NOTE: the first bandwidth is for the intercept
    print("bandwidths:", A_GWR.spatial_learners[0].bandwidths)

    # save predictions to csv
    pred = A_GWR.predict(x_train, coords_train, y_train)
    df = pd.DataFrame(pred, columns=["predicted"])
    df.to_csv(prediction_filename, index=False)
    print(f"Saved to `{prediction_filename}`")


print("\n", mean_time / rep_count, mean_res / rep_count)
