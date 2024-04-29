import { ReactNode } from "react";

const Button = ({
  label,
  displayValue = null,
  onClick = () => {},
  isSelected = false,
}: {
  label: ReactNode;
  displayValue?: string | null;
  onClick?: Function;
  isSelected?: boolean;
}) => {
  return (
    <button
      className={
        "ring-black ring-[2px] ring-opacity-20 shadow-sm px-[10px] py-[3px] rounded-sm hover:bg-gray-100 font-medium text-[15px]" +
        " " +
        (isSelected ? "bg-gray-100" : "bg-white")
      }
      onClick={() => {
        onClick();
      }}
    >
      {label}
      {displayValue && (
        <span className="text-gray-500 pl-[5px] font-normal">
          {displayValue}
        </span>
      )}
    </button>
  );
};

export default Button;
