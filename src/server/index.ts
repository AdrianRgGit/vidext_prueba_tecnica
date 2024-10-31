import prisma from "./prisma";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getVideos: publicProcedure.query(async () => {
    const videos = await prisma.video.findMany({
      include: { comments: true },
    });
    return videos;
  }),
});

export type AppRouter = typeof appRouter;
