import { RelatedVideosChildProps } from "@/types/homeTypes";
import Image from "next/image";
import { FC } from "react";

const RelatedVideoCard: FC<RelatedVideosChildProps> = ({
  video,
  setSelectedVideo,
}) => {
  return (
    <button
      type="button"
      onClick={() => setSelectedVideo(video?.id)}
      className="flex gap-x-4"
    >
      <picture className="h-32 max-w-32">
        <Image
          className="h-full w-full rounded-xl object-cover"
          src={video?.banner || ""}
          alt={video?.title || ""}
          width={300}
          height={300}
        />
      </picture>

      <div className="flex flex-col">
        <div className="text-left">
          <p>{video?.title}</p>
          <small className="text-gray-1">
            {video?.description?.length > 200
              ? `${video.description.slice(0, 120)}...`
              : video.description}
          </small>
        </div>

        <div className="mt-2 flex gap-x-2">
          <small className="text-gray-1">{video?.views} visualizaciones</small>
        </div>
      </div>
    </button>
  );
};

export default RelatedVideoCard;
