import CustomAvatar from "@/components/CustomElements/CustomAvatar/CustomAvatar";
import { AvatarProfileProps } from "@/types/layoutTypes";
import { Bell } from "lucide-react";
import { FC } from "react";

const AvatarProfile: FC<AvatarProfileProps> = ({ data }) => {
  return (
    <article className="flex items-center gap-x-8">
      <div className="flex items-center gap-x-2">
        <CustomAvatar width="w-12" src={data?.avatar} />

        <p className="text-sm">{data?.username}</p>
      </div>

      <button type="button">
        <Bell fill="#fff" stroke="#fff" />
      </button>
    </article>
  );
};

export default AvatarProfile;
