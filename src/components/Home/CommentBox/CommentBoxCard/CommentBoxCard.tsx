import CustomAvatar from "@/components/CustomElements/CustomAvatar/CustomAvatar";

const CommentBoxCard = () => {
  return (
    <div className="flex items-center gap-x-2">
      <CustomAvatar width="w-64" />

      <div className="max-h-20 overflow-y-hidden">
        <h3>Usuario</h3>
        <p className="text-sm text-gray-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime modi
          incidunt quo dolores recusandae? Assumenda earum libero aut, aperiam
          suscipit delectus consequuntur aspernatur, unde quam totam iusto iure
          ipsum praesentium!
        </p>
      </div>
    </div>
  );
};

export default CommentBoxCard;
