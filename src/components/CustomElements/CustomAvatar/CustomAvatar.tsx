import { CustomAvatarProps } from "@/types/customElementsTypes";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React, { FC } from "react";

const CustomAvatar: FC<CustomAvatarProps> = ({
  width = "w-20",
  height = "h-auto",
  src,
  alt = "avatar",
  fallBack = "AV",
}) => {
  return (
    <Avatar className={`${width} ${height} aspect-square`}>
      <AvatarImage
        className="h-full w-full rounded-full object-cover"
        src={src}
        alt={alt}
      />
      <AvatarFallback className="bg-purple-3 flex h-full w-full items-center justify-center rounded-full">
        {fallBack}
      </AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
