import { Skeleton } from "@/components/ui/skeleton";
import { MediaPlayerProps } from "@/types/homeTypes";
import { FC } from "react";
import MediaPlayerContent from "./MediaPlayerContent/MediaPlayerContent";

const MediaPlayer: FC<MediaPlayerProps> = ({ data, isLoading }) => {
  if (isLoading)
    return <Skeleton className="h-full w-full rounded-xl bg-skeleton-1" />;

  return (
    <section className="col-span-2 px-4">
      <MediaPlayerContent data={data} />
    </section>
  );
};

export default MediaPlayer;
