import { RelatedVideosChildProps } from "@/types/homeTypes";
import React, { FC } from "react";

const RelatedVideoCard: FC<RelatedVideosChildProps> = ({ video }) => {
  return (
    <a href="#" className="flex gap-x-4">
      <picture className="h-32 w-32">
        <img
          className="h-full w-full rounded-xl object-cover"
          src={video?.banner}
          alt={video?.title}
        />
      </picture>

      <div className="flex flex-col justify-between">
        <div>
          <p>{video?.title}</p>
          <small className="text-gray-1">{video?.description}</small>
        </div>

        <div className="flex gap-x-2">
          <small className="text-gray-1">{video?.views}</small>
        </div>
      </div>
    </a>
  );
};

export default RelatedVideoCard;
