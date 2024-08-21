export const data = JSON.parse("{\"key\":\"v-3e313466\",\"path\":\"/zh/blogs/\",\"title\":\"博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"博客\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1724167618000},\"readingTime\":{\"minutes\":1,\"words\":4},\"filePathRelative\":\"zh/blogs/README.md\"}")

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
