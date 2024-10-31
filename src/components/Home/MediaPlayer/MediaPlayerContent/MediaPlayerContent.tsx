import { MediaPlayerContentProps } from "@/types/homeTypes";
import React, { FC } from "react";

const MediaPlayerContent: FC<MediaPlayerContentProps> = ({ data }) => {
  return (
    <div className="relative h-full">
      <video
        key={data?.id}
        controls
        autoPlay
        className="absolute left-0 top-0 h-full w-full rounded-xl object-cover"
      >
        <source key={data?.id} src={data?.url} type="video/mp4" />
        Tu navegador no soporta este tipo de archivo.
      </video>
    </div>
  );
};

export default MediaPlayerContent;
