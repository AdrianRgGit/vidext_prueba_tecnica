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
      <SideNav />
      <main className="ml-20 grid grid-cols-1 grid-rows-[6rem_32rem] lg:grid-cols-3">
        <Header data={user} isLoading={loadingUser} />

        {videoSelected ? (
          <>
            <MediaPlayer data={videoSelected} isLoading={isLoading} />
            <CommentBox data={videoSelected} isLoading={isLoading} />
            <MediaDescription data={videoSelected} isLoading={isLoading} />
          </>
        ) : (
          <Skeleton className="h-full w-full rounded-xl bg-skeleton-1" />
        )}

        <RelatedVideos
          data={videos}
          isLoading={isLoading}
          setSelectedVideo={setSelectedVideo}
        />
      </main>
    </>
  );
}
