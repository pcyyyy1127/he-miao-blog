export const data = JSON.parse("{\"key\":\"v-76fdf177\",\"path\":\"/blogs/\",\"title\":\"blogs\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"blogs\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1724167618000},\"readingTime\":{\"minutes\":1,\"words\":3},\"filePathRelative\":\"blogs/README.md\"}")

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
