import CustomAvatar from "@/components/CustomElements/CustomAvatar/CustomAvatar";
import { AvatarProfileProps } from "@/types/layoutTypes";
import { Bell } from "lucide-react";
import { FC } from "react";

const AvatarProfile: FC<AvatarProfileProps> = ({ data }) => {
  return (
    <article className="order-1 flex w-full items-center justify-between gap-x-8 lg:order-2 lg:w-auto lg:justify-start">
      <div className="flex items-center gap-x-2">
        <CustomAvatar width="w-12" height="h-auto" src={data?.avatar} />

        <p className="text-sm">{data?.username}</p>
      </div>

      <button type="button">
        <Bell fill="#fff" stroke="#fff" />
      </button>
    </article>
  );
};

export default AvatarProfile;
