import React from "react";

const RelatedVideoCard = () => {
  return (
    <div className="flex gap-x-2">
      <picture>
        <img
          className="w-24 rounded-xl"
          src="https://github.com/shadcn.png"
          alt="video-image"
        />
      </picture>

      <div>
        <p>Título del vídeo</p>
        <small>Info video</small>
      </div>
    </div>
  );
};

export default RelatedVideoCard;
