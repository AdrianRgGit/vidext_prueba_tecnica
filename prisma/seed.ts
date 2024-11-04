const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const commentsCount = await prisma.comment.count();
  const videosCount = await prisma.video.count();

  if (commentsCount > 0) {
    await prisma.comment.deleteMany({});
    console.log("Deleted all comments.");
  } else {
    console.log("No comments to delete.");
  }

  if (videosCount > 0) {
    await prisma.video.deleteMany({});
    console.log("Deleted all videos.");
  } else {
    console.log("No videos to delete.");
  }

  await prisma.video.createMany({
    data: [
      {
        username: "Adrián Ramírez",
        avatar: "https://picsum.photos/60/60",
        title: "The 10 Best JavaScript Projects",
        description:
          "Dive into the world of JavaScript with this comprehensive guide to the ten best projects any developer can build to enhance their skills and expand their portfolio. From dynamic web applications to interactive data visualizations, each project is designed to challenge and broaden your knowledge. You’ll explore core concepts like DOM manipulation as well as advanced structures using APIs and Webpack. Each project comes with step-by-step instructions, tool recommendations, and tips on how to customize each application to reflect your unique style. This is an essential resource for anyone who wants to turn learning into real, impressive accomplishments!",
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
        description:
          "Understanding TypeScript is your gateway to mastering one of the most powerful languages in modern web development. This in-depth guide will help you transition smoothly from JavaScript to TypeScript, covering everything from basic types and interfaces to generics and advanced types. You’ll learn how TypeScript enhances code reliability and discover its powerful debugging tools, which help prevent errors before they happen. Through practical examples and comprehensive explanations, this guide ensures you’ll gain the confidence to tackle large-scale projects with ease and precision. Whether you're a beginner or a seasoned developer, Understanding TypeScript opens new doors to scalable, clean, and maintainable code.",
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
        description:
          "Choosing between React and Vue can be challenging, as both have distinct strengths and are widely popular among developers. This guide provides an in-depth comparison of these two powerful frameworks, breaking down key areas such as component structure, state management, learning curve, and ecosystem. We explore performance differences, community support, and typical use cases, along with expert opinions on when to use each one. Whether you’re just getting started or planning a new project, this comparison helps you make an informed decision by examining the pros and cons of each framework, providing real-world scenarios, and helping you choose the one that best fits your goals and team dynamics.",
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
          "Discover the world of backend development with Node.js in this thorough introduction that covers all the essentials. Starting with the fundamentals of JavaScript on the server, this guide explores Node.js’s asynchronous nature, non-blocking I/O, and powerful runtime environment. You’ll learn how to set up a Node server, work with files, and interact with databases. Plus, we cover popular modules and how to manage dependencies with npm. With clear explanations and hands-on exercises, Introduction to Node.js provides everything you need to start building robust, scalable server-side applications that power today’s web and mobile platforms.",
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
        description:
          "Building REST APIs with Express is your step-by-step guide to creating APIs that form the backbone of web and mobile applications. Starting with the basics of REST architecture, this guide takes you through setting up a server with Express, defining routes, and handling HTTP requests. You’ll learn how to structure endpoints, apply middleware for authentication and validation, and handle errors effectively. Advanced topics include data modeling with MongoDB, implementing CRUD operations, and deploying your API to the cloud. By the end, you’ll have a fully functional API, ready to integrate with front-end applications and scale as your project grows.",
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
          "Take your JavaScript skills to the next level with Advanced JavaScript Concepts. This guide goes beyond the basics, delving into topics like closures, prototypal inheritance, the event loop, and asynchronous programming. Each concept is explained with clarity, accompanied by examples and exercises to help you understand even the most complex areas. You’ll also explore memory management, modular design patterns, and advanced debugging techniques. With a focus on best practices and real-world applications, this guide equips you with the knowledge to write cleaner, faster, and more efficient JavaScript code, giving you a competitive edge in any development environment.",
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
        comment: "Loved the comparison!",
        videoId: allVideos[0].id,
      },
      {
        username: "Adrián Ramírez",
        avatar: "/images/profiles/profile_2.webp",
        comment: "Great video!",
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
      {
        username: "Carlos Mendoza",
        avatar: "https://picsum.photos/60/65",
        comment: "Incredible content! Learned a lot.",
        videoId: allVideos[0].id,
      },
      {
        username: "María Torres",
        avatar: "https://picsum.photos/60/66",
        comment: "This video was really helpful. Thanks!",
        videoId: allVideos[0].id,
      },
      {
        username: "Sofía Pérez",
        avatar: "https://picsum.photos/60/67",
        comment: "I appreciate the clarity in the explanations.",
        videoId: allVideos[0].id,
      },
      {
        username: "Javier Ruiz",
        avatar: "https://picsum.photos/60/68",
        comment: "Great job! I will definitely apply this knowledge.",
        videoId: allVideos[0].id,
      },
      {
        username: "Clara Silva",
        avatar: "https://picsum.photos/60/69",
        comment: "This is just what I needed for my project.",
        videoId: allVideos[0].id,
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
