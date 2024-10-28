import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Bell } from "lucide-react";

const AvatarProfile = () => {
  return (
    <article className="flex items-center gap-x-8">
      <div className="flex items-center gap-x-2">
        <Avatar>
          <AvatarImage
            className="h-12 w-12 rounded-full"
            src="https://picsum.photos/200/300"
            alt="avatar"
          />
          <AvatarFallback className="rounded-full bg-purple-3 p-4">
            AV
          </AvatarFallback>
        </Avatar>

        <p className="text-sm">Usuario</p>
      </div>

      <button type="button">
        <Bell fill="#fff" stroke="#fff" />
      </button>
    </article>
  );
};

export default AvatarProfile;
