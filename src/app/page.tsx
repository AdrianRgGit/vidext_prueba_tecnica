import CommentBox from "@/components/Home/CommentBox/CommentBox";
import MediaDescription from "@/components/Home/MediaDescription/MediaDescription";
import MediaPlayer from "@/components/Home/MediaPlayer/MediaPlayer";
import RelatedVideos from "@/components/Home/RelatedVideos/RelatedVideos";
import Header from "@/components/Layout/Header/Header";
import SideNav from "@/components/Layout/SideNav/SideNav";

export default function Home() {
  return (
    <>
      <SideNav />
      <main className="ml-20 grid grid-cols-1 grid-rows-[6rem_32rem] lg:grid-cols-3">
        <Header />
        <MediaPlayer />
        <CommentBox />
        <MediaDescription />
        <RelatedVideos />
      </main>
    </>
  );
}
