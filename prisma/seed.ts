const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.comment.deleteMany({});
  await prisma.video.deleteMany({});

  await prisma.video.createMany({
    data: [
      {
        username: "Adrián Ramírez",
        avatar: "https://picsum.photos/60/60",
        title: "The 10 Best JavaScript Projects",
        description: "The 10 Best JavaScript Projects",
        url: "/vid/vid_1.mp4",
        banner: "/images/banners/banner_1.webp",
        views: 1000,
        likes: 100,
        followers: 550,
      },
      {
        username: "Laura Gómez",
        avatar: "https://picsum.photos/60/61",
        title: "Understanding TypeScript",
        description: "A deep dive into TypeScript features and best practices.",
        url: "/vid/vid_2.mp4",
        banner: "/images/banners/banner_2.webp",
        views: 1500,
        likes: 200,
        followers: 600,
      },
      {
        username: "Lucas Tormo",
        avatar: "https://picsum.photos/60/62",
        title: "React vs Vue: A Comparison",
        description: "Comparing the two popular JavaScript frameworks.",
        url: "/vid/vid_3.mp4",
        banner: "/images/banners/banner_3.webp",
        views: 1200,
        likes: 150,
        followers: 450,
      },
      {
        username: "Francisco García",
        avatar: "https://picsum.photos/60/63",
        title: "Introduction to Node.js",
        description:
          "Learn the basics of Node.js and building server-side applications.",
        url: "/vid/vid_4.mp4",
        banner: "/images/banners/banner_4.webp",
        views: 800,
        likes: 90,
        followers: 350,
      },
      {
        username: "Paco López",
        avatar: "https://picsum.photos/60/64",
        title: "Building REST APIs with Express",
        description: "How to create RESTful APIs using Express.js.",
        url: "/vid/vid_5.mp4",
        banner: "/images/banners/banner_5.webp",
        views: 900,
        likes: 110,
        followers: 400,
      },
      {
        username: "Adrián Ramírez",
        avatar: "https://picsum.photos/60/60",
        title: "Advanced JavaScript Concepts",
        description:
          "Explore advanced topics in JavaScript, including closures and async programming.",
        url: "/vid/vid_6.mp4",
        banner: "/images/banners/banner_6.webp",
        views: 1100,
        likes: 130,
        followers: 500,
      },
    ],
  });

  // NOTE: Para insertar las id de los videos en los comentarios
  const allVideos = await prisma.video.findMany();

  await prisma.comment.createMany({
    data: [
      {
        username: "Paco López",
        avatar: "/images/profiles/profile_1.webp",
        comment: "comment 1",
        videoId: allVideos[0].id,
      },
      {
        username: "Adrián Ramírez",
        avatar: "/images/profiles/profile_2.webp",
        comment: "comment 2",
        videoId: allVideos[0].id,
      },
      {
        username: "Laura Gómez",
        avatar: "/images/profiles/profile_2.webp",
        comment: "Great video!",
        videoId: allVideos[1].id,
      },
      {
        username: "Lucas Tormo",
        avatar: "/images/profiles/profile_3.webp",
        comment: "Very informative.",
        videoId: allVideos[2].id,
      },
      {
        username: "Francisco García",
        avatar: "/images/profiles/profile_4.webp",
        comment: "Loved the comparison!",
        videoId: allVideos[2].id,
      },
      {
        username: "Paco López",
        avatar: "/images/profiles/profile_5.webp",
        comment: "Nice introduction!",
        videoId: allVideos[3].id,
      },
      {
        username: "Paula García",
        avatar: "/images/profiles/profile_6.webp",
        comment: "Excellent explanation.",
        videoId: allVideos[4].id,
      },
    ],
  });

  console.log("Created seed successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
