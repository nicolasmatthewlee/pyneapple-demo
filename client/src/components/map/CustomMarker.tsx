import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const CustomMarker = ({
  data,
  onClick = () => {},
}: {
  data: {
    latitude: number;
    longitude: number;
    actual: number;
    predicted: number;
    generated: number;
    color?: string;
  };
  onClick?: Function;
}) => {
  let iconColor = `rgba(150,150,150,0.5)`;
  if (data.color) iconColor = data.color;

  const MapIcon = new L.DivIcon({
    html: `<div style="background-color:${iconColor}; width: 15px; height: 15px; border: 1.5px solid rgba(255,255,255,1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;"></div>`,
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
        click: (e) => {
          onClick(e);
        },
      }}
    >
      <Popup className="">
        <div className="right-[27px] bg-white absolute bottom-[-4.5px] shadow truncate p-[5px] flex flex-col items-end font-sans font-medium rounded-sm">
          {[
            { label: "Actual", value: data.actual.toLocaleString() },
            { label: "Predicted", value: data.predicted.toLocaleString() },
            { label: "Generated", value: data.generated.toLocaleString() },
          ].map((item, i) => (
            <div key={i}>
              <span className="text-gray-500 font-normal">{item.label}</span> $
              {item.value}
            </div>
          ))}
        </div>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
