export const data = JSON.parse("{\"key\":\"v-22a39d25\",\"path\":\"/about.html\",\"title\":\"关于这个网站的初衷\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"关于这个网站的初衷\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1724167618000},\"readingTime\":{\"minutes\":1,\"words\":140},\"filePathRelative\":\"about.md\"}")

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
