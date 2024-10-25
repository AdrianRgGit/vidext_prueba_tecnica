import React from "react";
import MediaDescriptionHeaderProfile from "./MediaDescriptionHeaderProfile/MediaDescriptionHeaderProfile";
import MediaDescriptionHeaderInfo from "./MediaDescriptionHeaderInfo/MediaDescriptionHeaderInfo";

const MediaDescriptionHeader = () => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <MediaDescriptionHeaderProfile />
      <MediaDescriptionHeaderInfo />
    </div>
  );
};

export default MediaDescriptionHeader;
