import { FC } from "react";
import MediaDescriptionContent from "./MediaDescriptionContent/MediaDescriptionContent";
import MediaDescriptionHeader from "./MediaDescriptionHeader/MediaDescriptionProfile";
import { MediaDescriptionProps } from "@/types/homeTypes";

const MediaDescription: FC<MediaDescriptionProps> = ({ data }) => {
  return (
    <section className="col-span-2 px-4 py-8">
      <MediaDescriptionHeader data={data} />
      <MediaDescriptionContent data={data} />
    </section>
  );
};

export default MediaDescription;
