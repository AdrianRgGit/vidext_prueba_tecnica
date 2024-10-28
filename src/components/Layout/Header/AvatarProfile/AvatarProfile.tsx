import CustomAvatar from "@/components/CustomElements/CustomAvatar/CustomAvatar";
import { Bell } from "lucide-react";

const AvatarProfile = () => {
  return (
    <article className="flex items-center gap-x-8">
      <div className="flex items-center gap-x-2">
        <CustomAvatar width="w-12" />

        <p className="text-sm">Usuario</p>
      </div>

      <button type="button">
        <Bell fill="#fff" stroke="#fff" />
      </button>
    </article>
  );
};

export default AvatarProfile;
