import prisma from "./prisma";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30, 40, 50];
  }),

  getVideos: publicProcedure.query(async () => {
    const videos = await prisma.video.findMany({
      include: { comments: true },
    });
    return videos;
  }),
});

export type AppRouter = typeof appRouter;
