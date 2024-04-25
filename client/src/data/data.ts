import NEW_YORK_AIRBNB_DATA from "data/New_York_Airbnb";
import KING_COUNTY_HOUSES_DATA from "data/King_County_Houses";

export type Point = {
  latitude: number;
  longitude: number;
  actual: number;
  predicted: number;
  generated: number;
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
  center: [40.72894888066264, -73.95216961468454],
  zoom: 12,
  bandwidths: [],
  data: NEW_YORK_AIRBNB_DATA,
};

export const KingCountyDataset: Dataset = {
  name: "King_County_Houses",
  center: [47.56005251931708, -122.21389640494147],
  zoom: 10,
  bandwidths: [
    { label: "intercept", value: 300 },
    { label: "bedrooms", value: 300 },
    { label: "bathrooms", value: 300 },
    { label: "sqft_living", value: 5 },
    { label: "sqft_lot", value: 185 },
    { label: "floors", value: 102 },
  ],
  data: KING_COUNTY_HOUSES_DATA,
};
