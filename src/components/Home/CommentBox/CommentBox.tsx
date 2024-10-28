import CustomInputField from "@/components/CustomInputs/CustomInputField";
import CommentBoxCard from "./CommentBoxCard/CommentBoxCard";
import CommentBoxHeader from "./CommentBoxHeader/CommentBoxHeader";
import { Send } from "lucide-react";

const CommentBox = () => {
  return (
    <section className="bg-primary-2 mx-2 flex flex-col justify-between rounded-xl px-4">
      <div>
        <CommentBoxHeader />
        <article className="flex max-h-96 flex-col gap-y-4 overflow-y-auto">
          <CommentBoxCard />
          <CommentBoxCard />
          <CommentBoxCard />
          <CommentBoxCard />
          <CommentBoxCard />
          <CommentBoxCard />
          <CommentBoxCard />
          <CommentBoxCard />
          <CommentBoxCard />
        </article>
      </div>

      <article className="bg-gray-1/50 mb-2 flex w-full items-center rounded-xl p-1">
        <CustomInputField
          name="sendComment"
          placeholder="Escribe un comentario"
          type="text"
          bg="bg-transparent"
        />
        <button
          type="button"
          className="bg-secondary-1 flex items-center justify-center rounded-full p-3"
        >
          <Send size={16} fill="white" />
        </button>
      </article>
    </section>
  );
};

export default CommentBox;
