import { trpc } from "@/app/_trpc/client";
import { Button } from "@/components/ui/button";
import { MediaDescriptionChildProps } from "@/types/homeTypes";
import { Eye, Heart, Share2 } from "lucide-react";
import { FC, useState } from "react";

const MediaDescriptionHeaderInfo: FC<MediaDescriptionChildProps> = ({
  data,
}) => {
  const [likes, setLikes] = useState(data?.likes || 0); // Estado para manejar el número de likes
  const [isLiking, setIsLiking] = useState(false);
  const likeVideo = trpc.likeVideo.useMutation();

  const handleLike = () => {
    setIsLiking(true);
    likeVideo.mutate(
      { videoId: data?.id },
      {
        onSuccess: (updatedVideo) => {
          setLikes(updatedVideo.likes);
        },
        onError: () => {
          setIsLiking(false);
          console.error("Hubo un problema al dar like.");
        },
      },
    );
  };

  return (
    <article className="flex items-center gap-x-8">
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <Eye stroke="gray" />
          <small className="text-gray-1">{data?.views}</small>
        </div>
        <div className="flex items-center gap-x-2">
          <Heart stroke="gray" />
          <small className="text-gray-1">{likes}</small>
        </div>
      </div>

      <div className="flex gap-x-2">
        <Button
          type="button"
          onClick={() => handleLike()}
          className="flex w-28 items-center justify-center gap-x-2 bg-red-1 hover:bg-red-1/80"
        >
          <Heart fill={isLiking ? "white" : "none"} />
          <p>Like</p>
        </Button>

        <Button
          type="button"
          className="flex w-28 cursor-not-allowed items-center justify-center gap-x-2 bg-sky-1 hover:bg-sky-1/80"
        >
          <Share2 />
          <p>Share</p>
        </Button>
      </div>
    </article>
  );
};

export default MediaDescriptionHeaderInfo;
