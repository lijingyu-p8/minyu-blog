import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "en-US",
  title: "敏鱼-BLOG",
  description: "知识笔记",

  base: "/minyu-blog/",

  theme,
});
