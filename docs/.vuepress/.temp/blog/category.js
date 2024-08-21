export const categoryMap = {"tag":{"/":{"path":"/tags/","map":{"test":{"path":"/tags/test/","keys":["v-2be07832","v-53cb43ae"]},"tag with space":{"path":"/tags/tag-with-space/","keys":["v-2be07832","v-53cb43ae"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
