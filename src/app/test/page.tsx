"use client";
import React from "react";
import { trpc } from "../_trpc/client";

const page = () => {
  const getTodos = trpc.getTodos.useQuery();

  return <div>{JSON.stringify(getTodos.data)}</div>;
};

export default page;
