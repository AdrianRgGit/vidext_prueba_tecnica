import { MessageCircle } from "lucide-react";
import CommentCard from "./CommentCard/CommentCard";

const Comments = () => {
  return (
    <section className="bg-purple-2/50 rounded-xl px-4">
      <article className="border-gray-1/50 mb-4 flex items-center justify-between border-b-2 py-2">
        <h2 className="text-2xl">Comentarios</h2>
        <div className="flex items-center gap-x-2">
          <small>3241 comentarios</small>
          <MessageCircle />
        </div>
      </article>

      <article className="flex max-h-full flex-col gap-y-4 overflow-y-auto">
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </article>
    </section>
  );
};

export default Comments;
