import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const CustomMarker = ({
  data,
}: {
  data: {
    latitude: number;
    longitude: number;
    actual: number;
    predicted: number;
    generated: number;
  };
}) => {
  // NOTE : will want iconColor to change based on view type
  const iconColor = (data.actual / 100) * 255;
  const MapIcon = new L.DivIcon({
    html: `<div style="background-color:rgba(${iconColor},0,50,0.5); width: 15px; height: 15px; border: 1.5px solid rgba(255,255,255,1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;"></div>`,
    className: "", // do not inherit default styles
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });

  return (
    <Marker
      position={[data.latitude, data.longitude]}
      icon={MapIcon}
      eventHandlers={{
        mouseover: (e) => {
          e.target.openPopup();
        },
        mouseout: (e) => {
          e.target.closePopup();
        },
      }}
    >
      <Popup className="">
        <div className="right-[27px] bg-white absolute bottom-[-4.5px] shadow truncate p-[5px] flex flex-col items-end font-sans font-medium rounded-sm">
          {[
            { label: "Actual", value: data.actual },
            { label: "Predicted", value: data.predicted },
            { label: "Generated", value: data.generated },
          ].map((item) => (
            <div>
              <span className="text-gray-500">{item.label}</span> ${item.value}
            </div>
          ))}
        </div>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
