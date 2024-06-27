import AppLayout from "components/AppLayout";
import ButtonContainerHorizontal from "components/button/ButtonContainerHorizontal";
import Button from "components/button/Button";
import Map from "components/map/Map";
import { useState } from "react";
import { NewYorkDataset, KingCountyDataset, Dataset } from "data/data";

export type ViewType = "residuals" | "coefficients" | "bandwidths";

const Content = () => {
  const [dataset, setDataset] = useState<Dataset>(NewYorkDataset);
  const [models, setModels] = useState<{
    spatial: "SMGWR";
    ml: "Random Forest";
  }>({ spatial: "SMGWR", ml: "Random Forest" });

  const [viewType, setViewType] = useState<ViewType>("residuals");

  const [coefficientFeature, setCoefficientFeature] = useState<string>(
    dataset.bandwidths[0].label
  );
  const [bandwidthFeature, setBandwidthFeature] = useState<string>(
    dataset.bandwidths[0].label
  );

  return (
    <div className="flex flex-col justify-between w-full h-full bg-gray-100 rounded-sm relative">
      <div className="z-0 w-full h-full">
        <Map dataset={dataset} viewType={viewType} />
      </div>
      <div className="py-[15px] absolute z-10 w-full top-0 pointer-events-none">
        <ButtonContainerHorizontal
          buttons={[
            <Button
              label="Dataset"
              selectedOption={dataset.name}
              onOptionSelected={(value: string) => {
                if (value === "King_County_Houses")
                  setDataset(KingCountyDataset);
                else setDataset(NewYorkDataset);
              }}
              options={[KingCountyDataset.name, NewYorkDataset.name]}
            />,
            <Button
              label="Models"
              options={[models.spatial + " / " + models.ml]}
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
              label="Coefficients"
              isSelected={viewType === "coefficients"}
              onClick={() => setViewType("coefficients")}
              selectedOption={coefficientFeature}
              options={dataset.bandwidths.map((e) => e.label)}
              onOptionSelected={(value: string) => {
                setCoefficientFeature(value);
              }}
            />,
            <Button
              label="Bandwidths"
              isSelected={viewType === "bandwidths"}
              onClick={() => setViewType("bandwidths")}
              selectedOption={bandwidthFeature}
              options={dataset.bandwidths.map((e) => e.label)}
              onOptionSelected={(value: string) => {
                setBandwidthFeature(value);
              }}
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
