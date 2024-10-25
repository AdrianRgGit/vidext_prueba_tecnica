const MediaPlayer = () => {
  return (
    <section className="col-span-2 px-4">
      <video
        controls
        className="border-purple-3 h-full w-full rounded-xl border"
      >
        <source src="ruta/al/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default MediaPlayer;
