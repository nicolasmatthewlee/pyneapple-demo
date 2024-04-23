import { MapContainer, TileLayer } from "react-leaflet";
import CustomMarker from "components/map/CustomMarker";
import NYC_DATA from "data/ny_airbnb";

const Map = () => {
  return (
    <MapContainer
      center={[40.72894888066264, -73.95216961468454]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      {NYC_DATA.map((item) => (
        <CustomMarker data={item} />
      ))}
    </MapContainer>
  );
};

export default Map;
