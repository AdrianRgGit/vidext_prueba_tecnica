"use client";

import CommentBox from "@/components/Home/CommentBox/CommentBox";
import MediaDescription from "@/components/Home/MediaDescription/MediaDescription";
import MediaPlayer from "@/components/Home/MediaPlayer/MediaPlayer";
import RelatedVideos from "@/components/Home/RelatedVideos/RelatedVideos";
import Header from "@/components/Layout/Header/Header";
import SideNav from "@/components/Layout/SideNav/SideNav";
import { useEffect, useState } from "react";
import { trpc } from "./_trpc/client";
import { Skeleton } from "@/components/ui/skeleton";
import SideNavPhone from "@/components/Layout/SideNavPhone/SideNavPhone";

export default function Home() {
  const [user, setUsers] = useState(null);
  const [videoSelected, setVideoSelected] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);

  const { data: videos, isLoading, error } = trpc.getVideos.useQuery();

  useEffect(() => {
    setLoadingUser(true);

    fetch("/mocks/user.json")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoadingUser(false);
      })
      .catch((error) => {
        console.error("Error al cargar el mock:", error);
      });
  }, []);

  useEffect(() => {
    if (videos?.length > 0) {
      setVideoSelected(videos[0]);
    }
  }, [videos]);

  const setSelectedVideo = (videoId) => {
    const selectedVideo = videos?.find((video) => video.id === videoId);
    setVideoSelected(selectedVideo);
  };

  return (
    <>
      <div className="hidden lg:block">
        <SideNav />
      </div>

      <div className="block lg:hidden">
        <SideNavPhone />
      </div>

      <main className="grid grid-cols-1 grid-rows-[6rem_32rem] lg:ml-20 lg:grid-cols-3">
        <Header data={user} isLoading={loadingUser} />

        {videoSelected && !isLoading ? (
          <>
            <MediaPlayer data={videoSelected} />
            <CommentBox data={videoSelected} />
            <MediaDescription data={videoSelected} />
          </>
        ) : (
          <>
            <Skeleton className="col-span-2 mx-4 my-6 bg-skeleton-1 lg:my-0" />
            <Skeleton className="mx-4 rounded-xl bg-skeleton-1" />
            <Skeleton className="col-span-2 mx-4 my-8 h-64 bg-skeleton-1" />
          </>
        )}

        {!isLoading ? (
          <RelatedVideos data={videos} setSelectedVideo={setSelectedVideo} />
        ) : (
          <Skeleton className="mx-2 my-8 h-64 rounded-xl bg-skeleton-1" />
        )}
      </main>
    </>
  );
}
