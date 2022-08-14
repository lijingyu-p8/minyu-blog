import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  "/planet",
  // "/slide",
  {
    icon: "tab",
    link: "/article",
    text: "所有文章"
  },
  {
    text: "RocketMQ",
    icon: "blog",
    prefix: "/RocketMQ/",
    link: "/RocketMQ/",
    children: [
      {
        text: "01.基础知识",
        icon: "article",
        collapsable: true,
        prefix: "article/",
        link: "01.基础知识"
      },
      {
        text: "02.集群搭建",
        icon: "article",
        collapsable: true,
        prefix: "article/",
        link: "02.集群搭建"
      },
      {
        text: "03.Java-API",
        icon: "article",
        collapsable: true,
        prefix: "article/",
        link: "03.Java-API"
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
  {
    text: "ElasticSearch",
    icon: "blog",
    prefix: "/ElasticSearch/",
    link: "/ElasticSearch/",
    children: [
      {
        text: "01.安装",
        icon: "article",
        collapsable: true,
        prefix: "article/",
        link: "01.安装"
      },
      {
        text: "02.核心概念",
        icon: "article",
        collapsable: true,
        prefix: "article/",
        link: "02.核心概念"
      },
      {
        text: "03.索引",
        icon: "article",
        collapsable: true,
        prefix: "article/",
        link: "03.索引"
      },
      {
        text: "04.数据新增",
        icon: "article",
        collapsable: true,
        prefix: "article/",
        link: "04.数据新增"
      },
      {
        text: "05.数据查询",
        icon: "article",
        collapsable: true,
        prefix: "article/",
        link: "05.数据查询"
      },
      {
        text: "06.数据修改",
        icon: "article",
        collapsable: true,
        prefix: "article/",
        link: "06.数据修改"
      },
      {
        text: "07.数据删除",
        icon: "article",
        collapsable: true,
        prefix: "article/",
        link: "07.数据删除"
      },
      {
        text: "10.集群分布式",
        icon: "article",
        collapsable: true,
        prefix: "article/",
        link: "10.集群分布式"
      },
      {
        text: "11.ES相关原理",
        icon: "article",
        collapsable: true,
        prefix: "article/",
        link: "11.ES相关原理"
      },
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
