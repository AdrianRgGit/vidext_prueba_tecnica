"use client";

import CommentBox from "@/components/Home/CommentBox/CommentBox";
import MediaDescription from "@/components/Home/MediaDescription/MediaDescription";
import MediaPlayer from "@/components/Home/MediaPlayer/MediaPlayer";
import RelatedVideos from "@/components/Home/RelatedVideos/RelatedVideos";
import Header from "@/components/Layout/Header/Header";
import SideNav from "@/components/Layout/SideNav/SideNav";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUsers] = useState(null);
  const [videos, setVideos] = useState(null);
  const [videoSelected, setVideoSelected] = useState(null);

  const [loadingUser, setLoadingUser] = useState(false);
  const [loadingVid, setLoadingVid] = useState(false);
  const [loadingVideoSelected, setLoadingVideoSelected] = useState(false);

  useEffect(() => {
    setLoadingUser(true);
    setLoadingVid(true);
    setLoadingVideoSelected(true);

    // NOTE: Fetch de user
    fetch("/mocks/user.json")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoadingUser(false);
      })
      .catch((error) => {
        console.error("Error al cargar el mock:", error);
      });

    // NOTE: Fetch de videos
    fetch("/mocks/vids.json")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setLoadingVid(false);
      })
      .catch((error) => {
        console.error("Error al cargar el mock:", error);
        setLoadingVid(false);
      });

    // NOTE: Video seleccionado
    fetch("/mocks/vidSelected.json")
      .then((response) => response.json())
      .then((data) => {
        setVideoSelected(data);
        setLoadingVideoSelected(false);
      })
      .catch((error) => {
        console.error("Error al cargar el mock:", error);
        setLoadingVideoSelected(false);
      });
  }, []);

  return (
    <>
      <SideNav />
      <main className="ml-20 grid grid-cols-1 grid-rows-[6rem_32rem] lg:grid-cols-3">
        <Header data={user} isLoading={loadingUser} />
        <MediaPlayer data={videoSelected} isLoading={loadingVideoSelected} />
        <CommentBox data={videoSelected} isLoading={loadingVideoSelected} />
        <MediaDescription
          data={videoSelected}
          isLoading={loadingVideoSelected}
        />
        <RelatedVideos data={videos} isLoading={loadingVid} />
      </main>
    </>
  );
}
