import { CustomInputFieldProps } from "@/types/customIputsTypes";
import { FC } from "react";

const CustomInputField: FC<CustomInputFieldProps> = ({
  type,
  name,
  placeholder,
  label,
  icon,
  bg = "bg-gray-1/50",
}) => {
  return (
    <>
      {label ? (
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
      ) : null}
      <div className={`${bg} flex h-10 w-full gap-x-2 rounded-md p-2`}>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-1"
        />
        <div>{icon}</div>
      </div>
    </>
  );
};

export default CustomInputField;
