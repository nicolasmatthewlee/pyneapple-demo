import AppLayout from "components/AppLayout";
import ButtonContainerHorizontal from "components/ButtonContainerHorizontal";
import Button from "components/Button";

const Content = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full bg-gray-100 rounded-sm">
      <div className="py-[15px]">
        <ButtonContainerHorizontal
          buttons={[
            <Button
              label="Dataset"
              popupAnchor="BR"
              popupContent={
                <div className="w-[250px] h-[250px] p-[15px]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </div>
              }
            />,
            <Button
              label="Models"
              popupAnchor="BL"
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
      <div className="py-[15px]">
        <ButtonContainerHorizontal
          buttons={[
            <Button
              label="Residuals"
              popupAnchor="TR"
              popupContent={
                <div className="w-[250px] h-[250px] p-[15px]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </div>
              }
            />,
            <Button
              label="Correlations"
              popupAnchor="TR"
              popupContent={
                <div className="w-[250px] h-[250px] p-[15px]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </div>
              }
            />,
            <Button
              label="Bandwidths"
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
