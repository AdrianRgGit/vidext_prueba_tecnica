import { CustomAvatarProps } from "@/types/customElementsTypes";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React, { FC } from "react";

const CustomAvatar: FC<CustomAvatarProps> = ({
  width = "12",
  height = "auto",
  src = "https://github.com/shadcn.png",
  alt = "avatar",
  fallBack = "AV",
}) => {
  return (
    <Avatar>
      <AvatarImage
        className={`w-${width}  h-${height} rounded-full`}
        src={src}
        alt={alt}
      />
      <AvatarFallback className="bg-purple-3 rounded-full p-4">
        {fallBack}
      </AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
