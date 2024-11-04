import { MediaPlayerProps } from "@/types/homeTypes";
import { FC } from "react";
import MediaPlayerContent from "./MediaPlayerContent/MediaPlayerContent";

const MediaPlayer: FC<MediaPlayerProps> = ({ data }) => {
  return (
    <section className="col-span-2 mb-6 mt-12 px-4 lg:mb-0 lg:mt-0">
      <MediaPlayerContent data={data} />
    </section>
  );
};

export default MediaPlayer;
