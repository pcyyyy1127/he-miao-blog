export const data = JSON.parse("{\"key\":\"v-d5d13fc0\",\"path\":\"/tags/test/\",\"title\":\"test | 标签\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"test | 标签\",\"layout\":\"Tags\",\"blog\":{\"type\":\"category\",\"name\":\"test\",\"key\":\"tag\"}},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":null}")

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
