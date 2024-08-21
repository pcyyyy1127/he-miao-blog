import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import theme from './theme'
export default defineUserConfig({
  bundler: viteBundler(),
  theme,
  base: '/he-miao-blog/',
  locales: {
    // '/': {
    //   lang: 'en-US',
    //   title: "HeMiao's Area",
    //   description: 'A place to record my daily learning, thoughts, and tools',
    // },
    '/': {
      lang: 'zh-CN',
      title: '鹤渺的思考区',
      description: '一个记录我日常学习、想法和工具的地方',
    },
  },
})
