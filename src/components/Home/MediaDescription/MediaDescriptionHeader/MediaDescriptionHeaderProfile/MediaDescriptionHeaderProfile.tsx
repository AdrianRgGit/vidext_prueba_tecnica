import CustomAvatar from "@/components/CustomElements/CustomAvatar/CustomAvatar";
import { MediaDescriptionChildProps } from "@/types/homeTypes";
import { FC } from "react";

const MediaDescriptionHeaderProfile: FC<MediaDescriptionChildProps> = ({
  data,
}) => {
  return (
    <article className="flex w-full items-center gap-x-2 lg:w-auto">
      <CustomAvatar src={data?.avatar} />
      <div>
        <p>{data?.username}</p>
        <small className="text-gray-1">{data?.followers} seguidores</small>
      </div>
    </article>
  );
};

export default MediaDescriptionHeaderProfile;
