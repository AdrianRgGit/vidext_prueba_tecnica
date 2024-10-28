import CommentBoxCard from "./CommentBoxCard/CommentBoxCard";
import CommentBoxHeader from "./CommentBoxHeader/CommentBoxHeader";

const CommentBox = () => {
  return (
    <section className="mx-2 rounded-xl bg-primary-2 px-4">
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
