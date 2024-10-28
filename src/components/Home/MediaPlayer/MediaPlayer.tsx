import { Skeleton } from "@/components/ui/skeleton";
import { MediaPlayerProps } from "@/types/homeTypes";
import { FC, useEffect } from "react";
import MediaPlayerContent from "./MediaPlayerContent/MediaPlayerContent";

const MediaPlayer: FC<MediaPlayerProps> = ({ data, isLoading }) => {
  return (
    <section className="col-span-2 px-4">
      {isLoading ? (
        <Skeleton className="bg-skeleton-1 h-full w-full rounded-xl" />
      ) : (
        <MediaPlayerContent data={data} />
      )}
    </section>
  );
};

export default MediaPlayer;
