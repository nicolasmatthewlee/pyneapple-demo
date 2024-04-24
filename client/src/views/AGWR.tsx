import AppLayout from "components/AppLayout";
import ButtonContainerHorizontal from "components/button/ButtonContainerHorizontal";
import Button from "components/button/Button";
import DatasetButton from "components/button/DatasetButton";
import Map from "components/map/Map";
import { useState } from "react";

import NEW_YORK_AIRBNB_DATA from "data/New_York_Airbnb";
import KING_COUNTY_HOUSES_DATA from "data/King_County_Houses";

export type ViewType = "residuals" | "correlations" | "bandwidths";

export type Dataset = {
  name: string;
  center: [number, number];
  zoom: number;
  data: {
    latitude: number;
    longitude: number;
    actual: number;
    predicted: number;
    generated: number;
  }[];
};

const NewYorkDataset: Dataset = {
  name: "New_York_Airbnb",
  center: [40.72894888066264, -73.95216961468454],
  zoom: 12,
  data: NEW_YORK_AIRBNB_DATA,
};

const KingCountyDataset: Dataset = {
  name: "King_County_Houses",
  center: [47.56005251931708, -122.21389640494147],
  zoom: 10,
  data: KING_COUNTY_HOUSES_DATA,
};

const Content = () => {
  const [dataset, setDataset] = useState<Dataset>(NewYorkDataset);

  const [models, setModels] = useState<{
    spatial: "SMGWR";
    ml: "Random Forest";
  }>({ spatial: "SMGWR", ml: "Random Forest" });

  const [viewType, setViewType] = useState<ViewType>("residuals");

  return (
    <div className="flex flex-col justify-between w-full h-full bg-gray-100 rounded-sm relative">
      <div className="z-0 w-full h-full">
        <Map dataset={dataset} viewType={viewType} />
      </div>
      <div className="py-[15px] absolute z-10 w-full top-0 pointer-events-none">
        <ButtonContainerHorizontal
          buttons={[
            <DatasetButton
              label="Dataset"
              displayValue={dataset.name}
              popupAnchor="BR"
              onClick={() => {
                if (dataset.name == "King_County_Houses")
                  setDataset(NewYorkDataset);
                else setDataset(KingCountyDataset);
              }}
            />,
            <DatasetButton
              label="Models"
              displayValue={models.spatial + " / " + models.ml}
              popupAnchor="BR"
            />,
          ]}
        />
      </div>
      <div className="py-[15px] absolute w-full bottom-0">
        <ButtonContainerHorizontal
          buttons={[
            <Button
              label="Residuals"
              isSelected={viewType === "residuals"}
              onClick={() => setViewType("residuals")}
            />,
            <Button
              label="Correlations"
              isSelected={viewType === "correlations"}
              onClick={() => setViewType("correlations")}
            />,
            <Button
              label="Bandwidths"
              isSelected={viewType === "bandwidths"}
              onClick={() => setViewType("bandwidths")}
            />,
            <Button
              label="Generate"
              popupAnchor="TL"
              popupContent={
                <div className="w-[250px] h-[250px] p-[15px]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </div>
              }
            />,
          ]}
        />
      </div>
    </div>
  );
};

const AGWR = () => {
  return <AppLayout content={<Content />} />;
};

export default AGWR;
