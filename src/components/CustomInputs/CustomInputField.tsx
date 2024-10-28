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
      <div className={`${bg} flex h-10 w-full gap-x-2 rounded-md px-4 py-2`}>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="placeholder:text-gray-1 w-full bg-transparent text-sm outline-none"
        />
        <button type="button">{icon}</button>
      </div>
    </>
  );
};

export default CustomInputField;
