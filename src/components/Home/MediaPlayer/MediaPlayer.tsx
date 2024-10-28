const MediaPlayer = () => {
  return (
    <section className="col-span-2 px-4">
      <div className="relative h-0" style={{ paddingBottom: "56.25%" }}>
        <video
          controls
          className="absolute left-0 top-0 h-full w-full rounded-xl object-cover"
        >
          <source src="/vid/vid_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default MediaPlayer;
