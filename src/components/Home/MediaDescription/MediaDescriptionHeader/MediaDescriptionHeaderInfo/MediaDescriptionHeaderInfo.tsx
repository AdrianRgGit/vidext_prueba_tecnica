import { Button } from "@/components/ui/button";
import { Eye, Heart, Share2 } from "lucide-react";

const MediaDescriptionHeaderInfo = () => {
  return (
    <article className="flex items-center gap-x-8">
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <Eye />
          <p>345000</p>
        </div>
        <div className="flex items-center gap-x-2">
          <Heart fill="white" />
          <p>21000</p>
        </div>
      </div>

      <div className="flex gap-x-2">
        <Button className="flex w-24 items-center justify-center gap-x-2">
          <Heart />
          <p>Like</p>
        </Button>

        <Button className="flex w-24 items-center justify-center gap-x-2">
          <Share2 />
          <p>Share</p>
        </Button>
      </div>
    </article>
  );
};

export default MediaDescriptionHeaderInfo;
