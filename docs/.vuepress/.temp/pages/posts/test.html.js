export const data = JSON.parse("{\"key\":\"v-2be07832\",\"path\":\"/posts/test.html\",\"title\":\"时间简史\",\"lang\":\"zh-CN\",\"frontmatter\":{\"layout\":\"Post\",\"title\":\"时间简史\",\"subtitle\":\"从大爆炸到黑洞\",\"date\":\"2020-03-31T00:00:00.000Z\",\"author\":\"斯蒂芬·霍金\",\"useHeaderImage\":true,\"headerImage\":\"/img/home-bg/1.jpg\",\"headerMask\":\"rgba(40, 57, 101, .4)\",\"headerImageCredit\":\"Jeremy Fenske\",\"headerImageCreditLink\":\"https://www.artstation.com/artwork/nLY0K\",\"catalog\":false,\"giscus\":false,\"hide\":false,\"tags\":[\"test\",\"tag with space\"]},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1724167618000},\"readingTime\":{\"minutes\":2,\"words\":250},\"filePathRelative\":\"posts/test.md\"}")

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
