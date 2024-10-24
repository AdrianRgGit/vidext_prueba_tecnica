import Comments from "@/components/Home/Comments/Comments";
import MediaDescription from "@/components/Home/MediaDescription/MediaDescription";
import MediaInfo from "@/components/Home/MediaInfo/MediaInfo";
import MediaPlayer from "@/components/Home/MediaPlayer/MediaPlayer";
import RelatedVideos from "@/components/Home/RelatedVideos/RelatedVideos";
import Header from "@/components/Layout/Header/Header";
import SideNav from "@/components/Layout/SideNav/SideNav";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-1 grid-rows-[6rem_32rem] lg:grid-cols-[6rem_1fr_1fr_1fr]">
      <SideNav />
      <Header />
      <MediaPlayer />
      <Comments />
      <MediaDescription />
      <MediaInfo />
      <RelatedVideos />
    </main>
  );
}
