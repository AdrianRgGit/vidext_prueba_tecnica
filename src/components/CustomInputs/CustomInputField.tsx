import { CustomInputFieldProps } from "@/types/customIputsTypes";
import { FC } from "react";

const CustomInputField: FC<CustomInputFieldProps> = ({
  type,
  name,
  placeholder,
  label,
  icon
}) => {
  return (
    <div className="w-full">
      {label ? (
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
      ) : null}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="text-smF h-10 w-full rounded-md px-4 py-2"
      />
      {icon}
    </div>
  );
};

export default CustomInputField;
