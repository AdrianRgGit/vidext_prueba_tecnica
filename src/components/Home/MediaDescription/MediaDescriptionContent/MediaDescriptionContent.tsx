import { MediaDescriptionChildProps } from "@/types/homeTypes";
import { FC } from "react";

const MediaDescriptionContent: FC<MediaDescriptionChildProps> = ({ data }) => {
  return (
    <article>
      <h3 className="mb-4 text-xl">{data?.title}</h3>
      <p className="text-gray-1">{data?.description}</p>
    </article>
  );
};

export default MediaDescriptionContent;
