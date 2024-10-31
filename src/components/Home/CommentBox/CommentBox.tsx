import CustomInputField from "@/components/CustomInputs/CustomInputField";
import CommentBoxCard from "./CommentBoxCard/CommentBoxCard";
import CommentBoxHeader from "./CommentBoxHeader/CommentBoxHeader";
import { Send } from "lucide-react";
import { FC } from "react";
import { CommentBoxProps } from "@/types/homeTypes";
import { CommentData } from "@/types/dataTypes";

const CommentBox: FC<CommentBoxProps> = ({ data, isLoading }) => {
  return (
    <section className="mx-2 flex flex-col justify-between rounded-xl bg-primary-2 px-4">
      <div>
        <CommentBoxHeader data={data} />
        <article className="flex max-h-96 flex-col gap-y-4 overflow-y-auto">
          {data?.comments.map((comment: CommentData) => (
            <CommentBoxCard key={comment.id} data={comment} />
          ))}
        </article>
      </div>

      <article className="mb-2 flex w-full items-center rounded-xl bg-gray-1/50 p-1">
        <CustomInputField
          name="sendComment"
          placeholder="Escribe un comentario"
          type="text"
          bg="bg-transparent"
        />
        <button
          type="button"
          className="flex items-center justify-center rounded-full bg-secondary-1 p-3"
          onClick={() => {window.alert("Funcionalidad no disponible, disculpen las molestias")}}
        >
          <Send size={16} fill="white" />
        </button>
      </article>
    </section>
  );
};

export default CommentBox;
