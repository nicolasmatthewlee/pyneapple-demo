import { ReactNode, useState } from "react";

const DatasetButton = ({
  label,
  displayValue,
  onClick = () => {},
  popupContent = null,
  popupAnchor = "BL",
}: {
  label: ReactNode;
  displayValue: string;
  onClick?: Function;
  popupContent?: ReactNode;
  popupAnchor?: "BL" | "BR" | "TL" | "TR"; // specifies which corner of button to anchor the popup at
}) => {
  const [showPopup, setShowPopup] = useState(false);

  let popupStyles: string = "";
  let buttonOnShowPopupStyles: string = "";

  switch (popupAnchor) {
    case "BL":
      popupStyles = "top-[100%] left-[0] rounded-tl-none";
      buttonOnShowPopupStyles = "rounded-b-none";
      break;
    case "BR":
      popupStyles = "top-[100%] right-[0] rounded-tr-none";
      buttonOnShowPopupStyles = "rounded-b-none";
      break;
    case "TL":
      popupStyles = "bottom-[100%] left-[0] rounded-bl-none";
      buttonOnShowPopupStyles = "rounded-t-none";
      break;
    case "TR":
      popupStyles = "bottom-[100%] right-[0] rounded-br-none";
      buttonOnShowPopupStyles = "rounded-t-none";
      break;
  }

  return (
    <div className="relative">
      {showPopup && (
        <div
          className={
            "absolute bg-white rounded-sm shadow-sm" + " " + popupStyles
          }
        >
          {popupContent}
        </div>
      )}
      <button
        className={
          "ring-black ring-[2px] ring-opacity-20 shadow-sm bg-white px-[10px] py-[3px] rounded-sm hover:bg-gray-100 font-medium text-[15px]" +
          " " +
          (showPopup ? buttonOnShowPopupStyles : "")
        }
        onClick={() => {
          setShowPopup(showPopup ? false : true);
          onClick();
        }}
      >
        {label}
        <span className="text-gray-500 pl-[5px] font-normal">
          {displayValue}
        </span>
      </button>
    </div>
  );
};

export default DatasetButton;