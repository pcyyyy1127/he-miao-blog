// import { navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs'
const isProd = process.env.NODE_ENV === 'production'
import { gungnirTheme, i18n } from "vuepress-theme-gungnir";
import { zhNavbar, enNavbar } from './navbar/index'
export default gungnirTheme({
  // 你的主题配置
  // 当前网站部署到的域名
  // hostname:'https://example.com',
  // //文章作者
  // author:{
  //   name: '鹤渺',
  //   email: '19938159461@163.com'
  // },
  navbarTitle: "HeMiao's Area",
  personalInfo: {
    // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
    name: "鹤渺",
    // 必须：头像，将在首页和移动端侧边栏显示
    avatar: "/img/logo/crane.png",
    // 必须：个人简介，将在首页显示
    description: "A place to record my daily learning, thoughts, and tools.",
    // 可选：社交平台账号，将在首页和移动端侧边栏显示
    sns: {
      github: "pcyyyy1127",  // Github
      // linkedin: "xiaohan-zou-55bba0160",  // 领英
      // facebook: "renovamen.zou",  // Facebook
      // twitter: "renovamen_zxh",  // 推特
      // zhihu: "chao-neng-gui-su",  // 知乎
      // weibo: "your-weibo-id",  // 新浪微博
      email: "19938159461@163.com",  // 邮箱
      csdn: {
        icon: "co-codio",
        link: "https://blog.csdn.net/ParkChanyelo?type=blog"
      }
    }
  },
  //首页
  homeHeaderImages: [
    // 图 1
    {
      "path": "/img/home-bg/1.jpg",
      // "mask": "rgba(40, 57, 101, .1)"
    },
    // 图 2
    {
      "path": "/img/home-bg/2.jpg",
      "mask": "rgb(101 185 152 / 18%)"
    },
    {
      "path": "/img/home-bg/3.jpg",
      "mask": "rgb(42 82 23 / 20%)"
    },
    // 图 2
    {
      "path": "/img/home-bg/4.jpg",
      // "mask": "rgb(251, 170, 152, .2)"
    },
    {
      "path": "/img/home-bg/5.jpg",
      "mask": "rgb(17 120 70 / 11%)"
    },
    // 图 2
    {
      "path": "/img/home-bg/6.jpg",
      // "mask": "rgb(251, 170, 152, .2)"
    },
    {
      "path": "/img/home-bg/7.jpg",
      "mask": "rgb(32 39 38 / 47%)"
    },
    // 图 2
    {
      "path": "/img/home-bg/8.jpg",
      "mask": "rgb(0 10 3 / 36%)"
    },
    {
      "path": "/img/home-bg/9.jpg",
      "mask": "rgb(23 68 53 / 27%)"
    },
    // 图 2
    {
      "path": "/img/home-bg/10.jpg",
      "mask": "rgb(87 102 83 / 32%)"
    },
    {
      "path": "/img/home-bg/11.jpg",
      "mask": "rgb(17 17 17 / 41%)"
    },
    // 图 2
    {
      "path": "/img/home-bg/12.jpg",
      "mask": "rgb(78 88 75 / 34%)"
    },

  ],
  blogNumPerPage: 20, // 可选：每页的博客数量，默认：10
  // 页面
  pages: {
    // 标签页配置
    tags: {
      // 可选：标签页副标题
      subtitle: '吼哇朋友们，这是标签页',

      // 可选：标签页封面图路径和蒙版
      bgImage: {
        path: '/img/home-bg/1.jpg',
        mask: 'rgba(211, 136, 37, .5)'
      }
    },

    // 链接页配置
    links: {
      // 可选：链接页副标题
      subtitle: '吼哇朋友们，这是链接页',

      // 可选：链接页封面图路径和蒙版
      bgImage: {
        // path: '/img/pages/links.jpg',
        path: '/img/home-bg/1.jpg',
        mask: 'rgba(64, 118, 190, 0.5)'
      }
    }
  },
  locales: {
    // '/': {
    //   // navbar
    //   selectLanguageName: 'English',
    //   navbarTitle: "HeMiao's Area",
    //   navbar: enNavbar,
    //   sidebar: false,
    //   // sidebar: enSidebar,
    // },
    '/': {
      // navbar
      navbar: zhNavbar,
      navbarTitle: "鹤渺的思考区",
      sidebar: false,
      // selectLanguageName: 'English',
      // sidebar: zhSidebar,
      footer: '默认页脚',
      ...i18n.zh
    }
  },


  // 页脚
  footer: `
  &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2022
  <br>
  Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>`,
  catalog: false,  // 可选，默认：true
  themePlugins: {
    search: false
  },
}) 