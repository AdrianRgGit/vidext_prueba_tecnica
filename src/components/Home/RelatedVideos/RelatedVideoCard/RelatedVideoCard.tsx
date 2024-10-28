import React from "react";

const RelatedVideoCard = () => {
  return (
    <a href="#" className="flex gap-x-2">
      <picture className="w-96">
        <img
          className="w-full rounded-xl"
          src="https://github.com/shadcn.png"
          alt="video-image"
        />
      </picture>

      <div className="flex flex-col justify-between">
        <div>
          <p>Título del vídeo</p>
          <small className="text-gray-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            praesentium nihil eius voluptates praesentium nihil eius voluptates
          </small>
        </div>

        <div className="flex gap-x-2">
          <small className="text-gray-1">84530 visualizaciones</small>
        </div>
      </div>
    </a>
  );
};

export default RelatedVideoCard;
