export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Blog Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"Blog Home\",\"bgImage\":\"/main.png\",\"heroText\":\"敏鱼博客\",\"tagline\":\"一个立志不要成为滴滴司机的程序员\",\"heroFullScreen\":true,\"footer\":\"customize your footer text\",\"summary\":\"<!-- This is a blog home page demo. To use this layout, you should set both layout: Blog and home: true in the page front matter. For related configuration docs, please see blog ho\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"敏鱼-BLOG\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Blog Home\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.55,\"words\":165},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
