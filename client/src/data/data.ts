import NEW_YORK_AIRBNB_DATA from "data/New_York_Airbnb";
import KING_COUNTY_HOUSES_DATA from "data/King_County_Houses";

export type Point = {
  latitude: number;
  longitude: number;
  actual: number;
  predicted: number;
  coefficients: number[];
};

export type Dataset = {
  name: string;
  center: [number, number];
  zoom: number;
  bandwidths: { label: string; value: number }[];
  data: Point[];
  coefficientMins: number[];
  coefficientMeds: number[];
  coefficientMaxes: number[];
};

export const NewYorkDataset: Dataset = {
  name: "New_York_Airbnb",
  center: [40.844, -73.87],
  zoom: 13,
  bandwidths: [
    { label: "intercept", value: 300 },
    { label: "minimum_nights", value: 31 },
    { label: "number_of_reviews", value: 280 },
    { label: "reviews_per_month", value: 130 },
    { label: "calculated_host_listings_count", value: 300 },
    { label: "availability_365", value: 27 },
  ],
  coefficientMins: [
    -1.025566757992119, -1.029546196431715, -0.030425886972717617,
    -0.7990746179001041, -0.7504000742423735, -0.010491653561903047,
  ],
  coefficientMeds: [
    0.6751060083710175, -0.11537472507188155, -0.022241175226534893,
    -0.25461638408853976, -0.5210900974662811, 0.005050454190231562,
  ],
  coefficientMaxes: [
    1.349974797470364, 0.13402206111377363, -0.012583397615402742,
    0.13949964843336735, 0.29760664983721025, 0.015375290367858315,
  ],
  data: NEW_YORK_AIRBNB_DATA,
};

export const KingCountyDataset: Dataset = {
  name: "King_County_Houses",
  center: [47.61729305740989, -122.30174365821095],
  zoom: 14,
  bandwidths: [
    { label: "intercept", value: 80 },
    { label: "bedrooms", value: 75 },
    { label: "bathrooms", value: 110 },
    { label: "sqft_living", value: 57 },
    { label: "sqft_lot", value: 22 },
    { label: "floors", value: 131 },
  ],
  coefficientMins: [
    -11114.780642817059, -24017.157813739635, -20448.966999212134,
    26.94703873349016, -5.604742958699164, 3823.8600268015475,
  ],
  coefficientMeds: [
    16527.38725505567, -18565.847552309893, -18461.07158339589,
    28.594754041312317, -1.1587082805843687, 11322.534675766432,
  ],
  coefficientMaxes: [
    20502.353129944542, -17367.94099677417, -12428.963096090125,
    52.82889752060971, 6.412710252219354, 14025.925752420671,
  ],
  data: KING_COUNTY_HOUSES_DATA,
};
