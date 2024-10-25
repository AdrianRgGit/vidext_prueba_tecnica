import CommentBoxCard from "./CommentBoxCard/CommentBoxCard";
import CommentBoxHeader from "./CommentBoxHeader/CommentBoxHeader";

const CommentBox = () => {
  return (
    <section className="bg-purple-2/50 rounded-xl px-2 mx-2">
      <CommentBoxHeader />
      <article className="flex max-h-full flex-col gap-y-4 overflow-y-auto">
        <CommentBoxCard />
        <CommentBoxCard />
        <CommentBoxCard />
      </article>
    </section>
  );
};

export default CommentBox;
