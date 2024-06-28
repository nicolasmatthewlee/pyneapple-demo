import pandas as pd
from helpers.SampleModules.SpatialModules import smgwr_module
from helpers.SampleModules.MLModules import random_forrest

from ModularFramework.ModularFramework import ModularFramework
import utils as utils
import time
import math
import multiprocessing
import pickle
import json

# 1. select dataset
kc_filename = "kc_house_sample.csv"
ny_filename = "ny_airbnb_sample.csv"

print(f"[1] {kc_filename}\n[2] {ny_filename}")

try:
    selection = int(input("choose a dataset: "))
except:
    raise Exception("You must choose an available dataset.")

if selection == 1:
    model_filename = "kc_model.pkl"
    prediction_filename = "kc_predictions.csv"
    features = ["bedrooms", "bathrooms", "sqft_living", "sqft_lot", "floors"]
    df = pd.read_csv(kc_filename)
    x_train = df[features].values
    y_train = df["price"].values.reshape(-1, 1)
    coords_train = df[["lat", "long"]].values
elif selection == 2:
    model_filename = "ny_model.pkl"
    prediction_filename = "ny_predictions.csv"
    features = [
        "minimum_nights",
        "number_of_reviews",
        "reviews_per_month",
        "calculated_host_listings_count",
        "availability_365",
    ]
    df = pd.read_csv(ny_filename)
    x_train = df[features].values
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
    temp /= 1092
    processes = min(multiprocessing.cpu_count(), math.ceil(temp))
    sec1 = max(1, math.floor(temp ** (0.5)))
    sec2 = max(1, math.ceil(temp ** (0.5)))

    print("processes:", processes, end="\n\n")

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

    # save bandwidths
    # NOTE: the first bandwidth is for the intercept
    features.insert(0, "intercept")
    bandwidths = [
        {"label": feature, "value": value}
        for feature, value in zip(features, A_GWR.spatial_learners[0].bandwidths)
    ]
    filename = "parameters.txt"
    with open(filename, "w") as file:
        file.write(f"bandwidths:{json.dumps(bandwidths, indent=2)},")
        print(f'Bandwidths saved to "{filename}"')

    # save model
    with open(model_filename, "wb") as file:
        pickle.dump(A_GWR, file)
        print(f'Model saved to "{model_filename}"')

    # save predictions to csv
    pred = A_GWR.predict(x_train, coords_train, y_train)
    df = pd.DataFrame(pred, columns=["predicted"])
    df.to_csv(prediction_filename, index=False)
    print(f'Predictions saved to "{prediction_filename}"')


print("\n", mean_time / rep_count, mean_res / rep_count)
