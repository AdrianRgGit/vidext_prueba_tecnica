import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const CommentBoxCard = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Avatar>
        <AvatarImage
          className="w-64 rounded-full"
          src="https://github.com/shadcn.png"
          alt="avatar"
        />
        <AvatarFallback className="bg-purple-3 rounded-full p-4">
          AV
        </AvatarFallback>
      </Avatar>

      <div className="max-h-20 overflow-y-hidden">
        <h3>Usuario</h3>
        <p className="text-sm">
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
