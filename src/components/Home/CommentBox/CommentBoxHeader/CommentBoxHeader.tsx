import { CommentBoxHeaderProps } from "@/types/homeTypes";
import { MessageCircle } from "lucide-react";
import { FC } from "react";

const CommentBoxHeader: FC<CommentBoxHeaderProps> = ({ data }) => {
  return (
    <article className="mb-4 flex items-center justify-between border-b-2 border-gray-1/50 py-2">
      <h2 className="text-2xl">Comentarios</h2>
      <div className="flex items-center gap-x-2">
        <small className="text-gray-1">{data?.comments.length}</small>
        <MessageCircle />
      </div>
    </article>
  );
};

export default CommentBoxHeader;
