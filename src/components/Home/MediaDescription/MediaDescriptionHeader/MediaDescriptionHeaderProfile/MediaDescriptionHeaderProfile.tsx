import CustomAvatar from "@/components/CustomElements/CustomAvatar/CustomAvatar";

const MediaDescriptionHeaderProfile = () => {
  return (
    <article className="flex items-center gap-x-2">
      <CustomAvatar />
      <div>
        <p>Usuario</p>
        <small className="text-gray-1">1231321 seguidores</small>
      </div>
    </article>
  );
};

export default MediaDescriptionHeaderProfile;
