import { Button } from "@/components/ui/button";
import RelatedVideoCard from "./RelatedVideoCard/RelatedVideoCard";

const RelatedVideos = () => {
  return (
    <section className="rounded-xl py-4 px-2">
      <h3 className="mb-8">Videos relacionados</h3>

      <article className="flex flex-col gap-y-4">
        <RelatedVideoCard />
        <RelatedVideoCard />

        <Button className="w-full bg-purple-2 py-6">
          Ver todos los videos
        </Button>
      </article>
    </section>
  );
};

export default RelatedVideos;
