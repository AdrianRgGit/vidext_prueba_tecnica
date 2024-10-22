import Comments from "@/components/Home/Comments/Comments";
import MediaDescription from "@/components/Home/MediaDescription/MediaDescription";
import MediaInfo from "@/components/Home/MediaInfo/MediaInfo";
import MediaPlayer from "@/components/Home/MediaPlayer/MediaPlayer";
import RelatedVideos from "@/components/Home/RelatedVideos/RelatedVideos";
import Header from "@/components/Layout/Header/Header";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-3">
      <Header />
      <MediaPlayer />
      <Comments />
      <MediaDescription />
      <MediaInfo />
      <RelatedVideos />
    </main>
  );
}
