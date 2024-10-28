import { Button } from "@/components/ui/button";
import RelatedVideoCard from "./RelatedVideoCard/RelatedVideoCard";

const RelatedVideos = () => {
  return (
    <section className="rounded-xl px-2 py-8">
      <h3 className="mb-8">Videos relacionados</h3>

      <article className="flex flex-col gap-y-4">
        <RelatedVideoCard />
        <RelatedVideoCard />

        <Button className="bg-secondary-1 hover:bg-secondary-1/80 w-full py-6">
          Ver todos los videos
        </Button>
      </article>
    </section>
  );
};

export default RelatedVideos;
