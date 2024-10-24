import { MessageCircle } from "lucide-react";

const CommentBoxHeader = () => {
  return (
    <article className="border-gray-1/50 mb-4 flex items-center justify-between border-b-2 py-2">
      <h2 className="text-2xl">Comentarios</h2>
      <div className="flex items-center gap-x-2">
        <small>3241 comentarios</small>
        <MessageCircle />
      </div>
    </article>
  );
};

export default CommentBoxHeader;
