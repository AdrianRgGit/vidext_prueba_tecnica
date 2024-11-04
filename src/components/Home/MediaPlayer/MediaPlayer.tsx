import { MediaPlayerProps } from "@/types/homeTypes";
import { FC } from "react";
import MediaPlayerContent from "./MediaPlayerContent/MediaPlayerContent";

const MediaPlayer: FC<MediaPlayerProps> = ({ data }) => {
  return (
    <section className="col-span-2 px-4">
      <MediaPlayerContent data={data} />
    </section>
  );
};

export default MediaPlayer;
