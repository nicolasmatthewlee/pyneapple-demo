import { ReactNode, useState } from "react";

const Button = ({
  label,
  onClick = () => {},
  popupContent = null,
  popupAnchor = "BL",
}: {
  label: ReactNode;
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
          "shadow-sm bg-white px-[15px] py-[5px] rounded-sm hover:bg-gray-100 font-medium" +
          " " +
          (showPopup ? buttonOnShowPopupStyles : "")
        }
        onClick={() => {
          setShowPopup(showPopup ? false : true);
          onClick();
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
