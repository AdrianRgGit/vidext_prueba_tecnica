import MediaDescriptionContent from "./MediaDescriptionContent/MediaDescriptionContent";
import MediaDescriptionHeader from "./MediaDescriptionHeader/MediaDescriptionProfile";

const MediaDescription = () => {
  return (
    <section className="col-span-2 px-4 py-4">
      <MediaDescriptionHeader />
      <MediaDescriptionContent />
    </section>
  );
};

export default MediaDescription;
