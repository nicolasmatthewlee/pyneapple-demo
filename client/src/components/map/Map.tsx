import { MapContainer, TileLayer } from "react-leaflet";
import CustomMarker from "components/map/CustomMarker";
import { Dataset, ViewType } from "views/AGWR";

const Map = ({
  dataset,
  viewType,
}: {
  dataset: Dataset;
  viewType: ViewType;
}) => {
  return (
    <MapContainer
      key={`${dataset.name}-${viewType}`}
      center={dataset.center}
      zoom={dataset.zoom}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      {dataset.data.map((item) => (
        <CustomMarker data={item} viewType={viewType} />
      ))}
    </MapContainer>
  );
};

export default Map;
