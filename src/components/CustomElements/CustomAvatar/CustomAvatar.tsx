import { CustomAvatarProps } from "@/types/customElementsTypes";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React, { FC } from "react";

const CustomAvatar: FC<CustomAvatarProps> = ({
  width = "w-20",
  height = "h-auto",
  src = "https://github.com/shadcn.png",
  alt = "avatar",
  fallBack = "AV",
}) => {
  return (
    <Avatar>
      <AvatarImage
        className={`${width} ${height} rounded-full`}
        src={src}
        alt={alt}
      />
      <AvatarFallback className="rounded-full bg-purple-3 p-4">
        {fallBack}
      </AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
