const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const video1 = await prisma.video.create({
    data: {
      username: "Adrián Ramírez",
      avatar: "https://picsum.photos/60/60",
      title: "The 10 Best JavaScript Projects",
      description: "The 10 Best JavaScript Projects",
      url: "/vid/vid_1.mp4",
      views: 1000,
      likes: 100,
      followers: 550,
      comments: {
        create: [
          {
            username: "Paco López",
            avatar: "/images/profiles/profile_1.webp",
            comment: "comment 1",
          },
          {
            username: "Adrián Ramírez",
            avatar: "/images/profiles/profile_2.webp",
            comment: "comment 2",
          },
          {
            username: "Lucas Tormo",
            avatar: "/images/profiles/profile_3.webp",
            comment: "comment 3",
          },
          {
            username: "Francisco García",
            avatar: "/images/profiles/profile_4.webp",
            comment: "comment 4",
          },
          {
            username: "Laura Gómez",
            avatar: "/images/profiles/profile_5.webp",
            comment: "comment 5",
          },
        ],
      },
    },
  });

  console.log(`Created video with id: ${video1.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
