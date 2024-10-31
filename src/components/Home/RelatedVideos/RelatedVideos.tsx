import { Button } from "@/components/ui/button";
import RelatedVideoCard from "./RelatedVideoCard/RelatedVideoCard";
import { FC, useState } from "react";
import { RelatedVideosProps } from "@/types/homeTypes";

const RelatedVideos: FC<RelatedVideosProps> = ({
  data,
  isLoading,
  setSelectedVideo,
}) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const resetLoadMore = () => {
    setVisibleCount(3);
  };

  if (isLoading) return <p>Loading related videos...</p>;

  return (
    <section className="rounded-xl px-2 py-8">
      <h3 className="mb-8 text-xl">Videos relacionados</h3>

      <article className="space-y-4">
        <div className="space-y-4">
          {data
            ?.slice(0, visibleCount)
            .map((video) => (
              <RelatedVideoCard
                key={video.id}
                video={video}
                setSelectedVideo={setSelectedVideo}
              />
            ))}
        </div>

        {data && visibleCount < data?.length ? (
          <Button
            onClick={handleLoadMore}
            className="w-full bg-secondary-1 py-6 hover:bg-secondary-1/80"
          >
            Ver más
          </Button>
        ) : (
          <Button
            onClick={resetLoadMore}
            className="w-full bg-red-1 py-6 hover:bg-red-1/80"
          >
            Ver menos
          </Button>
        )}
      </article>
    </section>
  );
};

export default RelatedVideos;
