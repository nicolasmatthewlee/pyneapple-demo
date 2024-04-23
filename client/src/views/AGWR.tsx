import AppLayout from "components/AppLayout";
import ButtonContainerHorizontal from "components/ButtonContainerHorizontal";
import Button from "components/Button";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>Example popup</Popup>
      </Marker> */}
    </MapContainer>
  );
};

const Content = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full bg-gray-100 rounded-sm relative">
      <div className="z-0 w-full h-full">
        <Map />
      </div>
      <div className="py-[15px] absolute z-10 w-full top-0 pointer-events-none">
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
      <div className="py-[15px] absolute w-full bottom-0">
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
