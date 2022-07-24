import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  "/planet",
  // "/slide",
  {
    icon: "note",
    link: "/article",
    text: "所有文章"
  },
  {
    text: "RocketMQ",
    icon: "note",
    prefix: "/RocketMQ/",
    link: "/RocketMQ/",
    children: [
      {
        text: "01.基础知识",
        icon: "note",
        collapsable: true,
        prefix: "article/",
        link: "01.基础知识"
      },
      {
        text: "02.集群搭建",
        icon: "note",
        collapsable: true,
        prefix: "article/",
        link: "02.集群搭建"
      },
      // {
      //   text: "Articles 5-12",
      //   icon: "note",
      //   children: [
      //     {
      //       text: "Articles 5-8",
      //       icon: "note",
      //       collapsable: true,
      //       prefix: "article/",
      //       children: ["article5", "article6", "article7", "article8"],
      //     },
      //     {
      //       text: "Articles 9-12",
      //       icon: "note",
      //       children: ["article9", "article10", "article11", "article12"],
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   icon: "creative",
  //   text: "Guide",
  //   prefix: "/guide/",
  //   link: "/guide/",
  //   children: "structure",
  // },
  // {
  //   text: "Articles",
  //   icon: "note",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "Articles 1-4",
  //       icon: "note",
  //       collapsable: true,
  //       prefix: "article/",
  //       children: ["article1", "article2", "article3", "article4"],
  //     },
  //     {
  //       text: "Articles 5-12",
  //       icon: "note",
  //       children: [
  //         {
  //           text: "Articles 5-8",
  //           icon: "note",
  //           collapsable: true,
  //           prefix: "article/",
  //           children: ["article5", "article6", "article7", "article8"],
  //         },
  //         {
  //           text: "Articles 9-12",
  //           icon: "note",
  //           children: ["article9", "article10", "article11", "article12"],
  //         },
  //       ],
  //     },
  //   ],
  // },
]);