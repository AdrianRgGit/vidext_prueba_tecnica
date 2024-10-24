import { MessageCircle } from "lucide-react";

const Comments = () => {
  return (
    <section className="bg-purple-2/50 rounded-xl px-4">
      <article className="border-gray-1/50 flex items-center justify-between border-b-2 py-2">
        <h3 className="text-2xl">Comentarios</h3>
        <div className="flex items-center gap-x-2">
          <small>3241 comentarios</small>
          <MessageCircle />
        </div>
      </article>

      <article></article>
    </section>
  );
};

export default Comments;
