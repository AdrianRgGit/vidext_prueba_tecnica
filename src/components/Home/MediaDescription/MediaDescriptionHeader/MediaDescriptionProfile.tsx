import React, { FC } from "react";
import MediaDescriptionHeaderProfile from "./MediaDescriptionHeaderProfile/MediaDescriptionHeaderProfile";
import MediaDescriptionHeaderInfo from "./MediaDescriptionHeaderInfo/MediaDescriptionHeaderInfo";
import { MediaDescriptionChildProps } from "@/types/homeTypes";

const MediaDescriptionHeader: FC<MediaDescriptionChildProps> = ({ data }) => {
  return (
    <div className="mb-4 flex flex-col items-center justify-between gap-y-4 lg:flex-row lg:gap-y-0">
      <MediaDescriptionHeaderProfile data={data} />
      <MediaDescriptionHeaderInfo data={data} />
    </div>
  );
};

export default MediaDescriptionHeader;
