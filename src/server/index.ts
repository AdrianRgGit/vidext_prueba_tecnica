import { z } from "zod";
import prisma from "./prisma";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  // NOTE: Obtener todos los videos
  getVideos: publicProcedure.query(async () => {
    const videos = await prisma.video.findMany({
      include: { comments: true },
    });
    return videos;
  }),

  // NOTE: Aumentar likes en los vídeos
  likeVideo: publicProcedure
    .input(
      z.object({
        videoId: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      const video = await prisma.video.update({
        where: {
          id: input.videoId,
        },
        data: {
          likes: {
            increment: 1,
          },
        },
      });
      return video;
    }),

  // NOTE: Aumentar visualizaciones en los vídeos
  viewVideo: publicProcedure
    .input(
      z.object({
        videoId: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      const updatedVideo = await prisma.video.update({
        where: {
          id: input.videoId,
        },
        data: {
          views: {
            increment: 1,
          },
        },
      });
      return updatedVideo;
    }),
});

export type AppRouter = typeof appRouter;
