import NEW_YORK_AIRBNB_DATA from "data/New_York_Airbnb";
import KING_COUNTY_HOUSES_DATA from "data/King_County_Houses";

export type Point = {
  latitude: number;
  longitude: number;
  actual: number;
  predicted: number;
};

export type Dataset = {
  name: string;
  center: [number, number];
  zoom: number;
  bandwidths: { label: string; value: number }[];
  data: Point[];
};

export const NewYorkDataset: Dataset = {
  name: "New_York_Airbnb",
  center: [40.84830495875344, -73.88455175068744],
  zoom: 12,
  bandwidths: [
    { label: "intercept", value: 21 },
    { label: "minimum_nights", value: 14 },
    { label: "number_of_reviews", value: 116 },
    { label: "reviews_per_month", value: 154 },
    { label: "calculated_host_listings_count", value: 5 },
    { label: "availability_365", value: 289 },
  ],
  data: NEW_YORK_AIRBNB_DATA,
};

export const KingCountyDataset: Dataset = {
  name: "King_County_Houses",
  center: [47.61729305740989, -122.30174365821095],
  zoom: 13,
  bandwidths: [
    { label: "intercept", value: 25 },
    { label: "bedrooms", value: 16 },
    { label: "bathrooms", value: 19 },
    { label: "sqft_living", value: 207 },
    { label: "sqft_lot", value: 5 },
    { label: "floors", value: 88 },
  ],
  data: KING_COUNTY_HOUSES_DATA,
};
