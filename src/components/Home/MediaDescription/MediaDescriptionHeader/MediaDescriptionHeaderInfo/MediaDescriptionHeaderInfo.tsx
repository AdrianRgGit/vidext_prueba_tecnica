import { Button } from "@/components/ui/button";
import { Eye, Heart, Share2 } from "lucide-react";

const MediaDescriptionHeaderInfo = () => {
  return (
    <article className="flex items-center gap-x-8">
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <Eye stroke="gray" />
          <small className="text-gray-1">345000</small>
        </div>
        <div className="flex items-center gap-x-2">
          <Heart stroke="gray" />
          <small className="text-gray-1">21000</small>
        </div>
      </div>

      <div className="flex gap-x-2">
        <Button className="bg-red-1 hover:bg-red-1/80 flex w-28 items-center justify-center gap-x-2">
          <Heart />
          <p>Like</p>
        </Button>

        <Button className="flex w-28 items-center justify-center gap-x-2 bg-sky-1 hover:bg-sky-1/80">
          <Share2 />
          <p>Share</p>
        </Button>
      </div>
    </article>
  );
};

export default MediaDescriptionHeaderInfo;
