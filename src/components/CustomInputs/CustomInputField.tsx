import { CustomInputFieldProps } from "@/types/customIputsTypes";
import { FC } from "react";

const CustomInputField: FC<CustomInputFieldProps> = ({
  type,
  name,
  placeholder,
  label,
  icon,
}) => {
  return (
    <>
      {label ? (
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
      ) : null}
      <div className="bg-purple-3/90 flex h-10 w-full gap-x-2 rounded-md px-4 py-2">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-white outline-none"
        />
        {icon}
      </div>
    </>
  );
};

export default CustomInputField;
