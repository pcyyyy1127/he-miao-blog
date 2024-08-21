"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var vueRouter = require("vue-router");
require("@vue/devtools-api");
var serverRenderer = require("vue/server-renderer");
var shared = require("@vuepress/shared");
var core = require("@vueuse/core");
const pagesData$1 = {
  "v-22a39d25": () => Promise.resolve().then(function() {
    return about_html$5;
  }).then(({ data: data2 }) => data2),
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$L;
  }).then(({ data: data2 }) => data2),
  "v-76fdf177": () => Promise.resolve().then(function() {
    return index_html$K;
  }).then(({ data: data2 }) => data2),
  "v-fb0f0066": () => Promise.resolve().then(function() {
    return gettingStarted_html$5;
  }).then(({ data: data2 }) => data2),
  "v-fffb8e28": () => Promise.resolve().then(function() {
    return index_html$J;
  }).then(({ data: data2 }) => data2),
  "v-f0388862": () => Promise.resolve().then(function() {
    return index_html$I;
  }).then(({ data: data2 }) => data2),
  "v-e8b6c472": () => Promise.resolve().then(function() {
    return index_html$H;
  }).then(({ data: data2 }) => data2),
  "v-2be07832": () => Promise.resolve().then(function() {
    return test_html$2;
  }).then(({ data: data2 }) => data2),
  "v-53cb43ae": () => Promise.resolve().then(function() {
    return test2_html$2;
  }).then(({ data: data2 }) => data2),
  "v-d440f426": () => Promise.resolve().then(function() {
    return index_html$G;
  }).then(({ data: data2 }) => data2),
  "v-70e45ed8": () => Promise.resolve().then(function() {
    return about_html$4;
  }).then(({ data: data2 }) => data2),
  "v-2d0ad528": () => Promise.resolve().then(function() {
    return index_html$F;
  }).then(({ data: data2 }) => data2),
  "v-3e313466": () => Promise.resolve().then(function() {
    return index_html$E;
  }).then(({ data: data2 }) => data2),
  "v-37781588": () => Promise.resolve().then(function() {
    return gettingStarted_html$4;
  }).then(({ data: data2 }) => data2),
  "v-47357bdb": () => Promise.resolve().then(function() {
    return index_html$D;
  }).then(({ data: data2 }) => data2),
  "v-52d7e0b6": () => Promise.resolve().then(function() {
    return index_html$C;
  }).then(({ data: data2 }) => data2),
  "v-2c44730e": () => Promise.resolve().then(function() {
    return index_html$B;
  }).then(({ data: data2 }) => data2),
  "v-5d12c8dc": () => Promise.resolve().then(function() {
    return index_html$A;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html$2;
  }).then(({ data: data2 }) => data2),
  "v-15534fdd": () => Promise.resolve().then(function() {
    return index_html$z;
  }).then(({ data: data2 }) => data2),
  "v-d5d13fc0": () => Promise.resolve().then(function() {
    return index_html$y;
  }).then(({ data: data2 }) => data2),
  "v-781133a0": () => Promise.resolve().then(function() {
    return index_html$x;
  }).then(({ data: data2 }) => data2),
  "v-3a1f8885": () => Promise.resolve().then(function() {
    return index_html$w;
  }).then(({ data: data2 }) => data2)
};
const siteData$1 = JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[],"locales":{"/":{"lang":"zh-CN","title":"\u9E64\u6E3A\u7684\u601D\u8003\u533A","description":"\u4E00\u4E2A\u8BB0\u5F55\u6211\u65E5\u5E38\u5B66\u4E60\u3001\u60F3\u6CD5\u548C\u5DE5\u5177\u7684\u5730\u65B9"}}}');
const pagesComponents = {
  "v-22a39d25": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return about_html$3;
  })),
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$v;
  })),
  "v-76fdf177": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$t;
  })),
  "v-fb0f0066": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return gettingStarted_html$3;
  })),
  "v-fffb8e28": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$r;
  })),
  "v-f0388862": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$p;
  })),
  "v-e8b6c472": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$n;
  })),
  "v-2be07832": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return test_html$1;
  })),
  "v-53cb43ae": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return test2_html$1;
  })),
  "v-d440f426": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$l;
  })),
  "v-70e45ed8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return about_html$1;
  })),
  "v-2d0ad528": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$j;
  })),
  "v-3e313466": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$h;
  })),
  "v-37781588": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return gettingStarted_html$1;
  })),
  "v-47357bdb": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$f;
  })),
  "v-52d7e0b6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$d;
  })),
  "v-2c44730e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$b;
  })),
  "v-5d12c8dc": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$9;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$1;
  })),
  "v-15534fdd": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$7;
  })),
  "v-d5d13fc0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$5;
  })),
  "v-781133a0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$3;
  })),
  "v-3a1f8885": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$1;
  }))
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404$1;
  })),
  "HomePage": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return HomePage$1;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout$1;
  })),
  "Links": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Links$1;
  })),
  "Post": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Post$1;
  })),
  "Tags": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Tags$1;
  }))
};
var pagesData = vue.ref(pagesData$1);
var pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
var pageData = vue.ref(pageDataEmpty);
var usePageData = () => pageData;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
var pageFrontmatterSymbol = Symbol("");
var usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol("");
var usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol("");
var pageLangSymbol = Symbol("");
var usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var routeLocaleSymbol = Symbol("");
var useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = vue.ref(siteData$1);
var useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
var siteLocaleDataSymbol = Symbol("");
var useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var resolvers = vue.reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 != null ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = shared.isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...shared.isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return shared.dedupeHead(head);
  },
  resolvePageHeadTitle: (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales, routePath) => shared.resolveLocalePath(locales, routePath),
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = vue.defineComponent({
  name: "ClientOnly",
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
    };
  }
});
var Content = vue.defineComponent({
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page = usePageData();
    const pageComponent = vue.computed(() => pagesComponents[props.pageKey || page.value.key]);
    return () => pageComponent.value ? vue.h(pageComponent.value) : vue.h("div", "404 Not Found");
  }
});
var Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (shared.isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
var withBase = (url) => {
  if (shared.isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${shared.removeLeadingSlash(url)}`;
};
var defineClientConfig = (clientConfig) => clientConfig;
var clientConfig0 = defineClientConfig({
  setup() {
    return;
  }
});
var vars$1 = "";
var mediumZoom = "";
var clientConfig1 = defineClientConfig({
  enhance({ app, router }) {
    return;
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n) => {
    const started = nprogress$1.isStarted();
    n = clamp(n, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n === 1 ? null : n;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n = nprogress$1.status;
    if (!n) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
    }
    n = clamp(n + amount, 0, 0.994);
    return nprogress$1.set(n);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n, min, max) => {
  if (n < min)
    return min;
  if (n > max)
    return max;
  return n;
};
const toBarPerc = (n) => (-1 + n) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i--) {
      vendorName = cssPrefixes[i] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
var vars = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
var clientConfig2 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse(`{"navbarTitle":"HeMiao's Area","personalInfo":{"name":"\u9E64\u6E3A","avatar":"/img/logo/crane.png","description":"A place to record my daily learning, thoughts, and tools.","sns":{"github":"pcyyyy1127","email":"19938159461@163.com","csdn":{"icon":"co-codio","link":"https://blog.csdn.net/ParkChanyelo?type=blog"}}},"homeHeaderImages":[{"path":"/img/home-bg/1.jpg"},{"path":"/img/home-bg/2.jpg","mask":"rgb(101 185 152 / 18%)"},{"path":"/img/home-bg/3.jpg","mask":"rgb(42 82 23 / 20%)"},{"path":"/img/home-bg/4.jpg"},{"path":"/img/home-bg/5.jpg","mask":"rgb(17 120 70 / 11%)"},{"path":"/img/home-bg/6.jpg"},{"path":"/img/home-bg/7.jpg","mask":"rgb(32 39 38 / 47%)"},{"path":"/img/home-bg/8.jpg","mask":"rgb(0 10 3 / 36%)"},{"path":"/img/home-bg/9.jpg","mask":"rgb(23 68 53 / 27%)"},{"path":"/img/home-bg/10.jpg","mask":"rgb(87 102 83 / 32%)"},{"path":"/img/home-bg/11.jpg","mask":"rgb(17 17 17 / 41%)"},{"path":"/img/home-bg/12.jpg","mask":"rgb(78 88 75 / 34%)"}],"blogNumPerPage":20,"pages":{"tags":{"subtitle":"\u543C\u54C7\u670B\u53CB\u4EEC\uFF0C\u8FD9\u662F\u6807\u7B7E\u9875","bgImage":{"path":"/img/home-bg/1.jpg","mask":"rgba(211, 136, 37, .5)"}},"links":{"subtitle":"\u543C\u54C7\u670B\u53CB\u4EEC\uFF0C\u8FD9\u662F\u94FE\u63A5\u9875","bgImage":{"path":"/img/home-bg/1.jpg","mask":"rgba(64, 118, 190, 0.5)"}}},"locales":{"/":{"navbar":[{"text":"\u9996\u9875","link":"/","icon":"fa-fort-awesome"},{"text":"\u535A\u5BA2","link":"/tags/","icon":"fa-blogger-b"},{"text":"\u5DE5\u5177","link":"/links/","icon":"bi-tools"},{"text":"\u7B14\u8BB0","link":"/notes/","icon":"gi-notebook"},{"text":"\u5173\u4E8E","link":"/about","icon":"md-autoawesome"}],"navbarTitle":"$ cd /home/","sidebar":false,"footer":"\u9ED8\u8BA4\u9875\u811A","selectLanguageName":"\u7B80\u4F53\u4E2D\u6587","selectLanguageText":"\u9009\u62E9\u8BED\u8A00","selectLanguageAriaLabel":"\u9009\u62E9\u8BED\u8A00","editLinkText":"\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875","lastUpdatedText":"\u4E0A\u6B21\u66F4\u65B0","contributorsText":"\u8D21\u732E\u8005","searchText":"\u641C\u7D22","info":"\u4FE1\u606F","tip":"\u63D0\u793A","warning":"\u6CE8\u610F","danger":"\u8B66\u544A","notFound":["\u8FD9\u91CC\u4EC0\u4E48\u90FD\u6CA1\u6709","\u6211\u4EEC\u600E\u4E48\u5230\u8FD9\u6765\u4E86\uFF1F","\u8FD9\u662F\u4E00\u4E2A 404 \u9875\u9762","\u770B\u8D77\u6765\u6211\u4EEC\u8FDB\u5165\u4E86\u9519\u8BEF\u7684\u94FE\u63A5"],"backToHome":"$ cd /home/","openInNewWindow":"\u5728\u65B0\u7A97\u53E3\u6253\u5F00","toggleColorMode":"\u5207\u6362\u989C\u8272\u6A21\u5F0F","toggleSidebar":"\u5207\u6362\u4FA7\u8FB9\u680F","pageText":{"tags":"\u6807\u7B7E","links":"\u94FE\u63A5"},"showAllTagsText":"\u5168\u90E8","postNext":"\u4E0B\u4E00\u7BC7","postPrev":"\u4E0A\u4E00\u7BC7","homeNext":"\u8F83\u65B0\u7684\u6587\u7AE0","homePrev":"\u8F83\u65E7\u7684\u6587\u7AE0","pwaPopupMessage":"\u53D1\u73B0\u6709\u65B0\u5185\u5BB9\u66F4\u65B0","pwaPopupButtonText":"\u5237\u65B0","headerImageCredit":"\u56FE\u6E90"}},"footer":"\\n  &copy; <a href=\\"https://github.com/Renovamen\\" target=\\"_blank\\">Renovamen</a> 2018-2022\\n  <br>\\n  Powered by <a href=\\"https://v2.vuepress.vuejs.org\\" target=\\"_blank\\">VuePress</a> &\\n  <a href=\\"https://github.com/Renovamen/vuepress-theme-gungnir\\" target=\\"_blank\\">Gungnir</a>","catalog":false,"hitokoto":false,"colorMode":"auto","colorModeSwitch":true,"searchIcon":"ri-search-2-line","langIcon":"hi-translate","navbar":[],"sidebar":"auto","sidebarDepth":2,"repo":null,"editLink":true,"lastUpdated":true,"contributors":false,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","editLinkText":"Edit this page on GitHub","lastUpdatedText":"Last Updated","contributorsText":"Contributors","searchText":"Search","info":"INFO","tip":"TIP","warning":"WARNING","danger":"DANGER","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"$ cd /home/","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar","pageText":{"tags":"Tags","links":"Links"},"showAllTagsText":"Show All","postNext":"Next","postPrev":"Previous","homeNext":"Newer Posts","homePrev":"Older Posts","pwaPopupMessage":"New content is available.","pwaPopupButtonText":"Refresh","headerImageCredit":"Image by","search":false}`);
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return {
    ...theme,
    ...(_a = theme.locales) == null ? void 0 : _a[routeLocale]
  };
};
var clientConfig3 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const options = {};
const codeEnhance = () => {
  let unregisterRouterHook;
  const fullScreen = (block) => {
    const HTMLDom = document.querySelector("html");
    if (block.classList.contains("fullscreen-mode")) {
      block.classList.remove("fullscreen-mode");
      HTMLDom == null ? void 0 : HTMLDom.classList.remove("fixed");
    } else {
      block.classList.add("fullscreen-mode");
      HTMLDom == null ? void 0 : HTMLDom.classList.add("fixed");
    }
  };
  const insertFullScreenButtons = (block) => {
    if (block.hasAttribute("fullscreen-code-inserted"))
      return;
    const btn = document.createElement("div");
    btn.classList.add("fullscreen-code-button");
    btn.addEventListener("click", () => fullScreen(block));
    block.appendChild(btn);
    block.setAttribute("fullscreen-code-inserted", "");
  };
  const insertButtons = () => {
    const selector = options.selector || "div[class*='language-']";
    setTimeout(() => {
      document.querySelectorAll(selector).forEach((block) => {
        if (options.fullScreen !== false)
          insertFullScreenButtons(block);
      });
    }, options.delay || 500);
  };
  vue.onMounted(() => {
    insertButtons();
    const router = vueRouter.useRouter();
    unregisterRouterHook = router.afterEach(() => {
      insertButtons();
    });
  });
  vue.onUnmounted(() => {
    unregisterRouterHook();
  });
};
var main = "";
var clientConfig4 = defineClientConfig({
  setup: () => {
    codeEnhance();
  }
});
const l$1 = { "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;", "&": "&amp;" };
let h = 0;
var f = (n) => n.replace(/[<>"&]/g, (n2) => l$1[n2] || n2), p = (n) => n + h++;
const u$1 = {}, m$1 = (n) => {
  const { name: o, paths: e = [], d: t, polygons: v = [], points: r } = n;
  t && e.push({ d: t }), r && v.push({ points: r }), u$1[o] = Object.assign({}, n, { paths: e, polygons: v }), u$1[o].minX || (u$1[o].minX = 0), u$1[o].minY || (u$1[o].minY = 0);
}, c$1 = (...n) => {
  for (const o of n)
    m$1(o);
}, g = vue.defineComponent({ name: "OhVueIcon", props: { name: { type: String, validator: (n) => !n || n in u$1 || (console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${n}".
Please make sure you have imported this icon before using it.`), false) }, title: String, fill: String, scale: { type: [Number, String], default: 1 }, animation: { validator: (n) => ["spin", "spin-pulse", "wrench", "ring", "pulse", "flash", "float"].includes(n) }, hover: Boolean, flip: { validator: (n) => ["horizontal", "vertical", "both"].includes(n) }, speed: { validator: (n) => "fast" === n || "slow" === n }, label: String, inverse: Boolean }, setup(n) {
  const a = vue.ref([]), s = vue.reactive({ outerScale: 1.2, x: null, y: null }), l2 = vue.reactive({ width: 0, height: 0 }), h2 = vue.computed(() => {
    const o = Number(n.scale);
    return isNaN(o) || o <= 0 ? (console.warn('Invalid prop: prop "scale" should be a number over 0.'), s.outerScale) : o * s.outerScale;
  }), f2 = vue.computed(() => ({ "ov-icon": true, "ov-inverse": n.inverse, "ov-flip-horizontal": "horizontal" === n.flip, "ov-flip-vertical": "vertical" === n.flip, "ov-flip-both": "both" === n.flip, "ov-spin": "spin" === n.animation, "ov-spin-pulse": "spin-pulse" === n.animation, "ov-wrench": "wrench" === n.animation, "ov-ring": "ring" === n.animation, "ov-pulse": "pulse" === n.animation, "ov-flash": "flash" === n.animation, "ov-float": "float" === n.animation, "ov-hover": n.hover, "ov-fast": "fast" === n.speed, "ov-slow": "slow" === n.speed })), m2 = vue.computed(() => n.name ? u$1[n.name] : null), c2 = vue.computed(() => m2.value ? `${m2.value.minX} ${m2.value.minY} ${m2.value.width} ${m2.value.height}` : `0 0 ${g2.value} ${w2.value}`), d = vue.computed(() => {
    if (!m2.value)
      return 1;
    const { width: n2, height: o } = m2.value;
    return Math.max(n2, o) / 16;
  }), g2 = vue.computed(() => l2.width || m2.value && m2.value.width / d.value * h2.value || 0), w2 = vue.computed(() => l2.height || m2.value && m2.value.height / d.value * h2.value || 0), y = vue.computed(() => 1 !== h2.value && { fontSize: h2.value + "em" }), b = vue.computed(() => {
    if (!m2.value || !m2.value.raw)
      return null;
    const n2 = {};
    let o = m2.value.raw;
    return o = o.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g, (o2, e, t) => {
      const v = p("vat-");
      return n2[t] = v, ` id="${v}"`;
    }), o = o.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (o2, e, t, v) => {
      const r = e || v;
      return r && n2[r] ? `#${n2[r]}` : o2;
    }), o;
  }), $ = vue.computed(() => m2.value && m2.value.attr ? m2.value.attr : {}), x2 = () => {
    if (!n.name && null !== n.name && 0 === a.value.length)
      return void console.warn('Invalid prop: prop "name" is required.');
    if (m2.value)
      return;
    let o = 0, e = 0;
    a.value.forEach((n2) => {
      n2.outerScale = h2.value, o = Math.max(o, n2.width), e = Math.max(e, n2.height);
    }), l2.width = o, l2.height = e, a.value.forEach((n2) => {
      n2.x = (o - n2.width) / 2, n2.y = (e - n2.height) / 2;
    });
  };
  return vue.onMounted(() => {
    x2();
  }), vue.onUpdated(() => {
    x2();
  }), { ...vue.toRefs(s), children: a, icon: m2, klass: f2, style: y, width: g2, height: w2, box: c2, attribs: $, raw: b };
}, created() {
  const n = this.$parent;
  n && n.children && n.children.push(this);
}, render() {
  const n = Object.assign({ role: this.$attrs.role || (this.label || this.title ? "img" : null), "aria-label": this.label || null, "aria-hidden": !(this.label || this.title), width: this.width, height: this.height, viewBox: this.box }, this.attribs);
  this.attribs.stroke ? n.stroke = this.fill ? this.fill : "currentColor" : n.fill = this.fill ? this.fill : "currentColor", this.x && (n.x = this.x.toString()), this.y && (n.y = this.y.toString());
  let o = { class: this.klass, style: this.style };
  if (o = Object.assign(o, n), this.raw) {
    const n2 = this.title ? `<title>${f(this.title)}</title>${this.raw}` : this.raw;
    o.innerHTML = n2;
  }
  const e = this.title ? [vue.h("title", this.title)] : [], t = (n2, o2, e2) => vue.h(n2, { ...o2, key: `${n2}-${e2}` });
  return vue.h("svg", o, this.raw ? void 0 : e.concat([this.$slots.default ? this.$slots.default() : this.icon ? [...this.icon.paths.map((n2, o2) => t("path", n2, o2)), ...this.icon.polygons.map((n2, o2) => t("polygon", n2, o2))] : []]));
} });
function w(n, o) {
  void 0 === o && (o = {});
  var e = o.insertAt;
  if (n && "undefined" != typeof document) {
    var t = document.head || document.getElementsByTagName("head")[0], v = document.createElement("style");
    v.type = "text/css", "top" === e && t.firstChild ? t.insertBefore(v, t.firstChild) : t.appendChild(v), v.styleSheet ? v.styleSheet.cssText = n : v.appendChild(document.createTextNode(n));
  }
}
w(".ov-icon {\n  display: inline-block;\n  overflow: visible;\n  vertical-align: -0.2em;\n}\n");
w("/* ---------------- spin ---------------- */\n.ov-spin:not(.ov-hover),\n.ov-spin.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-spin {\n  animation: ov-spin 1s linear infinite;\n}\n\n.ov-spin:not(.ov-hover).ov-fast,\n.ov-spin.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-spin.ov-fast {\n  animation: ov-spin 0.7s linear infinite;\n}\n\n.ov-spin:not(.ov-hover).ov-slow,\n.ov-spin.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-spin.ov-slow {\n  animation: ov-spin 2s linear infinite;\n}\n\n/* ---------------- spin-pulse ---------------- */\n\n.ov-spin-pulse:not(.ov-hover),\n.ov-spin-pulse.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-spin-pulse {\n  animation: ov-spin 1s infinite steps(8);\n}\n\n.ov-spin-pulse:not(.ov-hover).ov-fast,\n.ov-spin-pulse.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-fast {\n  animation: ov-spin 0.7s infinite steps(8);\n}\n\n.ov-spin-pulse:not(.ov-hover).ov-slow,\n.ov-spin-pulse.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-slow {\n  animation: ov-spin 2s infinite steps(8);\n}\n\n@keyframes ov-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* ---------------- wrench ---------------- */\n.ov-wrench:not(.ov-hover),\n.ov-wrench.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-wrench {\n  animation: ov-wrench 2.5s ease infinite;\n}\n\n.ov-wrench:not(.ov-hover).ov-fast,\n.ov-wrench.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-wrench.ov-fast {\n  animation: ov-wrench 1.2s ease infinite;\n}\n\n.ov-wrench:not(.ov-hover).ov-slow,\n.ov-wrench.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-wrench.ov-slow {\n  animation: ov-wrench 3.7s ease infinite;\n}\n\n@keyframes ov-wrench {\n  0% {\n    transform: rotate(-12deg);\n  }\n\n  8% {\n    transform: rotate(12deg);\n  }\n\n  10%, 28%, 30%, 48%, 50%, 68% {\n    transform: rotate(24deg);\n  }\n\n  18%, 20%, 38%, 40%, 58%, 60% {\n    transform: rotate(-24deg);\n  }\n\n  75%, 100% {\n    transform: rotate(0deg);\n  }\n}\n\n/* ---------------- ring ---------------- */\n.ov-ring:not(.ov-hover),\n.ov-ring.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-ring {\n  animation: ov-ring 2s ease infinite;\n}\n\n.ov-ring:not(.ov-hover).ov-fast,\n.ov-ring.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-ring.ov-fast {\n  animation: ov-ring 1s ease infinite;\n}\n\n.ov-ring:not(.ov-hover).ov-slow,\n.ov-ring.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-ring.ov-slow {\n  animation: ov-ring 3s ease infinite;\n}\n\n@keyframes ov-ring {\n  0% {\n    transform: rotate(-15deg);\n  }\n\n  2% {\n    transform: rotate(15deg);\n  }\n\n  4%, 12% {\n    transform: rotate(-18deg);\n  }\n\n  6% {\n    transform: rotate(18deg);\n  }\n\n  8% {\n    transform: rotate(-22deg);\n  }\n\n  10% {\n    transform: rotate(22deg);\n  }\n\n  12% {\n    transform: rotate(-18deg);\n  }\n\n  14% {\n    transform: rotate(18deg);\n  }\n\n  16% {\n    transform: rotate(-12deg);\n  }\n\n  18% {\n    transform: rotate(12deg);\n  }\n\n  20%, 100% {\n    transform: rotate(0deg);\n  }\n}\n\n/* ---------------- pulse ---------------- */\n.ov-pulse:not(.ov-hover),\n.ov-pulse.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-pulse {\n  animation: ov-pulse 2s linear infinite;\n}\n\n.ov-pulse:not(.ov-hover).ov-fast,\n.ov-pulse.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-pulse.ov-fast {\n  animation: ov-pulse 1s linear infinite;\n}\n\n.ov-pulse:not(.ov-hover).ov-slow,\n.ov-pulse.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-pulse.ov-slow {\n  animation: ov-pulse 3s linear infinite;\n}\n\n@keyframes ov-pulse {\n  0% {\n    transform: scale(1.1);\n  }\n\n  50% {\n    transform: scale(0.8);\n  }\n\n  100% {\n    transform: scale(1.1);\n  }\n}\n\n/* ---------------- flash ---------------- */\n.ov-flash:not(.ov-hover),\n.ov-flash.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-flash {\n  animation: ov-flash 2s ease infinite;\n}\n\n.ov-flash:not(.ov-hover).ov-fast,\n.ov-flash.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-flash.ov-fast {\n  animation: ov-flash 1s ease infinite;\n}\n\n.ov-flash:not(.ov-hover).ov-slow,\n.ov-flash.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-flash.ov-slow {\n  animation: ov-flash 3s ease infinite;\n}\n\n@keyframes ov-flash {\n  0%, 100%, 50%{\n    opacity: 1;\n  }\n  25%, 75%{\n    opacity: 0;\n  }\n}\n\n/* ---------------- float ---------------- */\n.ov-float:not(.ov-hover),\n.ov-float.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-float {\n  animation: ov-float 2s linear infinite;\n}\n\n.ov-float:not(.ov-hover).ov-fast,\n.ov-float.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-float.ov-fast {\n  animation: ov-float 1s linear infinite;\n}\n\n.ov-float:not(.ov-hover).ov-slow,\n.ov-float.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-float.ov-slow {\n  animation: ov-float 3s linear infinite;\n}\n\n@keyframes ov-float {\n  0%, 100% {\n    transform: translateY(-3px);\n  }\n  50% {\n    transform: translateY(3px);\n  }\n}\n");
w(".ov-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.ov-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.ov-flip-both {\n  transform: scale(-1, -1);\n}\n\n.ov-inverse {\n  color: #fff;\n}\n");
const BiLayoutSidebarInset = { "name": "bi-layout-sidebar-inset", "minX": -1.6, "minY": -1.6, "width": 19.2, "height": 19.2, "raw": '<path d="M14 2a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h12zM2 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H2z"/><path d="M3 4a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>' };
const BiTools = { "name": "bi-tools", "minX": -1.6, "minY": -1.6, "width": 19.2, "height": 19.2, "raw": '<path d="M1 0L0 1l2.2 3.081a1 1 0 00.815.419h.07a1 1 0 01.708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 000 13a3 3 0 105.878-.851l2.654-2.617.968.968-.305.914a1 1 0 00.242 1.023l3.356 3.356a1 1 0 001.414 0l1.586-1.586a1 1 0 000-1.414l-3.356-3.356a1 1 0 00-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0016 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 00-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 01-.293-.707v-.071a1 1 0 00-.419-.814L1 0zm9.646 10.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"/>' };
const CoCodio = { "name": "co-codio", "minX": -3.2, "minY": -3.2, "width": 38.4, "height": 38.4, "raw": '<path d="M15.995 32L2.14 23.995v-16L16 0l13.86 7.995L22 12.536l-6-3.468-6.005 3.463v6.939l6 3.463 6-3.463 7.865 4.525L16.005 32z"/>' };
const CoGit = { "name": "co-git", "minX": -3.2, "minY": -3.2, "width": 38.4, "height": 38.4, "raw": '<path d="M31.396 14.573L17.422.604a2.06 2.06 0 00-2.917 0l-2.896 2.901 3.682 3.677a2.444 2.444 0 012.516.589c.688.688.88 1.677.589 2.531l3.542 3.547a2.439 2.439 0 012.531.583c.964.958.964 2.51 0 3.469a2.447 2.447 0 01-3.464 0 2.462 2.462 0 01-.542-2.661l-3.318-3.302v8.703c.234.115.458.271.651.464.953.964.953 2.51 0 3.469a2.465 2.465 0 01-3.479 0 2.453 2.453 0 01.807-4.005v-8.786a2.587 2.587 0 01-.802-.536 2.442 2.442 0 01-.526-2.677l-3.615-3.635-9.583 9.578a2.078 2.078 0 000 2.917l13.974 13.969a2.06 2.06 0 002.917 0l13.906-13.906a2.06 2.06 0 000-2.917z"/>' };
const FaBloggerB = { "name": "fa-blogger-b", "minX": -75.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M446.6 222.7c-1.8-8-6.8-15.4-12.5-18.5-1.8-1-13-2.2-25-2.7-20.1-.9-22.3-1.3-28.7-5-10.1-5.9-12.8-12.3-12.9-29.5-.1-33-13.8-63.7-40.9-91.3-19.3-19.7-40.9-33-65.5-40.5-5.9-1.8-19.1-2.4-63.3-2.9-69.4-.8-84.8.6-108.4 10C45.9 59.5 14.7 96.1 3.3 142.9 1.2 151.7.7 165.8.2 246.8c-.6 101.5.1 116.4 6.4 136.5 15.6 49.6 59.9 86.3 104.4 94.3 14.8 2.7 197.3 3.3 216 .8 32.5-4.4 58-17.5 81.9-41.9 17.3-17.7 28.1-36.8 35.2-62.1 4.9-17.6 4.5-142.8 2.5-151.7zm-322.1-63.6c7.8-7.9 10-8.2 58.8-8.2 43.9 0 45.4.1 51.8 3.4 9.3 4.7 13.4 11.3 13.4 21.9 0 9.5-3.8 16.2-12.3 21.6-4.6 2.9-7.3 3.1-50.3 3.3-26.5.2-47.7-.4-50.8-1.2-16.6-4.7-22.8-28.5-10.6-40.8zm191.8 199.8l-14.9 2.4-77.5.9c-68.1.8-87.3-.4-90.9-2-7.1-3.1-13.8-11.7-14.9-19.4-1.1-7.3 2.6-17.3 8.2-22.4 7.1-6.4 10.2-6.6 97.3-6.7 89.6-.1 89.1-.1 97.6 7.8 12.1 11.3 9.5 31.2-4.9 39.4z"/>' };
const FaChevronDown = { "name": "fa-chevron-down", "minX": -75.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/>' };
const FaChevronLeft = { "name": "fa-chevron-left", "minX": -139.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/>' };
const FaChevronRight = { "name": "fa-chevron-right", "minX": -139.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>' };
const FaChevronUp = { "name": "fa-chevron-up", "minX": -75.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"/>' };
const FaCircle = { "name": "fa-circle", "minX": -43.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/>' };
const FaEnvelope = { "name": "fa-envelope", "minX": -43.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>' };
const FaFacebookF = { "name": "fa-facebook-f", "minX": -139.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>' };
const FaFortAwesome = { "name": "fa-fort-awesome", "minX": -43.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M489.2 287.9h-27.4c-2.6 0-4.6 2-4.6 4.6v32h-36.6V146.2c0-2.6-2-4.6-4.6-4.6h-27.4c-2.6 0-4.6 2-4.6 4.6v32h-36.6v-32c0-2.6-2-4.6-4.6-4.6h-27.4c-2.6 0-4.6 2-4.6 4.6v32h-36.6v-32c0-6-8-4.6-11.7-4.6v-38c8.3-2 17.1-3.4 25.7-3.4 10.9 0 20.9 4.3 31.4 4.3 4.6 0 27.7-1.1 27.7-8v-60c0-2.6-2-4.6-4.6-4.6-5.1 0-15.1 4.3-24 4.3-9.7 0-20.9-4.3-32.6-4.3-8 0-16 1.1-23.7 2.9v-4.9c5.4-2.6 9.1-8.3 9.1-14.3 0-20.7-31.4-20.8-31.4 0 0 6 3.7 11.7 9.1 14.3v111.7c-3.7 0-11.7-1.4-11.7 4.6v32h-36.6v-32c0-2.6-2-4.6-4.6-4.6h-27.4c-2.6 0-4.6 2-4.6 4.6v32H128v-32c0-2.6-2-4.6-4.6-4.6H96c-2.6 0-4.6 2-4.6 4.6v178.3H54.8v-32c0-2.6-2-4.6-4.6-4.6H22.8c-2.6 0-4.6 2-4.6 4.6V512h182.9v-96c0-72.6 109.7-72.6 109.7 0v96h182.9V292.5c.1-2.6-1.9-4.6-4.5-4.6zm-288.1-4.5c0 2.6-2 4.6-4.6 4.6h-27.4c-2.6 0-4.6-2-4.6-4.6v-64c0-2.6 2-4.6 4.6-4.6h27.4c2.6 0 4.6 2 4.6 4.6v64zm146.4 0c0 2.6-2 4.6-4.6 4.6h-27.4c-2.6 0-4.6-2-4.6-4.6v-64c0-2.6 2-4.6 4.6-4.6h27.4c2.6 0 4.6 2 4.6 4.6v64z"/>' };
const FaGithubAlt = { "name": "fa-github-alt", "minX": -59.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/>' };
const FaLinkedinIn = { "name": "fa-linkedin-in", "minX": -75.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>' };
const FaListUl = { "name": "fa-list-ul", "minX": -43.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M48 48a48 48 0 1048 48 48 48 0 00-48-48zm0 160a48 48 0 1048 48 48 48 0 00-48-48zm0 160a48 48 0 1048 48 48 48 0 00-48-48zm448 16H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-320H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16V80a16 16 0 00-16-16zm0 160H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16z"/>' };
const FaMagic = { "name": "fa-magic", "minX": -43.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"/>' };
const FaMoon = { "name": "fa-moon", "minX": -43.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 00283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"/>' };
const FaPencilAlt = { "name": "fa-pencil-alt", "minX": -43.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"/>' };
const FaSatelliteDish = { "name": "fa-satellite-dish", "minX": -43.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M305.45 462.59c7.391 7.298 6.188 20.097-3 25.004-77.714 41.802-176.726 29.91-242.344-35.709-65.602-65.603-77.51-164.523-35.692-242.331 4.891-9.095 17.69-10.298 25.003-3l116.812 116.813 27.394-27.394c-.688-2.61-1.594-5.001-1.594-7.814a32.004 32.004 0 1132.004 32.005c-2.797 0-5.204-.891-7.798-1.594l-27.41 27.41zm206.526-159.523a16.103 16.103 0 01-16.002 17.003H463.86a15.97 15.97 0 01-15.892-15.002C440.467 175.549 336.453 70.534 207.03 63.533a15.845 15.845 0 01-15.002-15.908V16.027A16.094 16.094 0 01209.03.024C372.255 8.62 503.475 139.841 511.976 303.067zm-96.012-.297a16.21 16.21 0 01-16.112 17.3h-32.207a16.069 16.069 0 01-15.893-14.705c-6.907-77.011-68.118-138.91-144.924-145.224a15.94 15.94 0 01-14.8-15.893v-32.114a16.134 16.134 0 0117.3-16.096c110.123 8.501 198.228 96.607 206.636 206.732z"/>' };
const FaSun = { "name": "fa-sun", "minX": -43.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"/>' };
const FaTag = { "name": "fa-tag", "minX": -43.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0133.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 010 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"/>' };
const FaTwitter = { "name": "fa-twitter", "minX": -43.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>' };
const FaRegularCalendar = { "name": "fa-regular-calendar", "minX": -75.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"/>' };
const FaRegularUser = { "name": "fa-regular-user", "minX": -75.52, "minY": -43.52, "width": 599.04, "height": 599.04, "raw": '<path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/>' };
const GiNotebook = { "name": "gi-notebook", "minX": -35.84, "minY": -35.84, "width": 583.68, "height": 583.68, "raw": '<path d="M131.3 20.35c-14.6.1-28.1 10-31.93 24.82-2.33 9.13-.55 18.4 4.13 25.84-7.67 4.26-13.69 11.53-16.03 20.66-2.32 9.13-.56 18.33 4.1 25.83a32.687 32.687 0 00-15.96 20.6c-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.33 9.1-.54 18.4 4.19 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.08 20.7-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.35 9.2-.51 18.5 4.3 26a32.915 32.915 0 00-16.28 20.8c-4.48 17.5 6.25 35.6 23.79 40.1l.1-.2 31.71 8.2-1.47 5.7 261.56 67L374 326.5l-22.4 21.2-87.8 26.5 15.5-42.5-151.7-38.8 4.4-17.4 153.5 39.3 9.7-26.7 15.3-14.4-167-42.8 4.4-17.4 178 45.6 39.6-37.4-206.1-52.8 4.4-17.4L380.7 207l-.1.4 31.5-29.8 18.3-71.4-261.6-67.04-4.8 18.66c2.2-16.32-8.1-32.27-24.5-36.44-2.7-.7-5.5-1.04-8.2-1.03zm.3 17.99c1.2 0 2.4.19 3.5.48 8.1 2.09 12.9 10.13 10.8 18.27l17.2 4.4-11 42.81c2.2-16.35-8.2-32.26-24.5-36.43l-.6-.15c-7.8-2.34-12.2-10.15-10.2-18.07 1.7-6.61 7.3-11 13.7-11.3h1.1zm-11.9 46.51c.9 0 1.9.14 2.9.36l.6.15c8.1 2.08 12.9 10.12 10.8 18.24l17.2 4.4-11 43c2.4-16.4-8-32.6-24.4-36.7-.7-.2-1.3-.4-1.9-.5-7-2.7-10.9-10.1-9-17.62 1.7-6.97 7.9-11.45 14.8-11.29zm59.9 4.59l217 55.66-4.4 17.4-217-55.6zm-72.9 41.86h1.3c.5 0 .9 0 1.4.1.6.2 1.2.3 1.8.5l.1-.2c8.1 2.1 12.9 10.1 10.8 18.3l17.2 4.4-11 43c2.3-16.3-8.1-32.4-24.4-36.6-8.18-2.1-12.94-10.1-10.85-18.3 1.69-6.6 7.25-10.9 13.65-11.2zM465.4 152l-10.2 9.6 31.6 33.5 10.2-9.6zm-23.3 22L315.7 293.5l31.5 33.5 126.5-119.5zm-347.23 3.7c1.48 0 3 .1 4.53.5 8.1 2.1 12.9 10.1 10.8 18.3l17.2 4.4-11 43c2.3-16.4-8.1-32.4-24.44-36.6-8.14-2.1-12.9-10.1-10.82-18.3 1.7-6.6 7.32-11 13.73-11.3zm-11.91 46.5c1.48 0 3 .1 4.53.5 8.14 2.1 12.91 10.1 10.81 18.3l17.2 4.4-11 42.9c2.3-16.3-8.1-32.3-24.45-36.5-8.14-2.1-12.89-10.1-10.81-18.3 1.69-6.6 7.31-11 13.72-11.3zm-11.9 46.5c1.48 0 3 .1 4.53.5 8.13 2.1 12.89 10.1 10.81 18.3l17.2 4.3-10.94 42.8c2.16-16.3-8.25-32.1-24.51-36.3-8.14-2.1-12.9-10.1-10.82-18.3 1.7-6.6 7.32-11 13.73-11.3zm235.34 39.2L293 346.6l37.4-11.3zm-247.25 7.3c1.48 0 3 .1 4.53.5 8.14 2.1 12.9 10.1 10.81 18.3l17.21 4.3-11 43c2.1-16.2-8.3-32-24.53-36.2l.1-.3c-8.16-2.1-12.92-10.1-10.84-18.3 1.69-6.6 7.31-11 13.72-11.3zm56.95 20.3L333.2 393l-4.4 17.4-217.1-55.5zM47.18 364c1.48 0 3 .1 4.52.5 8.14 2.1 12.9 10.1 10.82 18.3l17.2 4.3-3.69 14.4-31.92-8.2v.2c-8.01-2.2-12.67-10.1-10.61-18.2 1.7-6.6 7.32-11 13.73-11.3z"/>' };
const HiTranslate = { "name": "hi-translate", "minX": 0, "minY": 0, "width": 24, "height": 24, "raw": '<path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>', "attr": { "fill": "none", "stroke": "currentColor", "stroke-width": "2", "aria-hidden": "true" } };
const MdAutoawesome = { "name": "md-autoawesome", "minX": 0.48, "minY": 0.48, "width": 23.04, "height": 23.04, "raw": '<path fill="none" d="M0 0h24v24H0z"/><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>' };
const OiGitCompare = { "name": "oi-git-compare", "minX": -1.6, "minY": -1.6, "width": 19.2, "height": 19.2, "raw": '<path fill-rule="evenodd" d="M9.573.677L7.177 3.073a.25.25 0 000 .354l2.396 2.396A.25.25 0 0010 5.646V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5h-1V.854a.25.25 0 00-.427-.177zM6 12v-1.646a.25.25 0 01.427-.177l2.396 2.396a.25.25 0 010 .354l-2.396 2.396A.25.25 0 016 15.146V13.5H5A2.5 2.5 0 012.5 11V5.372a2.25 2.25 0 111.5 0V11a1 1 0 001 1h1zm6.75 0a.75.75 0 100 1.5.75.75 0 000-1.5zM4 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>' };
const OiRocket = { "name": "oi-rocket", "minX": -1.6, "minY": -1.6, "width": 19.2, "height": 19.2, "raw": '<path fill-rule="evenodd" d="M14.064 0a8.75 8.75 0 00-6.187 2.563l-.459.458c-.314.314-.616.641-.904.979H3.31a1.75 1.75 0 00-1.49.833L.11 7.607a.75.75 0 00.418 1.11l3.102.954c.037.051.079.1.124.145l2.429 2.428c.046.046.094.088.145.125l.954 3.102a.75.75 0 001.11.418l2.774-1.707a1.75 1.75 0 00.833-1.49V9.485c.338-.288.665-.59.979-.904l.458-.459A8.75 8.75 0 0016 1.936V1.75A1.75 1.75 0 0014.25 0h-.186zM10.5 10.625c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 00.119-.213v-2.066zM3.678 8.116L5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 00-.213.119l-1.2 1.95 1.782.547zm5.26-4.493A7.25 7.25 0 0114.063 1.5h.186a.25.25 0 01.25.25v.186a7.25 7.25 0 01-2.123 5.127l-.459.458a15.21 15.21 0 01-2.499 2.02l-2.317 1.5-2.143-2.143 1.5-2.317a15.25 15.25 0 012.02-2.5l.458-.458h.002zM12 5a1 1 0 11-2 0 1 1 0 012 0zm-8.44 9.56a1.5 1.5 0 10-2.12-2.12c-.734.73-1.047 2.332-1.15 3.003a.23.23 0 00.265.265c.671-.103 2.273-.416 3.005-1.148z"/>' };
const RiBilibiliLine = { "name": "ri-bilibili-line", "minX": 0, "minY": 0, "width": 24, "height": 24, "raw": '<path fill="none" d="M0 0h24v24H0z"/><path d="M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 011.415 1.415L16.414 6H18.5A3.5 3.5 0 0122 9.5v8a3.5 3.5 0 01-3.5 3.5h-13A3.5 3.5 0 012 17.5v-8A3.5 3.5 0 015.5 6h2.085L5.757 4.171a1 1 0 011.415-1.415zM18.5 8h-13a1.5 1.5 0 00-1.493 1.356L4 9.5v8a1.5 1.5 0 001.356 1.493L5.5 19h13a1.5 1.5 0 001.493-1.356L20 17.5v-8A1.5 1.5 0 0018.5 8zM8 11a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm8 0a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z"/>' };
const RiBook2Fill = { "name": "ri-book-2-fill", "minX": 0, "minY": 0, "width": 24, "height": 24, "raw": '<path fill="none" d="M0 0h24v24H0z"/><path d="M21 18H6a1 1 0 000 2h15v2H6a3 3 0 01-3-3V4a2 2 0 012-2h16v16zm-5-9V7H8v2h8z"/>' };
const RiGithubLine = { "name": "ri-github-line", "minX": 0, "minY": 0, "width": 24, "height": 24, "raw": '<path fill="none" d="M0 0h24v24H0z"/><path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 01-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 01.676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 01.63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0112 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 01.616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 01-.012 2.716 1 1 0 01-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 01-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 01-.833.135A9.626 9.626 0 0012 5.315c-.89 0-1.772.119-2.592.35a1 1 0 01-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 01-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 01-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"/>' };
const RiHomeHeartFill = { "name": "ri-home-heart-fill", "minX": 0, "minY": 0, "width": 24, "height": 24, "raw": '<path fill="none" d="M0 0h24v24H0z"/><path d="M20 20a1 1 0 01-1 1H5a1 1 0 01-1-1v-9H1l10.327-9.388a1 1 0 011.346 0L23 11h-3v9zm-8-3l3.359-3.359a2.25 2.25 0 10-3.182-3.182l-.177.177-.177-.177a2.25 2.25 0 10-3.182 3.182L12 17z"/>' };
const RiRssFill = { "name": "ri-rss-fill", "minX": 0, "minY": 0, "width": 24, "height": 24, "raw": '<path fill="none" d="M0 0h24v24H0z"/><path d="M3 3c9.941 0 18 8.059 18 18h-3c0-8.284-6.716-15-15-15V3zm0 7c6.075 0 11 4.925 11 11h-3a8 8 0 00-8-8v-3zm0 7a4 4 0 014 4H3v-4z"/>' };
const RiSailboatLine = { "name": "ri-sailboat-line", "minX": 0, "minY": 0, "width": 24, "height": 24, "raw": '<path fill="none" d="M0 0h24v24H0z"/><path d="M3 18h18a.5.5 0 01.4.8l-2.1 2.8a1 1 0 01-.8.4h-13a1 1 0 01-.8-.4l-2.1-2.8A.5.5 0 013 18zm4.161-4H13V6.702L7.161 14zM15 2.425V15a1 1 0 01-1 1H4.04a.5.5 0 01-.39-.812L14.11 2.113a.5.5 0 01.89.312z"/>' };
const RiSearch2Line = { "name": "ri-search-2-line", "minX": 0, "minY": 0, "width": 24, "height": 24, "raw": '<path fill="none" d="M0 0h24v24H0z"/><path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"/>' };
const RiTimerLine = { "name": "ri-timer-line", "minX": 0, "minY": 0, "width": 24, "height": 24, "raw": '<path fill="none" d="M0 0h24v24H0z"/><path d="M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 11-1.414-1.414zM12 20a7 7 0 100-14 7 7 0 000 14zM11 8h2v6h-2V8zM8 1h8v2H8V1z"/>' };
const RiVuejsLine = { "name": "ri-vuejs-line", "minX": 0, "minY": 0, "width": 24, "height": 24, "raw": '<path fill="none" d="M0 0h24v24H0z"/><path d="M3.316 3L12 18l8.684-15H23L12 22 1 3h2.316zm4.342 0L12 10.5 16.342 3h2.316L12 14.5 5.342 3h2.316z"/>' };
const RiWeiboFill = { "name": "ri-weibo-fill", "minX": 0, "minY": 0, "width": 24, "height": 24, "raw": '<path fill="none" d="M0 0h24v24H0z"/><path d="M17.525 11.378c1.263.392 2.669 1.336 2.669 3.004 0 2.763-3.98 6.239-9.964 6.239-4.565 0-9.23-2.213-9.23-5.852 0-1.902 1.204-4.102 3.277-6.177 2.773-2.77 6.004-4.033 7.219-2.816.537.537.588 1.464.244 2.572-.178.557.525.25.525.25 2.24-.938 4.196-.994 4.909.027.38.543.343 1.306-.008 2.19-.163.407.048.471.36.563zm-7.282 7.939c3.641-.362 6.401-2.592 6.167-4.983-.237-2.391-3.382-4.038-7.023-3.677-3.64.36-6.403 2.59-6.167 4.98.237 2.394 3.382 4.039 7.023 3.68zM6.16 14.438c.754-1.527 2.712-2.39 4.446-1.94 1.793.463 2.707 2.154 1.976 3.8-.744 1.682-2.882 2.578-4.695 1.993-1.752-.566-2.493-2.294-1.727-3.853zm1.446 2.587c.568.257 1.325.013 1.676-.55.346-.568.163-1.217-.407-1.459-.563-.237-1.291.008-1.64.553-.354.547-.189 1.202.371 1.456zm2.206-1.808c.219.092.501-.012.628-.231.123-.22.044-.466-.178-.548-.216-.084-.486.018-.613.232-.123.214-.054.458.163.547zM19.873 9.5a.725.725 0 11-1.378-.451 1.38 1.38 0 00-.288-1.357 1.395 1.395 0 00-1.321-.425.723.723 0 11-.303-1.416 2.836 2.836 0 013.29 3.649zm-3.916-6.575A5.831 5.831 0 0121.5 4.72a5.836 5.836 0 011.22 5.704.838.838 0 01-1.06.54.844.844 0 01-.542-1.062 4.143 4.143 0 00-4.807-5.327.845.845 0 01-.354-1.65z"/>' };
const RiZhihuLine = { "name": "ri-zhihu-line", "minX": 0, "minY": 0, "width": 24, "height": 24, "raw": '<path fill="none" d="M0 0h24v24H0z"/><path d="M12.344 17.963l-1.688 1.074-2.131-3.35c-.44 1.402-1.172 2.665-2.139 3.825-.402.483-.82.918-1.301 1.375-.155.147-.775.717-.878.82l-1.414-1.414c.139-.139.787-.735.915-.856.43-.408.795-.79 1.142-1.206 1.266-1.518 2.03-3.21 2.137-5.231H3v-2h4V7h-.868c-.689 1.266-1.558 2.222-2.618 2.857L2.486 8.143c1.395-.838 2.425-2.604 3.038-5.36l1.952.434c-.14.633-.303 1.227-.489 1.783H11.5v2H9v4h2.5v2H9.185l3.159 4.963zm3.838-.07L17.298 17H19V7h-4v10h.736l.446.893zM13 5h8v14h-3l-2.5 2-1-2H13V5z"/>' };
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$U = vue.defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/global/Badge.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__file", "Badge.vue"]]);
const CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
    vue.onBeforeUpdate(() => {
      tabRefs.value = [];
    });
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$T = vue.defineComponent({
  ...__default__$1,
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
var CodeGroupItem = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__file", "CodeGroupItem.vue"]]);
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$S = vue.defineComponent({
  ...__default__,
  __name: "AutoLink",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => shared.isLinkHttp(item.value.link));
    const hasNonHttpProtocoll = vue.computed(
      () => shared.isLinkMailto(item.value.link) || shared.isLinkTel(item.value.link)
    );
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocoll.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(
      () => !hasHttpProtocol.value && !hasNonHttpProtocoll.value && !isBlankTarget.value
    );
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocoll.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_VIcon = vue.resolveComponent("VIcon");
      if (isRouterLink.value) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: { "router-link-active": isActive.value },
          to: vue.unref(item).link,
          "aria-label": linkAriaLabel.value
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              if (vue.unref(item).icon) {
                _push2(`<span class="nav-icon"${_scopeId}>`);
                _push2(serverRenderer.ssrRenderComponent(_component_VIcon, {
                  name: vue.unref(item).icon
                }, null, _parent2, _scopeId));
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span>`);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.unref(item).icon ? (vue.openBlock(), vue.createBlock("span", {
                  key: 0,
                  class: "nav-icon"
                }, [
                  vue.createVNode(_component_VIcon, {
                    name: vue.unref(item).icon
                  }, null, 8, ["name"])
                ])) : vue.createCommentVNode("", true),
                vue.createVNode("span", null, vue.toDisplayString(vue.unref(item).text), 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "external-link",
          href: vue.unref(item).link,
          rel: linkRel.value,
          target: linkTarget.value,
          "aria-label": linkAriaLabel.value
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        if (vue.unref(item).icon) {
          _push(`<span class="nav-icon">`);
          _push(serverRenderer.ssrRenderComponent(_component_VIcon, {
            name: vue.unref(item).icon
          }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
});
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/AutoLink.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
var AutoLink = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__file", "AutoLink.vue"]]);
const _sfc_main$R = vue.defineComponent({
  __name: "LinkCard",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    link: {
      type: String,
      required: false,
      default: "/"
    },
    icon: {
      type: String,
      required: false,
      default: ""
    },
    image: {
      type: String,
      required: false,
      default: ""
    },
    siteDomain: {
      type: String,
      required: false,
      default: "true",
      validator: function(value) {
        return value === "true" || value === "false";
      }
    }
  },
  setup(__props) {
    const props = __props;
    const { link, siteDomain } = vue.toRefs(props);
    const linkItem = vue.computed(() => ({
      link: link.value,
      icon: false
    }));
    const linkText = vue.computed(
      () => siteDomain.value === "true" && shared.isLinkHttp(link.value) ? link.value.split("/")[2] : ""
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VIcon = vue.resolveComponent("VIcon");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "custom-container link" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(AutoLink, { item: linkItem.value }, null, _parent));
      if (__props.icon) {
        _push(serverRenderer.ssrRenderComponent(_component_VIcon, {
          name: __props.icon,
          class: "custom-container-identifier"
        }, null, _parent));
      } else if (__props.image) {
        _push(`<img alt="link-image"${serverRenderer.ssrRenderAttr("src", __props.image)} class="custom-container-identifier">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="custom-container-title">${serverRenderer.ssrInterpolate(__props.title)}</div><div class="custom-container-description">`);
      if (linkText.value) {
        _push(`<p class="custom-container-link-text">`);
        _push(serverRenderer.ssrRenderComponent(_component_VIcon, { name: "fa-chevron-right" }, null, _parent));
        _push(` ${serverRenderer.ssrInterpolate(linkText.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/global/LinkCard.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
var LinkCard = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__file", "LinkCard.vue"]]);
const darkModeSymbol = Symbol(
  ""
);
const useDarkMode = () => {
  const mode = vue.inject(darkModeSymbol);
  if (!mode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return mode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const darkStorage = core.useStorage("vuepress-color-scheme", themeLocale.value.colorMode);
  const currentMode = vue.computed({
    get() {
      if (!themeLocale.value.colorModeSwitch) {
        return themeLocale.value.colorMode || "auto";
      }
      return darkStorage.value || "auto";
    },
    set(val) {
      darkStorage.value = val;
    }
  });
  const isDarkMode = vue.ref(false);
  vue.provide(darkModeSymbol, { currentMode, isDarkMode });
  updateHtmlDarkClass(currentMode, isDarkMode);
};
const updateHtmlDarkClass = (currentMode, isDarkMode) => {
  const isDarkPreferred = core.usePreferredDark();
  const update = () => {
    isDarkMode.value = currentMode.value === "auto" ? isDarkPreferred.value : currentMode.value === "dark";
    const htmlEl = window == null ? void 0 : window.document.querySelector("html");
    htmlEl == null ? void 0 : htmlEl.classList.toggle("dark", isDarkMode.value);
  };
  vue.onMounted(() => {
    vue.watch([currentMode, isDarkPreferred], update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched == null ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = shared.isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = shared.isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect({
    hash: route.hash,
    query: route.query,
    params: route.params,
    ...resolvedRedirectObj
  });
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(encodeURI(item));
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) != null ? _a : themeLocale.sidebar) != null ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) != null ? _c : themeLocale.sidebarDepth) != null ? _d : 2;
  if (frontmatter.layout || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (shared.isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (shared.isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (shared.isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return {
        ...childItem,
        children: childItem.children.map((item2) => handleChildItem(item2))
      };
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) == null ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return {
        ...childItem,
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      };
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = shared.resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) != null ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
const categoryMap = { "tag": { "/": { "path": "/tags/", "map": { "test": { "path": "/tags/test/", "keys": ["v-2be07832", "v-53cb43ae"] }, "tag with space": { "path": "/tags/tag-with-space/", "keys": ["v-2be07832", "v-53cb43ae"] } } } } };
if (void 0) {
  (void 0).accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  }
}
var message = "";
"production" === process.env.NODE_ENV || Object.freeze({}), "production" === process.env.NODE_ENV || Object.freeze([]);
const x = (t, ...e) => {
  const n = t.resolve(...e), r = n.matched[n.matched.length - 1];
  if (!(r == null ? void 0 : r.redirect))
    return n;
  const { redirect: i } = r, s = "function" == typeof i ? i(n) : i;
  const o = ((t2) => "string" == typeof t2)(s) ? { path: s } : s;
  return x(t, { hash: n.hash, query: n.query, params: n.params, ...o });
};
var L, H = function() {
  var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", o = "hour", a = "day", u2 = "week", c2 = "month", f2 = "quarter", d = "year", h2 = "date", l2 = "Invalid Date", m2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, p2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, v = function(t2, e2, n2) {
    var r2 = String(t2);
    return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
  }, y = { s: v, z: function(t2) {
    var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
    return (e2 <= 0 ? "+" : "-") + v(r2, 2, "0") + ":" + v(i2, 2, "0");
  }, m: function t2(e2, n2) {
    if (e2.date() < n2.date())
      return -t2(n2, e2);
    var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c2), s2 = n2 - i2 < 0, o2 = e2.clone().add(r2 + (s2 ? -1 : 1), c2);
    return +(-(r2 + (n2 - i2) / (s2 ? i2 - o2 : o2 - i2)) || 0);
  }, a: function(t2) {
    return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
  }, p: function(t2) {
    return { M: c2, y: d, w: u2, d: a, D: h2, h: o, m: s, s: i, ms: r, Q: f2 }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
  }, u: function(t2) {
    return void 0 === t2;
  } }, g2 = "en", M = {};
  M[g2] = $;
  var D = function(t2) {
    return t2 instanceof S;
  }, _ = function t2(e2, n2, r2) {
    var i2;
    if (!e2)
      return g2;
    if ("string" == typeof e2) {
      var s2 = e2.toLowerCase();
      M[s2] && (i2 = s2), n2 && (M[s2] = n2, i2 = s2);
      var o2 = e2.split("-");
      if (!i2 && o2.length > 1)
        return t2(o2[0]);
    } else {
      var a2 = e2.name;
      M[a2] = e2, i2 = a2;
    }
    return !r2 && i2 && (g2 = i2), i2 || !r2 && g2;
  }, Y = function(t2, e2) {
    if (D(t2))
      return t2.clone();
    var n2 = "object" == typeof e2 ? e2 : {};
    return n2.date = t2, n2.args = arguments, new S(n2);
  }, w2 = y;
  w2.l = _, w2.i = D, w2.w = function(t2, e2) {
    return Y(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
  };
  var S = function() {
    function $2(t2) {
      this.$L = _(t2.locale, null, true), this.parse(t2);
    }
    var v2 = $2.prototype;
    return v2.parse = function(t2) {
      this.$d = function(t3) {
        var e2 = t3.date, n2 = t3.utc;
        if (null === e2)
          return new Date(NaN);
        if (w2.u(e2))
          return new Date();
        if (e2 instanceof Date)
          return new Date(e2);
        if ("string" == typeof e2 && !/Z$/i.test(e2)) {
          var r2 = e2.match(m2);
          if (r2) {
            var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
            return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
          }
        }
        return new Date(e2);
      }(t2), this.$x = t2.x || {}, this.init();
    }, v2.init = function() {
      var t2 = this.$d;
      this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
    }, v2.$utils = function() {
      return w2;
    }, v2.isValid = function() {
      return !(this.$d.toString() === l2);
    }, v2.isSame = function(t2, e2) {
      var n2 = Y(t2);
      return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
    }, v2.isAfter = function(t2, e2) {
      return Y(t2) < this.startOf(e2);
    }, v2.isBefore = function(t2, e2) {
      return this.endOf(e2) < Y(t2);
    }, v2.$g = function(t2, e2, n2) {
      return w2.u(t2) ? this[e2] : this.set(n2, t2);
    }, v2.unix = function() {
      return Math.floor(this.valueOf() / 1e3);
    }, v2.valueOf = function() {
      return this.$d.getTime();
    }, v2.startOf = function(t2, e2) {
      var n2 = this, r2 = !!w2.u(e2) || e2, f3 = w2.p(t2), l3 = function(t3, e3) {
        var i2 = w2.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
        return r2 ? i2 : i2.endOf(a);
      }, m3 = function(t3, e3) {
        return w2.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
      }, p3 = this.$W, $3 = this.$M, v3 = this.$D, y2 = "set" + (this.$u ? "UTC" : "");
      switch (f3) {
        case d:
          return r2 ? l3(1, 0) : l3(31, 11);
        case c2:
          return r2 ? l3(1, $3) : l3(0, $3 + 1);
        case u2:
          var g3 = this.$locale().weekStart || 0, M2 = (p3 < g3 ? p3 + 7 : p3) - g3;
          return l3(r2 ? v3 - M2 : v3 + (6 - M2), $3);
        case a:
        case h2:
          return m3(y2 + "Hours", 0);
        case o:
          return m3(y2 + "Minutes", 1);
        case s:
          return m3(y2 + "Seconds", 2);
        case i:
          return m3(y2 + "Milliseconds", 3);
        default:
          return this.clone();
      }
    }, v2.endOf = function(t2) {
      return this.startOf(t2, false);
    }, v2.$set = function(t2, e2) {
      var n2, u3 = w2.p(t2), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n2 = {}, n2[a] = f3 + "Date", n2[h2] = f3 + "Date", n2[c2] = f3 + "Month", n2[d] = f3 + "FullYear", n2[o] = f3 + "Hours", n2[s] = f3 + "Minutes", n2[i] = f3 + "Seconds", n2[r] = f3 + "Milliseconds", n2)[u3], m3 = u3 === a ? this.$D + (e2 - this.$W) : e2;
      if (u3 === c2 || u3 === d) {
        var p3 = this.clone().set(h2, 1);
        p3.$d[l3](m3), p3.init(), this.$d = p3.set(h2, Math.min(this.$D, p3.daysInMonth())).$d;
      } else
        l3 && this.$d[l3](m3);
      return this.init(), this;
    }, v2.set = function(t2, e2) {
      return this.clone().$set(t2, e2);
    }, v2.get = function(t2) {
      return this[w2.p(t2)]();
    }, v2.add = function(r2, f3) {
      var h3, l3 = this;
      r2 = Number(r2);
      var m3 = w2.p(f3), p3 = function(t2) {
        var e2 = Y(l3);
        return w2.w(e2.date(e2.date() + Math.round(t2 * r2)), l3);
      };
      if (m3 === c2)
        return this.set(c2, this.$M + r2);
      if (m3 === d)
        return this.set(d, this.$y + r2);
      if (m3 === a)
        return p3(1);
      if (m3 === u2)
        return p3(7);
      var $3 = (h3 = {}, h3[s] = e, h3[o] = n, h3[i] = t, h3)[m3] || 1, v3 = this.$d.getTime() + r2 * $3;
      return w2.w(v3, this);
    }, v2.subtract = function(t2, e2) {
      return this.add(-1 * t2, e2);
    }, v2.format = function(t2) {
      var e2 = this, n2 = this.$locale();
      if (!this.isValid())
        return n2.invalidDate || l2;
      var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = w2.z(this), s2 = this.$H, o2 = this.$m, a2 = this.$M, u3 = n2.weekdays, c3 = n2.months, f3 = function(t3, n3, i3, s3) {
        return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
      }, d2 = function(t3) {
        return w2.s(s2 % 12 || 12, t3, "0");
      }, h3 = n2.meridiem || function(t3, e3, n3) {
        var r3 = t3 < 12 ? "AM" : "PM";
        return n3 ? r3.toLowerCase() : r3;
      }, m3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: w2.s(a2 + 1, 2, "0"), MMM: f3(n2.monthsShort, a2, c3, 3), MMMM: f3(c3, a2), D: this.$D, DD: w2.s(this.$D, 2, "0"), d: String(this.$W), dd: f3(n2.weekdaysMin, this.$W, u3, 2), ddd: f3(n2.weekdaysShort, this.$W, u3, 3), dddd: u3[this.$W], H: String(s2), HH: w2.s(s2, 2, "0"), h: d2(1), hh: d2(2), a: h3(s2, o2, true), A: h3(s2, o2, false), m: String(o2), mm: w2.s(o2, 2, "0"), s: String(this.$s), ss: w2.s(this.$s, 2, "0"), SSS: w2.s(this.$ms, 3, "0"), Z: i2 };
      return r2.replace(p2, function(t3, e3) {
        return e3 || m3[t3] || i2.replace(":", "");
      });
    }, v2.utcOffset = function() {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, v2.diff = function(r2, h3, l3) {
      var m3, p3 = w2.p(h3), $3 = Y(r2), v3 = ($3.utcOffset() - this.utcOffset()) * e, y2 = this - $3, g3 = w2.m(this, $3);
      return g3 = (m3 = {}, m3[d] = g3 / 12, m3[c2] = g3, m3[f2] = g3 / 3, m3[u2] = (y2 - v3) / 6048e5, m3[a] = (y2 - v3) / 864e5, m3[o] = y2 / n, m3[s] = y2 / e, m3[i] = y2 / t, m3)[p3] || y2, l3 ? g3 : w2.a(g3);
    }, v2.daysInMonth = function() {
      return this.endOf(c2).$D;
    }, v2.$locale = function() {
      return M[this.$L];
    }, v2.locale = function(t2, e2) {
      if (!t2)
        return this.$L;
      var n2 = this.clone(), r2 = _(t2, e2, true);
      return r2 && (n2.$L = r2), n2;
    }, v2.clone = function() {
      return w2.w(this.$d, this);
    }, v2.toDate = function() {
      return new Date(this.valueOf());
    }, v2.toJSON = function() {
      return this.isValid() ? this.toISOString() : null;
    }, v2.toISOString = function() {
      return this.$d.toISOString();
    }, v2.toString = function() {
      return this.$d.toUTCString();
    }, $2;
  }(), b = S.prototype;
  return Y.prototype = b, [["$ms", r], ["$s", i], ["$m", s], ["$H", o], ["$W", a], ["$M", c2], ["$y", d], ["$D", h2]].forEach(function(t2) {
    b[t2[1]] = function(e2) {
      return this.$g(e2, t2[0], t2[1]);
    };
  }), Y.extend = function(t2, e2) {
    return t2.$i || (t2(e2, S, Y), t2.$i = true), Y;
  }, Y.locale = _, Y.isDayjs = D, Y.unix = function(t2) {
    return Y(1e3 * t2);
  }, Y.en = M[g2], Y.Ls = M, Y.p = {}, Y;
}(), z = (L = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, function(t, e, n) {
  var r = e.prototype, i = r.format;
  n.en.formats = L, r.format = function(t2) {
    void 0 === t2 && (t2 = "YYYY-MM-DDTHH:mm:ssZ");
    var e2 = this.$locale().formats, n2 = function(t3, e3) {
      return t3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t4, n3, r2) {
        var i2 = r2 && r2.toUpperCase();
        return n3 || e3[r2] || L[r2] || e3[i2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t5, e4, n4) {
          return e4 || n4.slice(1);
        });
      });
    }(t2, void 0 === e2 ? {} : e2);
    return i.call(this, n2);
  };
}), N = function(t, e, n) {
  var r = e.prototype, i = function(t2) {
    var e2, i2 = t2.date, s2 = t2.utc, o2 = {};
    if (!((e2 = i2) instanceof Date) && !(e2 instanceof Array) && e2 instanceof Object) {
      if (!Object.keys(i2).length)
        return new Date();
      var a2 = s2 ? n.utc() : n();
      Object.keys(i2).forEach(function(t3) {
        var e3, n2;
        o2[e3 = t3, n2 = r.$utils().p(e3), "date" === n2 ? "day" : n2] = i2[t3];
      });
      var u3 = o2.day || (o2.year || o2.month >= 0 ? 1 : a2.date()), c2 = o2.year || a2.year(), f2 = o2.month >= 0 ? o2.month : o2.year || o2.day ? 0 : a2.month(), d = o2.hour || 0, h2 = o2.minute || 0, l2 = o2.second || 0, m2 = o2.millisecond || 0;
      return s2 ? new Date(Date.UTC(c2, f2, u3, d, h2, l2, m2)) : new Date(c2, f2, u3, d, h2, l2, m2);
    }
    return i2;
  }, s = r.parse;
  r.parse = function(t2) {
    t2.date = i.bind(this)(t2), s.bind(this)(t2);
  };
  var o = r.set, a = r.add, u2 = function(t2, e2, n2, r2) {
    if (void 0 === r2 && (r2 = 1), e2 instanceof Object) {
      var i2 = Object.keys(e2), s2 = this;
      return i2.forEach(function(n3) {
        s2 = t2.bind(s2)(e2[n3] * r2, n3);
      }), s2;
    }
    return t2.bind(this)(e2 * r2, n2);
  };
  r.set = function(t2, e2) {
    return e2 = void 0 === e2 ? t2 : e2, u2.bind(this)(function(t3, e3) {
      return o.bind(this)(e3, t3);
    }, e2, t2);
  }, r.add = function(t2, e2) {
    return u2.bind(this)(a, t2, e2);
  }, r.subtract = function(t2, e2) {
    return u2.bind(this)(a, t2, e2, -1);
  };
}, k = function() {
  var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
  return function(n, r, i) {
    var s, o = function(t2, n2, r2) {
      void 0 === r2 && (r2 = {});
      var i2 = new Date(t2), s2 = function(t3, n3) {
        void 0 === n3 && (n3 = {});
        var r3 = n3.timeZoneName || "short", i3 = t3 + "|" + r3, s3 = e[i3];
        return s3 || (s3 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t3, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: r3 }), e[i3] = s3), s3;
      }(n2, r2);
      return s2.formatToParts(i2);
    }, a = function(e2, n2) {
      for (var r2 = o(e2, n2), s2 = [], a2 = 0; a2 < r2.length; a2 += 1) {
        var u3 = r2[a2], c3 = u3.type, f2 = u3.value, d = t[c3];
        d >= 0 && (s2[d] = parseInt(f2, 10));
      }
      var h2 = s2[3], l2 = 24 === h2 ? 0 : h2, m2 = s2[0] + "-" + s2[1] + "-" + s2[2] + " " + l2 + ":" + s2[4] + ":" + s2[5] + ":000", p2 = +e2;
      return (i.utc(m2).valueOf() - (p2 -= p2 % 1e3)) / 6e4;
    }, u2 = r.prototype;
    u2.tz = function(t2, e2) {
      void 0 === t2 && (t2 = s);
      var n2 = this.utcOffset(), r2 = this.toDate(), o2 = r2.toLocaleString("en-US", { timeZone: t2 }), a2 = Math.round((r2 - new Date(o2)) / 1e3 / 60), u3 = i(o2).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(r2.getTimezoneOffset() / 15) - a2, true);
      if (e2) {
        var c3 = u3.utcOffset();
        u3 = u3.add(n2 - c3, "minute");
      }
      return u3.$x.$timezone = t2, u3;
    }, u2.offsetName = function(t2) {
      var e2 = this.$x.$timezone || i.tz.guess(), n2 = o(this.valueOf(), e2, { timeZoneName: t2 }).find(function(t3) {
        return "timezonename" === t3.type.toLowerCase();
      });
      return n2 && n2.value;
    };
    var c2 = u2.startOf;
    u2.startOf = function(t2, e2) {
      if (!this.$x || !this.$x.$timezone)
        return c2.call(this, t2, e2);
      var n2 = i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
      return c2.call(n2, t2, e2).tz(this.$x.$timezone, true);
    }, i.tz = function(t2, e2, n2) {
      var r2 = n2 && e2, o2 = n2 || e2 || s, u3 = a(+i(), o2);
      if ("string" != typeof t2)
        return i(t2).tz(o2);
      var c3 = function(t3, e3, n3) {
        var r3 = t3 - 60 * e3 * 1e3, i2 = a(r3, n3);
        if (e3 === i2)
          return [r3, e3];
        var s2 = a(r3 -= 60 * (i2 - e3) * 1e3, n3);
        return i2 === s2 ? [r3, i2] : [t3 - 60 * Math.min(i2, s2) * 1e3, Math.max(i2, s2)];
      }(i.utc(t2, r2).valueOf(), u3, o2), f2 = c3[0], d = c3[1], h2 = i(f2).utcOffset(d);
      return h2.$x.$timezone = o2, h2;
    }, i.tz.guess = function() {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }, i.tz.setDefault = function(t2) {
      s = t2;
    };
  };
}(), I = function() {
  var t = "minute", e = /[+-]\d\d(?::?\d\d)?/g, n = /([+-]|\d\d)/g;
  return function(r, i, s) {
    var o = i.prototype;
    s.utc = function(t2) {
      return new i({ date: t2, utc: true, args: arguments });
    }, o.utc = function(e2) {
      var n2 = s(this.toDate(), { locale: this.$L, utc: true });
      return e2 ? n2.add(this.utcOffset(), t) : n2;
    }, o.local = function() {
      return s(this.toDate(), { locale: this.$L, utc: false });
    };
    var a = o.parse;
    o.parse = function(t2) {
      t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), a.call(this, t2);
    };
    var u2 = o.init;
    o.init = function() {
      if (this.$u) {
        var t2 = this.$d;
        this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
      } else
        u2.call(this);
    };
    var c2 = o.utcOffset;
    o.utcOffset = function(r2, i2) {
      var s2 = this.$utils().u;
      if (s2(r2))
        return this.$u ? 0 : s2(this.$offset) ? c2.call(this) : this.$offset;
      if ("string" == typeof r2 && (r2 = function(t2) {
        void 0 === t2 && (t2 = "");
        var r3 = t2.match(e);
        if (!r3)
          return null;
        var i3 = ("" + r3[0]).match(n) || ["-", 0, 0], s3 = i3[0], o3 = 60 * +i3[1] + +i3[2];
        return 0 === o3 ? 0 : "+" === s3 ? o3 : -o3;
      }(r2), null === r2))
        return this;
      var o2 = Math.abs(r2) <= 16 ? 60 * r2 : r2, a2 = this;
      if (i2)
        return a2.$offset = o2, a2.$u = 0 === r2, a2;
      if (0 !== r2) {
        var u3 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        (a2 = this.local().add(o2 + u3, t)).$offset = o2, a2.$x.$localOffset = u3;
      } else
        a2 = this.utc();
      return a2;
    };
    var f2 = o.format;
    o.format = function(t2) {
      var e2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
      return f2.call(this, e2);
    }, o.valueOf = function() {
      var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
      return this.$d.valueOf() - 6e4 * t2;
    }, o.isUTC = function() {
      return !!this.$u;
    }, o.toISOString = function() {
      return this.toDate().toISOString();
    }, o.toString = function() {
      return this.toDate().toUTCString();
    };
    var d = o.toDate;
    o.toDate = function(t2) {
      return "s" === t2 && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : d.call(this);
    };
    var h2 = o.diff;
    o.diff = function(t2, e2, n2) {
      if (t2 && this.$u === t2.$u)
        return h2.call(this, t2, e2, n2);
      var r2 = this.local(), i2 = s(t2).local();
      return h2.call(r2, i2, e2, n2);
    };
  };
}();
H.extend(z), H.extend(N), H.extend(I), H.extend(k);
const W = { name: "zh-cn", weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"), weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"), weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"), months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), ordinal: (t, e) => "W" === e ? `${t}\u5468` : `${t}\u65E5`, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206", LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" }, relativeTime: { future: "%s\u5185", past: "%s\u524D", s: "\u51E0\u79D2", m: "1 \u5206\u949F", mm: "%d \u5206\u949F", h: "1 \u5C0F\u65F6", hh: "%d \u5C0F\u65F6", d: "1 \u5929", dd: "%d \u5929", M: "1 \u4E2A\u6708", MM: "%d \u4E2A\u6708", y: "1 \u5E74", yy: "%d \u5E74" }, meridiem: (t, e) => {
  const n = 100 * t + e;
  return n < 600 ? "\u51CC\u6668" : n < 900 ? "\u65E9\u4E0A" : n < 1100 ? "\u4E0A\u5348" : n < 1300 ? "\u4E2D\u5348" : n < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
} }, Z = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") };
H.locale("zh", W), H.locale("en", Z), H.extend(N), H.extend(I), H.extend(k);
const typeMap = { "post": { "/": { "path": "/", "keys": ["v-2be07832", "v-53cb43ae"] } } };
if (void 0) {
  (void 0).accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  }
}
const m = vue.ref(categoryMap), u = (t = "") => {
  const a = vueRouter.useRouter(), s = vueRouter.useRoute(), u2 = useRouteLocale();
  return vue.computed(() => {
    var _a;
    const e = t || ((_a = usePageFrontmatter().value.blog) == null ? void 0 : _a.key) || "", n = a.getRoutes();
    if (!m.value[e])
      throw new Error("useBlogCategory: " + (t ? `key ${t} is invalid` : "can not bind to an exisiting key on non blog pages"));
    const p2 = m.value[e][u2.value], r = { path: p2.path, map: {} };
    for (const t2 in p2.map) {
      const e2 = p2.map[t2];
      r.map[t2] = { path: e2.path, items: [] };
      for (const o of e2.keys) {
        const e3 = n.find(({ name: t3 }) => t3 === o);
        if (e3) {
          const o2 = x(a, e3.path);
          r.map[t2].items.push({ path: o2.path, info: o2.meta });
        }
      }
      s.path === e2.path && (r.currentItems = r.map[t2].items);
    }
    return r;
  });
};
const l = vue.ref(typeMap), c = (t = "") => {
  const a = vueRouter.useRouter(), r = useRouteLocale();
  return vue.computed(() => {
    var _a;
    const e = t || ((_a = usePageFrontmatter().value.blog) == null ? void 0 : _a.key) || "";
    if (!l.value[e])
      throw new Error("useBlogType: " + (t ? `key ${t} is invalid` : "can not bind to an exisiting key on non blog pages"));
    const n = a.getRoutes(), p2 = l.value[e][r.value], s = { path: p2.path, items: [] };
    for (const t2 of p2.keys) {
      const e2 = n.find(({ name: e3 }) => e3 === t2);
      if (e2) {
        const t3 = x(a, e2.path);
        s.items.push({ path: t3.path, info: t3.meta });
      }
    }
    return s;
  });
};
const blogsSymbol = Symbol.for("blogs");
const useBlogPages = () => {
  const blogs = vue.inject(blogsSymbol);
  if (!blogs) {
    throw new Error("useBlogPages() is called without provider.");
  }
  return blogs;
};
const setupBlogPages = () => {
  const blogs = c("post");
  vue.provide(blogsSymbol, blogs);
};
const useBlog = (pageIndex) => {
  const themeLocale = useThemeLocaleData();
  const router = vueRouter.useRouter();
  const postPages = useBlogPages();
  const posts = vue.computed(() => {
    const pages = postPages.value.items;
    return pages.map((page, index2) => {
      const post2 = page;
      post2.info.next = index2 > 0 ? {
        title: pages[index2 - 1].info.title,
        link: pages[index2 - 1].path
      } : null;
      post2.info.prev = index2 < pages.length - 1 ? {
        title: pages[index2 + 1].info.title,
        link: pages[index2 + 1].path
      } : null;
      return post2;
    });
  });
  const blogNumPerPage = vue.computed(() => themeLocale.value.blogNumPerPage);
  const maxPageIndex = vue.computed(() => Math.max(1, Math.ceil(posts.value.length / blogNumPerPage.value)));
  const pageValidIndex = vue.computed(() => {
    if (!pageIndex)
      return -1;
    return Math.max(1, Math.min(pageIndex.value, maxPageIndex.value));
  });
  const postIndex = vue.computed(() => posts.value.findIndex((item) => item.path === router.currentRoute.value.path));
  const post = vue.computed(() => postIndex.value === -1 ? null : posts.value[postIndex.value]);
  const slicedPosts = vue.computed(() => {
    if (posts.value.length === 0 || pageValidIndex.value === -1)
      return posts.value;
    const start = (pageValidIndex.value - 1) * blogNumPerPage.value;
    return posts.value.slice(start, Math.min(start + blogNumPerPage.value, posts.value.length));
  });
  const postListPager = vue.computed(() => {
    if (!pageIndex)
      return {};
    const next = pageValidIndex.value > 1 ? Math.min(pageIndex.value, maxPageIndex.value) - 1 === 1 ? "/" : `/page/${pageIndex.value - 1}` : null;
    const prev = pageValidIndex.value < maxPageIndex.value ? `/page/${pageIndex.value + 1}` : null;
    return {
      next,
      prev
    };
  });
  return {
    posts,
    postIndex,
    post,
    slicedPosts,
    postListPager
  };
};
const resolveRepoType = (repo) => {
  if (!shared.isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, shared.isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, shared.removeLeadingSlash(`${shared.removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const formateDateString = (date) => {
  const dateJson = new Date(date).toJSON();
  const dateStr = new Date(+new Date(dateJson) + 8 * 3600 * 1e3).toISOString().replace(/T/g, " ").replace(/\.[\d]{3}Z/, "");
  return dateStr.split(" ")[0];
};
const resolveDate = (date, type) => {
  const dateStr = formateDateString(date).replace(/-/g, "/");
  const dateObj = new Date(dateStr);
  const info = {
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1,
    day: dateObj.getDate()
  };
  return info[type].toString();
};
const toRGB = (code) => {
  if (code.length === 4) {
    const codeReg = /\w+/.exec(code);
    for (const i in codeReg)
      codeReg[i] = codeReg[i] + codeReg[i];
    code = codeReg.join("");
  }
  const hex = /(\w{2})(\w{2})(\w{2})/.exec(code);
  return [parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)];
};
const toHex = (ary) => {
  const hexArray = ary.map((value) => {
    let hex = value.toString(16);
    hex = hex.length === 1 ? "0" + hex : hex;
    return hex;
  });
  return "#" + hexArray.join("");
};
const colorIncrement = (start, end, range) => {
  const rgbStartColor = toRGB(start);
  return toRGB(end).map((value, i) => {
    return (value - rgbStartColor[i]) / range;
  });
};
const getPostsByYear = (posts) => {
  const formatPages = {};
  const formatPagesArr = [];
  for (const post of posts) {
    if (!post.info.date)
      continue;
    const pageDateYear = resolveDate(post.info.date, "year");
    if (formatPages[pageDateYear])
      formatPages[pageDateYear].push(post);
    else
      formatPages[pageDateYear] = [post];
  }
  for (const key in formatPages) {
    formatPagesArr.unshift({
      year: key,
      data: formatPages[key]
    });
  }
  return formatPagesArr;
};
const filterPostsByTag = (posts, tag) => tag === "" ? posts : posts.filter((item) => item.info.tags ? item.info.tags.includes(tag) : false);
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const tagMapSymbol = Symbol.for("blogTags");
const useTagMap = () => {
  const tagMap = vue.inject(tagMapSymbol);
  if (!tagMap) {
    throw new Error("useTagMap() is called without provider.");
  }
  return tagMap;
};
const setupTagMap = () => {
  const tagMap = u("tag");
  vue.provide(tagMapSymbol, tagMap);
};
const tagColor = (start, increment, weighting) => {
  const rgb = toRGB(start).map((value, i) => {
    let ref = Math.round(value + increment[i] * weighting);
    if (ref > 255)
      ref = 255;
    else if (ref < 0)
      ref = 0;
    return ref;
  });
  return toHex(rgb);
};
const useTags = (start = "#a5a5e4", end = "#4388c4") => {
  const tagMap = useTagMap();
  const tags = vue.computed(() => {
    const tags2 = [];
    for (const tag in tagMap.value.map) {
      const info = {};
      info.name = tag;
      info.pages = tagMap.value.map[tag].items;
      info.path = tagMap.value.map[tag].path;
      tags2.push(info);
    }
    tags2.sort((prev, next) => {
      return next.pages.length - prev.pages.length;
    });
    return tags2;
  });
  const tagsWithColor = vue.computed(() => {
    if (tags.value.length === 0)
      return [];
    const lowest = tags.value[tags.value.length - 1].pages.length;
    const highest = tags.value[0].pages.length;
    const range = Math.max(highest - lowest, 1);
    const colorIncr = colorIncrement(start, end, range);
    const tagList = tags.value;
    for (const item of tagList) {
      const weighting = item.pages.length - lowest;
      item.tagColor = tagColor(start, colorIncr, weighting);
    }
    return tagList;
  });
  return {
    tags,
    tagsWithColor
  };
};
const useCatalog = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  return vue.computed(() => page.value.frontmatter.layout === "Post" && page.value.frontmatter.catalog !== false && (themeLocale.value.catalog || page.value.frontmatter.catalog) && page.value.headers.length > 0);
};
const codeBlockStyles = `
pre[class*="language-"] {
  scrollbar-color: var(--code-scroll-bar-color) rgba(0,0,0,0);
  scrollbar-width: .5rem;
}

pre[class*="language-"]::-webkit-scrollbar {
  height: .4rem;
}

pre[class*="language-"]::-webkit-scrollbar-thumb {
  background-color: var(--code-scroll-bar-color);
  border-radius: 3px;
}

pre[class*="language-"]::-webkit-scrollbar-thumb:hover {
  background: var(--c-brand);
}
`;
const setupDynamicStyle = () => {
  vue.onMounted(() => {
    if (navigator.userAgent) {
      const isMobile = navigator.userAgent.includes("Mobi");
      if (!isMobile) {
        const style = document.createElement("style");
        style.textContent = codeBlockStyles;
        document.head.append(style);
      }
    }
  });
};
var index = "";
c$1(FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight, FaMagic, FaSun, FaMoon, FaGithubAlt, FaLinkedinIn, FaFacebookF, FaTwitter, RiZhihuLine, RiWeiboFill, FaEnvelope, RiRssFill, FaCircle, FaPencilAlt, FaRegularUser, FaRegularCalendar, RiTimerLine, FaListUl, BiLayoutSidebarInset, HiTranslate, RiSearch2Line);
var clientConfig5 = defineClientConfig({
  enhance({ app, router }) {
    app.component("Badge", Badge);
    app.component("CodeGroup", CodeGroup);
    app.component("CodeGroupItem", CodeGroupItem);
    app.component("VIcon", g);
    app.component("LinkCard", LinkCard);
    app.component("GungnirSearchPage", () => {
      const SearchPage = app.component("SearchPage");
      return SearchPage ? vue.h(SearchPage) : null;
    });
    app.component("GungnirGiscus", (props) => {
      const Giscus = app.component("Giscus");
      return Giscus ? vue.h(Giscus, { theme: props.theme }) : null;
    });
    app.component("NavbarSearch", () => {
      const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
      if (SearchComponent) {
        return vue.h(SearchComponent);
      }
      return null;
    });
    const scrollBehavior = router.options.scrollBehavior;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
  },
  setup() {
    setupDynamicStyle();
    setupDarkMode();
    setupSidebarItems();
    setupBlogPages();
    setupTagMap();
  }
});
c$1(
  RiBilibiliLine,
  RiHomeHeartFill,
  FaBloggerB,
  GiNotebook,
  BiTools,
  MdAutoawesome,
  FaFortAwesome,
  FaTag,
  FaSatelliteDish,
  CoCodio,
  RiBook2Fill,
  RiVuejsLine,
  CoGit,
  RiGithubLine,
  OiGitCompare,
  OiRocket,
  RiSailboatLine
);
var clientConfig6 = defineClientConfig({
  enhance({ app, router, siteData: siteData2 }) {
  },
  setup() {
  },
  rootComponents: []
});
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6
];
const pagesRoutes = [
  ["v-22a39d25", "/about.html", { "title": "\u5173\u4E8E\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877" }, ["/about", "/about.md"]],
  ["v-8daa1a0e", "/", { "title": "Home Page" }, ["/index.html", "/README.md"]],
  ["v-76fdf177", "/blogs/", { "title": "blogs" }, ["/blogs/index.html", "/blogs/README.md"]],
  ["v-fb0f0066", "/guide/getting-started.html", { "title": "" }, ["/guide/getting-started", "/guide/getting-started.md"]],
  ["v-fffb8e28", "/guide/", { "title": 2323 }, ["/guide/index.html", "/guide/README.md"]],
  ["v-f0388862", "/links/", { "title": "Tools" }, ["/links/index.html", "/links/README.md"]],
  ["v-e8b6c472", "/notes/", { "title": "notes" }, ["/notes/index.html", "/notes/README.md"]],
  ["v-2be07832", "/posts/test.html", { "title": "\u65F6\u95F4\u7B80\u53F2", "subtitle": "\u4ECE\u5927\u7206\u70B8\u5230\u9ED1\u6D1E", "date": "2020-03-31T00:00:00.000Z", "tags": ["test", "tag with space"], "headerImage": "/img/home-bg/1.jpg", "excerpt": "" }, ["/posts/test", "/posts/test.md"]],
  ["v-53cb43ae", "/posts/test2.html", { "title": "\u65F6\u95F4\u7B80\u53F22", "subtitle": "\u4ECE\u5927\u7206\u70B8\u5230\u9ED1\u6D1E", "date": "2020-03-31T00:00:00.000Z", "tags": ["test", "tag with space"], "headerImage": "/img/home-bg/1.jpg", "excerpt": "" }, ["/posts/test2", "/posts/test2.md"]],
  ["v-d440f426", "/tools/", { "title": "tools" }, ["/tools/index.html", "/tools/README.md"]],
  ["v-70e45ed8", "/zh/about.html", { "title": "\u5173\u4E8E" }, ["/zh/about", "/zh/about.md"]],
  ["v-2d0ad528", "/zh/", { "title": "\u5DE5\u5177" }, ["/zh/index.html", "/zh/README.md"]],
  ["v-3e313466", "/zh/blogs/", { "title": "\u535A\u5BA2" }, ["/zh/blogs/index.html", "/zh/blogs/README.md"]],
  ["v-37781588", "/zh/guide/getting-started.html", { "title": "" }, ["/zh/guide/getting-started", "/zh/guide/getting-started.md"]],
  ["v-47357bdb", "/zh/guide/", { "title": 4444 }, ["/zh/guide/index.html", "/zh/guide/README.md"]],
  ["v-52d7e0b6", "/zh/notes/", { "title": "notes" }, ["/zh/notes/index.html", "/zh/notes/README.md"]],
  ["v-2c44730e", "/zh/tags/", { "title": "tags" }, ["/zh/tags/index.html", "/zh/tags/README.md"]],
  ["v-5d12c8dc", "/zh/tools/", { "title": "tools" }, ["/zh/tools/index.html", "/zh/tools/README.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]],
  ["v-15534fdd", "/tags/", { "title": "\u6807\u7B7E" }, ["/tags/index.html"]],
  ["v-d5d13fc0", "/tags/test/", { "title": "test | \u6807\u7B7E" }, ["/tags/test/index.html"]],
  ["v-781133a0", "/tags/tag-with-space/", { "title": "tag with space | \u6807\u7B7E" }, ["/tags/tag-with-space/index.html"]],
  ["v-3a1f8885", "/page/1/", { "title": "Home" }, ["/page/1/index.html"]]
];
var createRoutes = () => pagesRoutes.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
var historyCreator = vueRouter.createMemoryHistory;
var createVueRouter = () => {
  const router = vueRouter.createRouter({
    history: historyCreator(shared.removeEndingSlash(siteData.value.base)),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a = pagesComponents[to.name]) == null ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvers.resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = vue.createSSRApp;
var createVueApp = async () => {
  var _a;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a2;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a2 = clientConfig.setup) == null ? void 0 : _a2.call(clientConfig);
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientConfigs.flatMap(({ rootComponents = [] }) => rootComponents.map((component) => vue.h(component)))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router);
  for (const clientConfig of clientConfigs) {
    await ((_a = clientConfig.enhance) == null ? void 0 : _a.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
const data$m = JSON.parse('{"key":"v-22a39d25","path":"/about.html","title":"\u5173\u4E8E\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877","lang":"zh-CN","frontmatter":{"title":"\u5173\u4E8E\u8FD9\u4E2A\u7F51\u7AD9\u7684\u521D\u8877"},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":1,"words":140},"filePathRelative":"about.md"}');
var about_html$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$m
}, Symbol.toStringTag, { value: "Module" }));
const data$l = JSON.parse('{"key":"v-8daa1a0e","path":"/","title":"Home Page","lang":"zh-CN","frontmatter":{"title":"Home Page","home":true,"layout":"HomePage","actionText":"\u5F00\u59CB \u2192","actionLink":"/guide/","features":[{"title":"\u7B80\u6D01\u81F3\u4E0A","details":"\u4EE5 Markdown \u4E3A\u4E2D\u5FC3\u7684\u9879\u76EE\u7ED3\u6784\uFF0C\u4EE5\u6700\u5C11\u7684\u914D\u7F6E\u5E2E\u52A9\u4F60\u4E13\u6CE8\u4E8E\u5199\u4F5C\u3002"},{"title":"Vue\u9A71\u52A8","details":"\u4EAB\u53D7 Vue + webpack \u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C\u5728 Markdown \u4E2D\u4F7F\u7528 Vue \u7EC4\u4EF6\uFF0C\u540C\u65F6\u53EF\u4EE5\u4F7F\u7528 Vue \u6765\u5F00\u53D1\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002"},{"title":"\u9AD8\u6027\u80FD"}]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":1,"words":85},"filePathRelative":"README.md"}');
var index_html$L = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$l
}, Symbol.toStringTag, { value: "Module" }));
const data$k = JSON.parse('{"key":"v-76fdf177","path":"/blogs/","title":"blogs","lang":"zh-CN","frontmatter":{"title":"blogs"},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":1,"words":3},"filePathRelative":"blogs/README.md"}');
var index_html$K = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$k
}, Symbol.toStringTag, { value: "Module" }));
const data$j = JSON.parse('{"key":"v-fb0f0066","path":"/guide/getting-started.html","title":"","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[],"git":{},"filePathRelative":"guide/getting-started.md"}');
var gettingStarted_html$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$j
}, Symbol.toStringTag, { value: "Module" }));
const data$i = JSON.parse('{"key":"v-fffb8e28","path":"/guide/","title":2323,"lang":"zh-CN","frontmatter":{"title":2323},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":1,"words":3},"filePathRelative":"guide/README.md"}');
var index_html$J = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$i
}, Symbol.toStringTag, { value: "Module" }));
const data$h = JSON.parse('{"key":"v-f0388862","path":"/links/","title":"Tools","lang":"zh-CN","frontmatter":{"layout":"Links","title":"Tools","links":[{"title":"Live Demos","items":[{"sitename":"ME?","url":"https://blog.zxh.io","img":"/img/links/me.png","desc":"My blog"}]},{"title":"Other Versions","items":[{"sitename":"VuePress 1","url":"https://vuepress-theme-gungnir.vercel.app","img":"/img/links/v1.svg","desc":"VuePress 1 theme"},{"sitename":"Jekyll","url":"https://jekyll-theme-gungnir.vercel.app","img":"/img/links/jekyll.png","desc":"Jekyll theme"}]}]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":1,"words":64},"filePathRelative":"links/README.md"}');
var index_html$I = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$h
}, Symbol.toStringTag, { value: "Module" }));
const data$g = JSON.parse('{"key":"v-e8b6c472","path":"/notes/","title":"notes","lang":"zh-CN","frontmatter":{"title":"notes"},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":1,"words":3},"filePathRelative":"notes/README.md"}');
var index_html$H = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$g
}, Symbol.toStringTag, { value: "Module" }));
const data$f = JSON.parse('{"key":"v-2be07832","path":"/posts/test.html","title":"\u65F6\u95F4\u7B80\u53F2","lang":"zh-CN","frontmatter":{"layout":"Post","title":"\u65F6\u95F4\u7B80\u53F2","subtitle":"\u4ECE\u5927\u7206\u70B8\u5230\u9ED1\u6D1E","date":"2020-03-31T00:00:00.000Z","author":"\u65AF\u8482\u82AC\xB7\u970D\u91D1","useHeaderImage":true,"headerImage":"/img/home-bg/1.jpg","headerMask":"rgba(40, 57, 101, .4)","headerImageCredit":"Jeremy Fenske","headerImageCreditLink":"https://www.artstation.com/artwork/nLY0K","catalog":false,"giscus":false,"hide":false,"tags":["test","tag with space"]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":2,"words":250},"filePathRelative":"posts/test.md"}');
var test_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$f
}, Symbol.toStringTag, { value: "Module" }));
const data$e = JSON.parse('{"key":"v-53cb43ae","path":"/posts/test2.html","title":"\u65F6\u95F4\u7B80\u53F22","lang":"zh-CN","frontmatter":{"layout":"Post","title":"\u65F6\u95F4\u7B80\u53F22","subtitle":"\u4ECE\u5927\u7206\u70B8\u5230\u9ED1\u6D1E","date":"2020-03-31T00:00:00.000Z","author":"\u65AF\u8482\u82AC\xB7\u970D\u91D1","useHeaderImage":true,"headerImage":"/img/home-bg/1.jpg","headerMask":"rgba(40, 57, 101, .4)","headerImageCredit":"Jeremy Fenske","headerImageCreditLink":"https://www.artstation.com/artwork/nLY0K","catalog":false,"giscus":false,"hide":false,"tags":["test","tag with space"]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":2,"words":251},"filePathRelative":"posts/test2.md"}');
var test2_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$e
}, Symbol.toStringTag, { value: "Module" }));
const data$d = JSON.parse('{"key":"v-d440f426","path":"/tools/","title":"tools","lang":"zh-CN","frontmatter":{"title":"tools"},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":1,"words":3},"filePathRelative":"tools/README.md"}');
var index_html$G = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$d
}, Symbol.toStringTag, { value: "Module" }));
const data$c = JSON.parse('{"key":"v-70e45ed8","path":"/zh/about.html","title":"\u5173\u4E8E","lang":"zh-CN","frontmatter":{"title":"\u5173\u4E8E"},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":1,"words":4},"filePathRelative":"zh/about.md"}');
var about_html$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$c
}, Symbol.toStringTag, { value: "Module" }));
const data$b = JSON.parse('{"key":"v-2d0ad528","path":"/zh/","title":"\u5DE5\u5177","lang":"zh-CN","frontmatter":{"title":"\u5DE5\u5177","description":"\u9875\u9762\u7684\u63CF\u8FF0","home":true,"layout":"HomePage","heroText":"\u963F\u65AF\u987F","tagline":"\u963F\u65AF\u987F","actionText":"\u5F00\u59CB \u2192","actionLink":"/guide/","features":[{"title":"\u7B80\u6D01\u81F3\u4E0A","details":"\u4EE5 Markdown \u4E3A\u4E2D\u5FC3\u7684\u9879\u76EE\u7ED3\u6784\uFF0C\u4EE5\u6700\u5C11\u7684\u914D\u7F6E\u5E2E\u52A9\u4F60\u4E13\u6CE8\u4E8E\u5199\u4F5C\u3002"},{"title":"Vue\u9A71\u52A8","details":"\u4EAB\u53D7 Vue + webpack \u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C\u5728 Markdown \u4E2D\u4F7F\u7528 Vue \u7EC4\u4EF6\uFF0C\u540C\u65F6\u53EF\u4EE5\u4F7F\u7528 Vue \u6765\u5F00\u53D1\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002"},{"title":"\u9AD8\u6027\u80FD"}]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":1,"words":99},"filePathRelative":"zh/README.md"}');
var index_html$F = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$b
}, Symbol.toStringTag, { value: "Module" }));
const data$a = JSON.parse('{"key":"v-3e313466","path":"/zh/blogs/","title":"\u535A\u5BA2","lang":"zh-CN","frontmatter":{"title":"\u535A\u5BA2"},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":1,"words":4},"filePathRelative":"zh/blogs/README.md"}');
var index_html$E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$a
}, Symbol.toStringTag, { value: "Module" }));
const data$9 = JSON.parse('{"key":"v-37781588","path":"/zh/guide/getting-started.html","title":"","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[],"git":{},"filePathRelative":"zh/guide/getting-started.md"}');
var gettingStarted_html$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$9
}, Symbol.toStringTag, { value: "Module" }));
const data$8 = JSON.parse('{"key":"v-47357bdb","path":"/zh/guide/","title":4444,"lang":"zh-CN","frontmatter":{"title":4444},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":1,"words":4},"filePathRelative":"zh/guide/README.md"}');
var index_html$D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$8
}, Symbol.toStringTag, { value: "Module" }));
const data$7 = JSON.parse('{"key":"v-52d7e0b6","path":"/zh/notes/","title":"notes","lang":"zh-CN","frontmatter":{"title":"notes"},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":1,"words":3},"filePathRelative":"zh/notes/README.md"}');
var index_html$C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$7
}, Symbol.toStringTag, { value: "Module" }));
const data$6 = JSON.parse('{"key":"v-2c44730e","path":"/zh/tags/","title":"tags","lang":"zh-CN","frontmatter":{"title":"tags"},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":1,"words":3},"filePathRelative":"zh/tags/README.md"}');
var index_html$B = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$6
}, Symbol.toStringTag, { value: "Module" }));
const data$5 = JSON.parse('{"key":"v-5d12c8dc","path":"/zh/tools/","title":"tools","lang":"zh-CN","frontmatter":{"title":"tools"},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":1,"words":3},"filePathRelative":"zh/tools/README.md"}');
var index_html$A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$5
}, Symbol.toStringTag, { value: "Module" }));
const data$4 = JSON.parse('{"key":"v-3706649a","path":"/404.html","title":"","lang":"zh-CN","frontmatter":{"layout":"404"},"excerpt":"","headers":[],"git":{},"filePathRelative":null}');
var _404_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$4
}, Symbol.toStringTag, { value: "Module" }));
const data$3 = JSON.parse('{"key":"v-15534fdd","path":"/tags/","title":"\u6807\u7B7E","lang":"zh-CN","frontmatter":{"title":"\u6807\u7B7E","layout":"Tags","blog":{"type":"category","key":"tag"}},"excerpt":"","headers":[],"git":{},"filePathRelative":null}');
var index_html$z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$3
}, Symbol.toStringTag, { value: "Module" }));
const data$2 = JSON.parse('{"key":"v-d5d13fc0","path":"/tags/test/","title":"test | \u6807\u7B7E","lang":"zh-CN","frontmatter":{"title":"test | \u6807\u7B7E","layout":"Tags","blog":{"type":"category","name":"test","key":"tag"}},"excerpt":"","headers":[],"git":{},"filePathRelative":null}');
var index_html$y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$2
}, Symbol.toStringTag, { value: "Module" }));
const data$1 = JSON.parse('{"key":"v-781133a0","path":"/tags/tag-with-space/","title":"tag with space | \u6807\u7B7E","lang":"zh-CN","frontmatter":{"title":"tag with space | \u6807\u7B7E","layout":"Tags","blog":{"type":"category","name":"tag with space","key":"tag"}},"excerpt":"","headers":[],"git":{},"filePathRelative":null}');
var index_html$x = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$1
}, Symbol.toStringTag, { value: "Module" }));
const data = JSON.parse('{"key":"v-3a1f8885","path":"/page/1/","title":"Home","lang":"zh-CN","frontmatter":{"title":"Home","layout":"HomePage"},"excerpt":"","headers":[],"git":{},"filePathRelative":null}');
var index_html$w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Q = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h4 id="\u6211\u4E00\u76F4\u88AB\u6587\u5B57\u6CBB\u6108\u7740-\u5B83\u80FD\u5E26\u7ED9\u4EBA\u529B\u91CF-\u6240\u4EE5\u6211\u597D\u50CF\u4E00\u76F4\u5728\u5199\u4E1C\u897F\u3002" tabindex="-1"><a class="header-anchor" href="#\u6211\u4E00\u76F4\u88AB\u6587\u5B57\u6CBB\u6108\u7740-\u5B83\u80FD\u5E26\u7ED9\u4EBA\u529B\u91CF-\u6240\u4EE5\u6211\u597D\u50CF\u4E00\u76F4\u5728\u5199\u4E1C\u897F\u3002" aria-hidden="true">#</a> \u6211\u4E00\u76F4\u88AB\u6587\u5B57\u6CBB\u6108\u7740\uFF0C\u5B83\u80FD\u5E26\u7ED9\u4EBA\u529B\u91CF\uFF0C\u6240\u4EE5\u6211\u597D\u50CF\u4E00\u76F4\u5728\u5199\u4E1C\u897F\u3002</h4><h4 id="\u4EE5\u524D\u4E5F\u60F3\u63D0\u8D77\u7B14\u5199\u4E00\u4E9B\u60C5\u611F\u7C7B\u7684\u5185\u5BB9-\u4F46\u662F\u5F88\u96BE\u575A\u6301\u4E0B\u53BB\u3002" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u524D\u4E5F\u60F3\u63D0\u8D77\u7B14\u5199\u4E00\u4E9B\u60C5\u611F\u7C7B\u7684\u5185\u5BB9-\u4F46\u662F\u5F88\u96BE\u575A\u6301\u4E0B\u53BB\u3002" aria-hidden="true">#</a> \u4EE5\u524D\u4E5F\u60F3\u63D0\u8D77\u7B14\u5199\u4E00\u4E9B\u60C5\u611F\u7C7B\u7684\u5185\u5BB9\uFF0C\u4F46\u662F\u5F88\u96BE\u575A\u6301\u4E0B\u53BB\u3002</h4><h4 id="\u5DE5\u4F5C\u540E-\u53D1\u73B0\u81EA\u5DF1\u5931\u53BB\u4E86\u5F88\u591A-\u6211\u79F0\u4E4B\u4E3A\u7075\u6C14-\u6211\u60F3\u6211\u9700\u8981\u505A\u4E00\u4E9B\u4E8B\u60C5-\u8BA9\u6211\u4FDD\u6301\u8FD9\u79CD\u70ED\u7231\u3002" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u540E-\u53D1\u73B0\u81EA\u5DF1\u5931\u53BB\u4E86\u5F88\u591A-\u6211\u79F0\u4E4B\u4E3A\u7075\u6C14-\u6211\u60F3\u6211\u9700\u8981\u505A\u4E00\u4E9B\u4E8B\u60C5-\u8BA9\u6211\u4FDD\u6301\u8FD9\u79CD\u70ED\u7231\u3002" aria-hidden="true">#</a> \u5DE5\u4F5C\u540E\uFF0C\u53D1\u73B0\u81EA\u5DF1\u5931\u53BB\u4E86\u5F88\u591A\uFF0C\u6211\u79F0\u4E4B\u4E3A\u7075\u6C14\uFF0C\u6211\u60F3\u6211\u9700\u8981\u505A\u4E00\u4E9B\u4E8B\u60C5\uFF0C\u8BA9\u6211\u4FDD\u6301\u8FD9\u79CD\u70ED\u7231\u3002</h4><h4 id="\u867D\u7136\u662F\u9ED1\u767D\u683C\u5B50-\u4F46\u662F\u4E5F\u662F\u4E00\u79CD\u8BB0\u5F55-\u4EE3\u8868\u6211\u8FD8\u5728\u601D\u8003\u3002" tabindex="-1"><a class="header-anchor" href="#\u867D\u7136\u662F\u9ED1\u767D\u683C\u5B50-\u4F46\u662F\u4E5F\u662F\u4E00\u79CD\u8BB0\u5F55-\u4EE3\u8868\u6211\u8FD8\u5728\u601D\u8003\u3002" aria-hidden="true">#</a> \u867D\u7136\u662F\u9ED1\u767D\u683C\u5B50\uFF0C\u4F46\u662F\u4E5F\u662F\u4E00\u79CD\u8BB0\u5F55\uFF0C\u4EE3\u8868\u6211\u8FD8\u5728\u601D\u8003\u3002</h4><p>\u8FD9\u91CC\u5C31\u4F5C\u4E3A\u77ED\u6682\u7684\u4F11\u606F\u7684\u533A\u57DF\u5427\u3002</p><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> \u2026\u2026\u2026\u2026</h4><h4 id="\u5E0C\u671B\u80FD\u575A\u6301\u4E0B\u53BB\u3002" tabindex="-1"><a class="header-anchor" href="#\u5E0C\u671B\u80FD\u575A\u6301\u4E0B\u53BB\u3002" aria-hidden="true">#</a> \u5E0C\u671B\u80FD\u575A\u6301\u4E0B\u53BB\u3002</h4></div>`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/about.html.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
var about_html$2 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$m], ["__file", "about.html.vue"]]);
var about_html$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": about_html$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$P = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>99</p></div>`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
var index_html$u = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$l], ["__file", "index.html.vue"]]);
var index_html$v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$u
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$O = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>wqerwewe</p></div>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/blogs/index.html.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
var index_html$s = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$k], ["__file", "index.html.vue"]]);
var index_html$t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$s
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$N = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/getting-started.html.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
var gettingStarted_html$2 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$j], ["__file", "getting-started.html.vue"]]);
var gettingStarted_html$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": gettingStarted_html$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$M = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>wqerwewe</p></div>`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/index.html.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
var index_html$q = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$i], ["__file", "index.html.vue"]]);
var index_html$r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$q
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$L = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/links/index.html.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
var index_html$o = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$h], ["__file", "index.html.vue"]]);
var index_html$p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$o
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$K = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>wqerwewe</p></div>`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/notes/index.html.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
var index_html$m = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$g], ["__file", "index.html.vue"]]);
var index_html$n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$m
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$J = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/test.html.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
var test_html = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$f], ["__file", "test.html.vue"]]);
var test_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": test_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$I = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/test2.html.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var test2_html = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$e], ["__file", "test2.html.vue"]]);
var test2_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": test2_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$H = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>wqerwewe</p></div>`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tools/index.html.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var index_html$k = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$d], ["__file", "index.html.vue"]]);
var index_html$l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$k
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$G = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>about</p></div>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/about.html.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var about_html = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$c], ["__file", "about.html.vue"]]);
var about_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": about_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$F = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>rrrrrrrrrrrrr</p></div>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/index.html.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var index_html$i = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$b], ["__file", "index.html.vue"]]);
var index_html$j = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>wqerwewe</p></div>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/blogs/index.html.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var index_html$g = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$a], ["__file", "index.html.vue"]]);
var index_html$h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$g
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/guide/getting-started.html.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var gettingStarted_html = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$9], ["__file", "getting-started.html.vue"]]);
var gettingStarted_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": gettingStarted_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$C = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>\u4E2D\u6587</p></div>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/guide/index.html.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var index_html$e = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$8], ["__file", "index.html.vue"]]);
var index_html$f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>wqerwewe</p></div>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/notes/index.html.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var index_html$c = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$7], ["__file", "index.html.vue"]]);
var index_html$d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>wqerwewe</p></div>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/tags/index.html.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var index_html$a = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$6], ["__file", "index.html.vue"]]);
var index_html$b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>wqerwewe</p></div>`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/tools/index.html.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var index_html$8 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$5], ["__file", "index.html.vue"]]);
var index_html$9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/404.html.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var _404_html = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$4], ["__file", "404.html.vue"]]);
var _404_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tags/index.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var index_html$6 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$3], ["__file", "index.html.vue"]]);
var index_html$7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tags/test/index.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var index_html$4 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$2], ["__file", "index.html.vue"]]);
var index_html$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tags/tag-with-space/index.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var index_html$2 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$1], ["__file", "index.html.vue"]]);
var index_html$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/page/1/index.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
var index_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = vue.defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const footerHTML = themeLocale.value.footer;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "footer" }, _attrs))}><span>${(_a = vue.unref(footerHTML)) != null ? _a : ""}</span></footer>`);
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/Footer.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var Footer = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__file", "Footer.vue"]]);
const _sfc_main$s = vue.defineComponent({
  __name: "ToggleColorModeButton",
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const { currentMode } = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VIcon = vue.resolveComponent("VIcon");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        title: vue.unref(themeLocale).toggleColorMode
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_component_VIcon, {
        style: vue.unref(currentMode) === "light" ? null : { display: "none" },
        name: "fa-sun"
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_VIcon, {
        style: vue.unref(currentMode) === "dark" ? null : { display: "none" },
        name: "fa-moon"
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_VIcon, {
        style: vue.unref(currentMode) === "auto" ? null : { display: "none" },
        name: "fa-magic"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/ToggleColorModeButton.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var ToggleColorModeButton = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__file", "ToggleColorModeButton.vue"]]);
const _sfc_main$r = vue.defineComponent({
  __name: "ToggleSidebarButton",
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VIcon = vue.resolveComponent("VIcon");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_component_VIcon, { name: "bi-layout-sidebar-inset" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var ToggleSidebarButton = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__file", "ToggleSidebarButton.vue"]]);
const _sfc_main$q = vue.defineComponent({
  __name: "Menu",
  __ssrInlineRender: true,
  emits: ["toggle-sidebar", "toggle-catalog"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const state = vue.reactive({
      isMenuOpen: false,
      isTextVisible: false,
      isBtnIconVisible: true,
      menuText: "0",
      borderLen: "0% 314.15926%"
    });
    vue.onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    vue.onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = () => {
      const currentTop = window.pageYOffset;
      const siteHeight = getSiteHeight();
      const windowHeight = document.documentElement.clientHeight;
      let percent = currentTop / (siteHeight - windowHeight) * 100;
      if (percent > 100)
        percent = 100;
      if (isNaN(percent) || Math.round(percent) <= 0) {
        percent = 0;
        state.isTextVisible = false;
        state.isBtnIconVisible = true;
      } else {
        state.isTextVisible = true;
        state.menuText = Math.round(percent) + "%";
        state.isBtnIconVisible = false;
      }
      state.borderLen = 3.1415926 * (percent || 0) + "% 314.15926%";
    };
    const getSiteHeight = () => {
      const container = document.querySelector(".theme-container");
      return container ? container.offsetHeight : 0;
    };
    const isShowTocButton = useCatalog();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VIcon = vue.resolveComponent("VIcon");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["menu-btn-container", { open: state.isMenuOpen }]
      }, _attrs))}><div class="menu-btn-wrapper"><div class="menu-btn"><div style="${serverRenderer.ssrRenderStyle(state.isBtnIconVisible ? null : { display: "none" })}" class="menu-btn-icon"><span></span><span></span><span></span></div><div style="${serverRenderer.ssrRenderStyle(state.isTextVisible ? null : { display: "none" })}" class="menu-text">${serverRenderer.ssrInterpolate(state.menuText)}</div><svg class="menu-progress"><circle class="menu-border" cx="50%" cy="50%" r="48%" style="${serverRenderer.ssrRenderStyle({ "stroke-dasharray": state.borderLen })}"></circle></svg></div><div class="menu-btn-child-wrapper">`);
      if (vue.unref(themeLocale).colorModeSwitch) {
        _push(serverRenderer.ssrRenderComponent(ToggleColorModeButton, { class: "menu-btn-child" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="menu-btn-child">`);
      _push(serverRenderer.ssrRenderComponent(_component_VIcon, { name: "fa-chevron-down" }, null, _parent));
      _push(`</div><div class="menu-btn-child">`);
      _push(serverRenderer.ssrRenderComponent(_component_VIcon, { name: "fa-chevron-up" }, null, _parent));
      _push(`</div>`);
      if (vue.unref(isShowTocButton)) {
        _push(`<div class="menu-btn-child menu-toc-btn">`);
        _push(serverRenderer.ssrRenderComponent(_component_VIcon, { name: "fa-list-ul" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(ToggleSidebarButton, {
        class: "menu-btn-child menu-btn-sidebar",
        onToggle: ($event) => _ctx.$emit("toggle-sidebar")
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/Menu.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var Menu = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__file", "Menu.vue"]]);
const _sfc_main$p = vue.defineComponent({
  __name: "DropdownTransition",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var DropdownTransition = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__file", "DropdownTransition.vue"]]);
const _sfc_main$o = vue.defineComponent({
  __name: "NavbarDropdown",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(
      () => item.value.ariaLabel || item.value.text
    );
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(
      () => route.path,
      () => {
        open.value = false;
      }
    );
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VIcon = vue.resolveComponent("VIcon");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["navbar-dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="navbar-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", dropdownAriaLabel.value)}><span class="title">`);
      if (vue.unref(item).icon) {
        _push(`<span class="nav-icon">`);
        _push(serverRenderer.ssrRenderComponent(_component_VIcon, {
          name: vue.unref(item).icon
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span></span><span class="arrow down"></span></button><button class="navbar-dropdown-title-mobile" type="button"${serverRenderer.ssrRenderAttr("aria-label", dropdownAriaLabel.value)}><span class="title">`);
      if (vue.unref(item).icon) {
        _push(`<span class="nav-icon">`);
        _push(serverRenderer.ssrRenderComponent(_component_VIcon, {
          name: vue.unref(item).icon
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span></span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(DropdownTransition, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="navbar-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
              _push2(`<li class="navbar-dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(AutoLink, {
                    item: child,
                    onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="navbar-navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(AutoLink, {
                    item: grandchild,
                    onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                  }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(AutoLink, {
                  item: child,
                  onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "navbar-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.text,
                    class: "navbar-dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "navbar-dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(AutoLink, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "navbar-navbar-dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "navbar-dropdown-subitem"
                          }, [
                            vue.createVNode(AutoLink, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(AutoLink, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/NavbarDropdown.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var NavbarDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__file", "NavbarDropdown.vue"]]);
const _sfc_main$n = vue.defineComponent({
  __name: "NavbarItems",
  __ssrInlineRender: true,
  emits: ["toggle-search"],
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale2 = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b, _c, _d, _e, _f;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = (_a = router == null ? void 0 : router.currentRoute) == null ? void 0 : _a.value.path;
        const currentFullPath = (_b = router == null ? void 0 : router.currentRoute) == null ? void 0 : _b.value.fullPath;
        const currentHash = (_c = router == null ? void 0 : router.currentRoute) == null ? void 0 : _c.value.hash;
        const languageDropdown = {
          text: (_d = themeLocale2.value.selectLanguageText) != null ? _d : "unknown language",
          ariaLabel: (_f = (_e = themeLocale2.value.selectLanguageAriaLabel) != null ? _e : themeLocale2.value.selectLanguageText) != null ? _f : "unknown language",
          icon: themeLocale2.value.langIcon,
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c2, _d2, _e2, _f2;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d2 = (_c2 = themeLocale2.value.locales) == null ? void 0 : _c2[targetLocalePath]) != null ? _d2 : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e2 = targetThemeLocale.selectLanguageName) != null ? _e2 : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(
                routeLocale.value,
                targetLocalePath
              );
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = `${targetLocalePage}${currentHash}`;
              } else {
                link = (_f2 = targetThemeLocale.home) != null ? _f2 : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const resolveNavbarItem = (item) => {
      if (shared.isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return {
          ...item,
          children: item.children.map(resolveNavbarItem)
        };
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale2 = useThemeLocaleData();
      return vue.computed(
        () => (themeLocale2.value.navbar || []).map(resolveNavbarItem)
      );
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...isDocPage.value ? navbarSelectLanguage.value : []
    ]);
    const frontmatter = usePageFrontmatter();
    const isDocPage = vue.computed(() => {
      var _a;
      const router = vueRouter.useRouter();
      const path = (_a = router.currentRoute) == null ? void 0 : _a.value.path;
      return frontmatter.value.layout === void 0 && path.indexOf("/page/") === -1 && pageData.value.path !== "";
    });
    const themeLocale = useThemeLocaleData();
    const shouldShowSearchPage = vue.computed(
      () => themeLocale.value.search && frontmatter.value.search !== false
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VIcon = vue.resolveComponent("VIcon");
      if (navbarLinks.value.length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(navbarLinks.value, (item) => {
          _push(`<div class="navbar-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(NavbarDropdown, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(AutoLink, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (shouldShowSearchPage.value) {
          _push(`<div class="navbar-item"><a style="${serverRenderer.ssrRenderStyle({ "cursor": "pointer" })}">`);
          if (vue.unref(themeLocale).searchIcon) {
            _push(`<span class="nav-icon">`);
            _push(serverRenderer.ssrRenderComponent(_component_VIcon, {
              name: vue.unref(themeLocale).searchIcon
            }, null, _parent));
            _push(`</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span>${serverRenderer.ssrInterpolate(vue.unref(themeLocale).searchText)}</span></a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/NavbarItems.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var NavbarItems = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__file", "NavbarItems.vue"]]);
const _sfc_main$m = vue.defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    isSidebar: {
      type: Boolean,
      required: true
    }
  },
  emits: ["toggle-search"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const router = vueRouter.useRouter();
    const navbar = vue.ref(null);
    const navbarBrand = vue.ref(null);
    const navbarBrandLink = vue.computed(() => themeLocale.value.home || "/");
    const navbarBrandTitle = vue.computed(() => themeLocale.value.navbarTitle);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const previousTop = vue.ref(0);
    const isFixed = vue.ref(false);
    const isVisible = vue.ref(false);
    const isInvert = vue.ref(true);
    const handleScroll = () => {
      const currentTop = window.pageYOffset;
      if (currentTop < previousTop.value) {
        if (currentTop > 0 && isFixed.value)
          isVisible.value = true;
        else {
          isVisible.value = false;
          isFixed.value = false;
        }
      } else {
        isVisible.value = false;
        if (navbar.value && currentTop > navbar.value.offsetHeight)
          isFixed.value = true;
      }
      previousTop.value = currentTop;
    };
    const handleInvert = () => {
      let invert = false;
      if (frontmatter.value.layout === "HomePage")
        invert = true;
      if (frontmatter.value.layout === "Post" && frontmatter.value.useHeaderImage)
        invert = true;
      if (frontmatter.value.layout === "Tags" && themeLocale.value.pages && themeLocale.value.pages.tags && themeLocale.value.pages.tags.bgImage)
        invert = true;
      if (frontmatter.value.layout === "Links" && themeLocale.value.pages && themeLocale.value.pages.links && themeLocale.value.pages.links.bgImage)
        invert = true;
      isInvert.value = invert;
    };
    let unregisterRouterHook;
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT || !navbar.value) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
      handleInvert();
      unregisterRouterHook = router.afterEach(() => {
        handleInvert();
      });
      window.addEventListener("scroll", handleScroll);
    });
    vue.onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
      unregisterRouterHook();
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: ["navbar", {
          "is-fixed": isFixed.value || __props.isSidebar,
          "is-visible": isVisible.value || __props.isSidebar,
          invert: isInvert.value
        }]
      }, _attrs))}><span>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: navbarBrandLink.value }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="site-name"${_scopeId}>${serverRenderer.ssrInterpolate(navbarBrandTitle.value)}</span>`);
          } else {
            return [
              vue.createVNode("span", { class: "site-name" }, vue.toDisplayString(navbarBrandTitle.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><div class="navbar-items-wrapper" style="${serverRenderer.ssrRenderStyle(linksWrapperStyle.value)}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(NavbarItems, {
        class: "can-hide",
        onToggleSearch: ($event) => _ctx.$emit("toggle-search")
      }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/Navbar.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "Navbar.vue"]]);
const _sfc_main$l = vue.defineComponent({
  __name: "SidebarItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = vue.toRefs(props);
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const isActive = vue.computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = vue.computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      active: isActive.value,
      collapsible: item.value.collapsible
    }));
    const isOpenDefault = vue.computed(
      () => item.value.collapsible ? isActive.value : true
    );
    const [isOpen, toggleIsOpen] = core.useToggle(isOpenDefault.value);
    const unregisterRouterHook = router.afterEach((to) => {
      vue.nextTick(() => {
        isOpen.value = isOpenDefault.value;
      });
    });
    vue.onBeforeUnmount(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SidebarItem = vue.resolveComponent("SidebarItem", true);
      _push(`<li${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(item).link) {
        _push(serverRenderer.ssrRenderComponent(AutoLink, {
          class: itemClass.value,
          item: vue.unref(item)
        }, null, _parent));
      } else {
        _push(`<p tabindex="0" class="${serverRenderer.ssrRenderClass(itemClass.value)}">${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(item).collapsible) {
          _push(`<span class="${serverRenderer.ssrRenderClass([vue.unref(isOpen) ? "down" : "right", "arrow"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      }
      if ((_a = vue.unref(item).children) == null ? void 0 : _a.length) {
        _push(serverRenderer.ssrRenderComponent(DropdownTransition, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${serverRenderer.ssrRenderStyle(vue.unref(isOpen) ? null : { display: "none" })}" class="sidebar-item-children"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
                _push2(serverRenderer.ssrRenderComponent(_component_SidebarItem, {
                  key: `${vue.unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: vue.unref(depth) + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                vue.withDirectives(vue.createVNode("ul", { class: "sidebar-item-children" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                    return vue.openBlock(), vue.createBlock(_component_SidebarItem, {
                      key: `${vue.unref(depth)}${child.text}${child.link}`,
                      item: child,
                      depth: vue.unref(depth) + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ], 512), [
                  [vue.vShow, vue.unref(isOpen)]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/SidebarItem.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var SidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "SidebarItem.vue"]]);
const _sfc_main$k = vue.defineComponent({
  __name: "SidebarItems",
  __ssrInlineRender: true,
  setup(__props) {
    const route = vueRouter.useRoute();
    const sidebarItems = useSidebarItems();
    vue.onMounted(() => {
      vue.watch(
        () => route.hash,
        (hash) => {
          const sidebar = document.querySelector(".sidebar");
          if (!sidebar)
            return;
          const activeSidebarItem = document.querySelector(
            `.sidebar a.sidebar-item[href="${route.path}${hash}"]`
          );
          if (!activeSidebarItem)
            return;
          const { top: sidebarTop, height: sidebarHeight } = sidebar.getBoundingClientRect();
          const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
          if (activeSidebarItemTop < sidebarTop) {
            activeSidebarItem.scrollIntoView(true);
          } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
            activeSidebarItem.scrollIntoView(false);
          }
        }
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(sidebarItems).length) {
        _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
          _push(serverRenderer.ssrRenderComponent(SidebarItem, {
            key: `${item.text}${item.link}`,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/SidebarItems.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var SidebarItems = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "SidebarItems.vue"]]);
const _sfc_main$j = vue.defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  emits: ["toggle-search"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(NavbarItems, {
        onToggleSearch: ($event) => _ctx.$emit("toggle-search")
      }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(SidebarItems, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/Sidebar.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "Sidebar.vue"]]);
const _sfc_main$i = vue.defineComponent({
  __name: "Common",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const router = vueRouter.useRouter();
    const shouldShowNavbar = vue.computed(
      () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
    );
    const isNotFound = vue.computed(() => pageData.value.path === "");
    const sidebarItems = useSidebarItems();
    const shouldShowSidebar = vue.computed(
      () => sidebarItems.value.length > 0 && !isNotFound.value
    );
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const isSearchOpen = vue.ref(false);
    const toggleSearch = (to) => {
      isSearchOpen.value = typeof to === "boolean" ? to : !isSearchOpen.value;
      const HTMLDom = document.querySelector("html");
      if (isSearchOpen.value)
        HTMLDom == null ? void 0 : HTMLDom.classList.add("fixed");
      else
        HTMLDom == null ? void 0 : HTMLDom.classList.remove("fixed");
      if (isSearchOpen.value) {
        setTimeout(function() {
          const searchInput = document.querySelector(
            ".search-page input"
          );
          searchInput.focus();
        }, 400);
      }
    };
    const isCatalogOpen = vue.ref(false);
    const toggleCatalog = (to) => {
      isCatalogOpen.value = typeof to === "boolean" ? to : !isCatalogOpen.value;
    };
    const containerClass = vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !shouldShowSidebar.value,
        "sidebar-open": isSidebarOpen.value,
        "catalog-open": isCatalogOpen.value,
        "search-open": isSearchOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
        toggleSearch(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GungnirSearchPage = vue.resolveComponent("GungnirSearchPage");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["theme-container", containerClass.value]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (shouldShowNavbar.value) {
          _push(serverRenderer.ssrRenderComponent(Navbar, {
            "is-sidebar": shouldShowSidebar.value,
            onToggleSearch: ($event) => toggleSearch(true)
          }, {
            before: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(Sidebar, {
          onToggleSearch: ($event) => toggleSearch(true)
        }, {
          top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      _push(`<div class="page-content">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, null, _push, _parent);
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(_component_GungnirSearchPage, {
        onToggleSearch: ($event) => toggleSearch(false)
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(Menu, {
        onToggleSidebar: toggleSidebar,
        onToggleCatalog: toggleCatalog
      }, null, _parent));
      if (!shouldShowSidebar.value) {
        _push(serverRenderer.ssrRenderComponent(Footer, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/Common.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var Common = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "Common.vue"]]);
var _404_vue_vue_type_style_index_0_lang = "";
const _sfc_main$h = vue.defineComponent({
  __name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeText = (_b = themeLocale.value.backToHome) != null ? _b : "$ cd /home/";
    const emojiArray = [
      "\\(o_o)/",
      "(o^^)o",
      "(\u02DA\u0394\u02DA)b",
      "(^-^*)",
      "(^_^)b",
      "(\u256F\u2035\u25A1\u2032)\u256F",
      "(='X'=)",
      "(>_<)",
      "\\(\xB0\u02CA\u0414\u02CB\xB0)/",
      "\u311F(\u2594\u25BD\u2594)\u310F"
    ];
    const getEmoji = () => emojiArray[Math.floor(Math.random() * emojiArray.length)];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(Common, _attrs, {
        page: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="not-found-wrapper"${_scopeId}><p class="emoji"${_scopeId}>${serverRenderer.ssrInterpolate(getEmoji())}</p><h1${_scopeId}>404 - ${serverRenderer.ssrInterpolate(getMsg())}</h1>`);
            _push2(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "not-found-wrapper" }, [
                vue.createVNode("p", { class: "emoji" }, vue.toDisplayString(getEmoji()), 1),
                vue.createVNode("h1", null, "404 - " + vue.toDisplayString(getMsg()), 1),
                vue.createVNode(_component_RouterLink, { to: "/" }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/layouts/404.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "404.vue"]]);
var _404$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = vue.defineComponent({
  __name: "Pager",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "pager" }, _attrs))}>`);
      if (__props.data.prev) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
          class: "prev",
          to: __props.data.prev.link
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(__props.data.prev.text)} `);
              if (__props.data.prev.title) {
                _push2(`<br${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.data.prev.title) {
                _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(__props.data.prev.title)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(__props.data.prev.text) + " ", 1),
                __props.data.prev.title ? (vue.openBlock(), vue.createBlock("br", { key: 0 })) : vue.createCommentVNode("", true),
                __props.data.prev.title ? (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(__props.data.prev.title), 1)) : vue.createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.data.next) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
          class: "next",
          to: __props.data.next.link
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(__props.data.next.text)} `);
              if (__props.data.next.title) {
                _push2(`<br${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.data.next.title) {
                _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(__props.data.next.title)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(__props.data.next.text) + " ", 1),
                __props.data.next.title ? (vue.openBlock(), vue.createBlock("br", { key: 0 })) : vue.createCommentVNode("", true),
                __props.data.next.title ? (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(__props.data.next.title), 1)) : vue.createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/Pager.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var Pager = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "Pager.vue"]]);
const _sfc_main$f = vue.defineComponent({
  __name: "PostListItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const getExcerpt = (excerpt) => {
      return excerpt.replace(/<RouterLink to/g, "<a href").replace(/<\/RouterLink>/g, "</a>");
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "post-item" }, _attrs))}><div class="post-item__img"><img${serverRenderer.ssrRenderAttr("src", vue.unref(withBase)(__props.item.info.headerImage))}></div><div class="else"><p class="post-item__date">${serverRenderer.ssrInterpolate(__props.item.info.date ? vue.unref(formateDateString)(__props.item.info.date) : "")}</p>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
        to: __props.item.path,
        class: "post-item__title"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>${serverRenderer.ssrInterpolate(__props.item.info.title)}</h2>`);
            if (__props.item.info.subtitle) {
              _push2(`<h3${_scopeId}>${serverRenderer.ssrInterpolate(__props.item.info.subtitle)}</h3>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode("h2", null, vue.toDisplayString(__props.item.info.title), 1),
              __props.item.info.subtitle ? (vue.openBlock(), vue.createBlock("h3", { key: 0 }, vue.toDisplayString(__props.item.info.subtitle), 1)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="post-item__content">${(_a = getExcerpt(__props.item.info.excerpt || "")) != null ? _a : ""}</div></div></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/PostListItem.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var PostListItem = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "PostListItem.vue"]]);
const _sfc_main$e = vue.defineComponent({
  __name: "PostList",
  __ssrInlineRender: true,
  setup(__props) {
    const router = vueRouter.useRouter();
    const themeLocale = useThemeLocaleData();
    const pageIndex = vue.computed(() => {
      const index2 = decodeURI(
        router.currentRoute.value.path.replace(/\/page/g, "").replace(/\//g, "")
      );
      if (index2 === "")
        return 1;
      return Number(index2);
    });
    const { slicedPosts, postListPager } = useBlog(pageIndex);
    const pagerData = vue.computed(() => {
      const links = postListPager.value;
      const next = links && links.next ? {
        text: themeLocale.value.homeNext,
        link: links.next
      } : null;
      const prev = links && links.prev ? {
        text: themeLocale.value.homePrev,
        link: links.prev
      } : null;
      return {
        next,
        prev
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "postlist-wrapper" }, _attrs))}><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(slicedPosts), (item) => {
        _push(serverRenderer.ssrRenderComponent(PostListItem, {
          key: item.path,
          item
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (pagerData.value.next || pagerData.value.prev) {
        _push(serverRenderer.ssrRenderComponent(Pager, { data: pagerData.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/PostList.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var PostList = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "PostList.vue"]]);
var SNS_vue_vue_type_style_index_0_lang = "";
const _sfc_main$d = vue.defineComponent({
  __name: "SNS",
  __ssrInlineRender: true,
  props: {
    large: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    var _a;
    const defaultSNS = {
      github: {
        icon: "fa-github-alt",
        preLink: "https://github.com/"
      },
      linkedin: {
        icon: "fa-linkedin-in",
        preLink: "https://www.linkedin.com/in/"
      },
      facebook: {
        icon: "fa-facebook-f",
        preLink: "https://www.facebook.com/"
      },
      twitter: {
        icon: "fa-twitter",
        preLink: "https://www.twitter.com/"
      },
      zhihu: {
        icon: "ri-zhihu-line",
        preLink: "https://www.zhihu.com/people/"
      },
      weibo: {
        icon: "ri-weibo-fill",
        preLink: "http://weibo.com/u/"
      },
      email: {
        icon: "fa-envelope",
        preLink: "mailto:"
      },
      rss: {
        icon: "ri-rss-fill",
        preLink: "",
        iconScale: 0.9
      }
    };
    const themeLocale = useThemeLocaleData();
    const sns = (_a = themeLocale.value.personalInfo) == null ? void 0 : _a.sns;
    const getSNSLink = (user, platform) => {
      return typeof user === "string" ? defaultSNS[platform].preLink + user : user.link;
    };
    const getSNSIcon = (user, platform) => {
      return typeof user === "string" ? defaultSNS[platform].icon : user.icon;
    };
    const getSNSIconScale = (user, platform) => {
      return (typeof user === "string" ? defaultSNS[platform].iconScale : user.iconScale) || 1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VIcon = vue.resolveComponent("VIcon");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sns-wrapper" }, _attrs))}><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(sns), (user, platform) => {
        _push(`<a${serverRenderer.ssrRenderAttr("href", getSNSLink(user, platform))} target="_blank" rel="noopener noreferrer">`);
        _push(serverRenderer.ssrRenderComponent(_component_VIcon, { class: "icon-stack" }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.large) {
                _push2(serverRenderer.ssrRenderComponent(_component_VIcon, {
                  name: "fa-circle",
                  scale: "2.3",
                  class: "icon-circle"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(serverRenderer.ssrRenderComponent(_component_VIcon, {
                name: getSNSIcon(user, platform),
                scale: getSNSIconScale(user, platform),
                class: "icon-sns",
                inverse: ""
              }, null, _parent2, _scopeId));
            } else {
              return [
                __props.large ? (vue.openBlock(), vue.createBlock(_component_VIcon, {
                  key: 0,
                  name: "fa-circle",
                  scale: "2.3",
                  class: "icon-circle"
                })) : vue.createCommentVNode("", true),
                vue.createVNode(_component_VIcon, {
                  name: getSNSIcon(user, platform),
                  scale: getSNSIconScale(user, platform),
                  class: "icon-sns",
                  inverse: ""
                }, null, 8, ["name", "scale"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/SNS.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var SNS = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "SNS.vue"]]);
const _sfc_main$c = vue.defineComponent({
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const bgImages = themeLocale.value.homeHeaderImages;
    const bgImageID = vue.ref(-1);
    const headerOpacity = vue.ref(1);
    const hitokotoAPI = themeLocale.value.hitokoto;
    const hitokotoText = vue.ref("\u6B63\u5728\u52A0\u8F7D\u4E00\u8A00...");
    vue.onMounted(() => {
      if (bgImages && bgImages.length > 0)
        bgImageID.value = Math.floor(Math.random() * bgImages.length);
    });
    const bgImagePath = vue.computed(() => {
      return bgImages && bgImages.length > 0 && bgImageID.value !== -1 ? `url(${withBase(bgImages[bgImageID.value].path)})` : "none";
    });
    const bgImageMask = vue.computed(() => {
      return bgImages && bgImages.length > 0 && bgImageID.value !== -1 ? bgImages[bgImageID.value].mask : null;
    });
    const personalInfo = themeLocale.value.personalInfo;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VIcon = vue.resolveComponent("VIcon");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home-blog" }, _attrs))}><div class="hero" style="${serverRenderer.ssrRenderStyle({ "background-image": bgImagePath.value })}">`);
      if (bgImageMask.value) {
        _push(`<div class="hero-mask" style="${serverRenderer.ssrRenderStyle({
          background: bgImageMask.value
        })}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="hero-content" style="${serverRenderer.ssrRenderStyle({ opacity: headerOpacity.value })}"><img class="hero-avatar hide-on-mobile"${serverRenderer.ssrRenderAttr("src", vue.unref(withBase)(vue.unref(personalInfo).avatar))} alt="hero">`);
      if (vue.unref(hitokotoAPI)) {
        _push(`<div class="hero-bubble"><div class="hero-bubble__body"><p>${serverRenderer.ssrInterpolate(hitokotoText.value)}</p></div><div class="hero-bubble__tile"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="hero-info"><h1>${serverRenderer.ssrInterpolate(vue.unref(personalInfo).name)}</h1><p class="description">${serverRenderer.ssrInterpolate(vue.unref(personalInfo).description)}</p></div>`);
      _push(serverRenderer.ssrRenderComponent(SNS, {
        class: "hide-on-mobile",
        large: ""
      }, null, _parent));
      _push(`<button class="hero-img-prev hide-on-mobile">`);
      _push(serverRenderer.ssrRenderComponent(_component_VIcon, { name: "fa-chevron-left" }, null, _parent));
      _push(`</button><button class="hero-img-next hide-on-mobile">`);
      _push(serverRenderer.ssrRenderComponent(_component_VIcon, { name: "fa-chevron-right" }, null, _parent));
      _push(`</button><span class="hero-arrow-down hide-on-mobile">`);
      _push(serverRenderer.ssrRenderComponent(_component_VIcon, {
        name: "fa-chevron-down",
        animation: "float"
      }, null, _parent));
      _push(`</span></div></div>`);
      _push(serverRenderer.ssrRenderComponent(PostList, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/Home.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "Home.vue"]]);
const _sfc_main$b = vue.defineComponent({
  __name: "HomePage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(Common, _attrs, {
        page: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(Home, null, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(Home)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/layouts/HomePage.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var HomePage = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "HomePage.vue"]]);
var HomePage$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": HomePage
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = vue.defineComponent({
  __name: "ArticleHeader",
  __ssrInlineRender: true,
  props: {
    currentTag: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const page = usePageData();
    const tagMap = useTagMap();
    const getPathByTag = (tag) => {
      return tagMap.value.map[tag].path;
    };
    const headerStyle = () => {
      const style = {};
      if (frontmatter.value.layout === "Post" && frontmatter.value.useHeaderImage && frontmatter.value.headerImage) {
        style.backgroundImage = `url(${withBase(frontmatter.value.headerImage)})`;
      }
      return style;
    };
    const personalInfo = themeLocale.value.personalInfo;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_VIcon = vue.resolveComponent("VIcon");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["article-header", { "use-image": vue.unref(frontmatter).useHeaderImage }],
        style: headerStyle()
      }, _attrs))}>`);
      if (vue.unref(frontmatter).useHeaderImage && vue.unref(frontmatter).headerMask) {
        _push(`<div class="article-header-mask" style="${serverRenderer.ssrRenderStyle({ background: vue.unref(frontmatter).headerMask })}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="article-header-content">`);
      if (vue.unref(frontmatter).tags) {
        _push(`<div class="article-tags"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(frontmatter).tags, (item, index2) => {
          _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
            key: index2,
            class: ["article-tag", { active: __props.currentTag == item }],
            to: getPathByTag(item)
          }, {
            default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer.ssrInterpolate(item)}`);
              } else {
                return [
                  vue.createTextVNode(vue.toDisplayString(item), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="article-title">${serverRenderer.ssrInterpolate(vue.unref(frontmatter).title)}</h1>`);
      if (vue.unref(frontmatter).subtitle) {
        _push(`<p class="article-subtitle">${serverRenderer.ssrInterpolate(vue.unref(frontmatter).subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="article-icons">`);
      if (vue.unref(frontmatter).author || vue.unref(personalInfo).name) {
        _push(`<div class="article-icon">`);
        _push(serverRenderer.ssrRenderComponent(_component_VIcon, { name: "fa-regular-user" }, null, _parent));
        _push(`<span>${serverRenderer.ssrInterpolate(vue.unref(frontmatter).author || vue.unref(personalInfo).name)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(frontmatter).date) {
        _push(`<div class="article-icon">`);
        _push(serverRenderer.ssrRenderComponent(_component_VIcon, { name: "fa-regular-calendar" }, null, _parent));
        _push(`<span>${serverRenderer.ssrInterpolate(vue.unref(formateDateString)(vue.unref(frontmatter).date))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(page).readingTime) {
        _push(`<div class="article-icon">`);
        _push(serverRenderer.ssrRenderComponent(_component_VIcon, { name: "ri-timer-line" }, null, _parent));
        _push(`<span>${serverRenderer.ssrInterpolate(vue.unref(page).readingTime.minutes)} min</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (vue.unref(frontmatter).useHeaderImage && vue.unref(frontmatter).headerImageCredit) {
        _push(`<div class="article-image-credit">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).headerImageCredit)} `);
        if (vue.unref(frontmatter).headerImageCreditLink) {
          _push(`<a${serverRenderer.ssrRenderAttr("href", vue.unref(frontmatter).headerImageCreditLink)} target="_blank" rel="noopener noreferrer">${serverRenderer.ssrInterpolate(vue.unref(frontmatter).headerImageCredit)}</a>`);
        } else {
          _push(`<span>${serverRenderer.ssrInterpolate(vue.unref(frontmatter).headerImageCredit)}</span>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/ArticleHeader.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var ArticleHeader = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "ArticleHeader.vue"]]);
const _sfc_main$9 = vue.defineComponent({
  __name: "PageMeta",
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VIcon = vue.resolveComponent("VIcon");
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(_component_VIcon, { name: "fa-pencil-alt" }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(AutoLink, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                vue.createVNode("span", { class: "meta-item-info" }, vue.toDisplayString(vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/PageMeta.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var PageMeta = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "PageMeta.vue"]]);
const _sfc_main$8 = vue.defineComponent({
  __name: "PageNav",
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (shared.isString(conf)) {
        return useNavLink(conf);
      }
      if (shared.isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(
            item.children,
            currentPath,
            offset
          );
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (prevNavLink.value || nextNavLink.value) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (prevNavLink.value) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(AutoLink, { item: prevNavLink.value }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (nextNavLink.value) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(AutoLink, { item: nextNavLink.value }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/PageNav.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var PageNav = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "PageNav.vue"]]);
const _sfc_main$7 = vue.defineComponent({
  __name: "Page",
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const { isDarkMode } = useDarkMode();
    const giscusTheme = vue.computed(
      () => isDarkMode.value ? themeLocale.value.giscusDarkTheme : themeLocale.value.giscusLightTheme
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      const _component_GungnirGiscus = vue.resolveComponent("GungnirGiscus");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-gungnir-content">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push, _parent);
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(PageMeta, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(PageNav, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      if (vue.unref(frontmatter).giscus !== false) {
        _push(serverRenderer.ssrRenderComponent(_component_GungnirGiscus, { theme: giscusTheme.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/Page.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Page = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "Page.vue"]]);
const _sfc_main$6 = vue.defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const scrollPromise2 = useScrollPromise();
    const onBeforeEnter = scrollPromise2.resolve;
    const onBeforeLeave = scrollPromise2.pending;
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(Common, _attrs, {
        page: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(``);
            _push2(serverRenderer.ssrRenderComponent(Page, {
              key: vue.unref(pageData).path
            }, {
              top: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(ArticleHeader, {
                    style: vue.unref(pageData).title ? null : { display: "none" }
                  }, null, _parent3, _scopeId2));
                  serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    vue.withDirectives(vue.createVNode(ArticleHeader, null, null, 512), [
                      [vue.vShow, vue.unref(pageData).title]
                    ]),
                    vue.renderSlot(_ctx.$slots, "page-top")
                  ];
                }
              }),
              "content-top": vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  serverRenderer.ssrRenderSlot(_ctx.$slots, "page-content-top", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    vue.renderSlot(_ctx.$slots, "page-content-top")
                  ];
                }
              }),
              "content-bottom": vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  serverRenderer.ssrRenderSlot(_ctx.$slots, "page-content-bottom", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    vue.renderSlot(_ctx.$slots, "page-content-bottom")
                  ];
                }
              }),
              bottom: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    vue.renderSlot(_ctx.$slots, "page-bottom")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(vue.Transition, {
                name: "fade-slide-y",
                mode: "out-in",
                onBeforeEnter: vue.unref(onBeforeEnter),
                onBeforeLeave: vue.unref(onBeforeLeave)
              }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock(Page, {
                    key: vue.unref(pageData).path
                  }, {
                    top: vue.withCtx(() => [
                      vue.withDirectives(vue.createVNode(ArticleHeader, null, null, 512), [
                        [vue.vShow, vue.unref(pageData).title]
                      ]),
                      vue.renderSlot(_ctx.$slots, "page-top")
                    ]),
                    "content-top": vue.withCtx(() => [
                      vue.renderSlot(_ctx.$slots, "page-content-top")
                    ]),
                    "content-bottom": vue.withCtx(() => [
                      vue.renderSlot(_ctx.$slots, "page-content-bottom")
                    ]),
                    bottom: vue.withCtx(() => [
                      vue.renderSlot(_ctx.$slots, "page-bottom")
                    ]),
                    _: 3
                  }))
                ]),
                _: 3
              }, 8, ["onBeforeEnter", "onBeforeLeave"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/layouts/Layout.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "Layout.vue"]]);
var Layout$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Layout
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = vue.defineComponent({
  __name: "PageHeader",
  __ssrInlineRender: true,
  props: {
    pageInfo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup(__props) {
    const props = __props;
    const { pageInfo } = vue.toRefs(props);
    const frontmatter = usePageFrontmatter();
    const headerStyle = vue.computed(() => {
      return pageInfo.value.bgImage ? {
        backgroundImage: `url(${withBase(pageInfo.value.bgImage.path)})`
      } : {};
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["page-header", { "use-image": vue.unref(pageInfo).bgImage }],
        style: headerStyle.value
      }, _attrs))}>`);
      if (vue.unref(pageInfo).bgImage && vue.unref(pageInfo).bgImage.mask) {
        _push(`<div class="header-mask" style="${serverRenderer.ssrRenderStyle({ background: vue.unref(pageInfo).bgImage.mask })}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="title">${serverRenderer.ssrInterpolate(vue.unref(pageInfo).title || vue.unref(frontmatter).title)}</h1>`);
      if (vue.unref(pageInfo).subtitle) {
        _push(`<h3 class="subtitle">${serverRenderer.ssrInterpolate(vue.unref(pageInfo).subtitle)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/PageHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var PageHeader = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "PageHeader.vue"]]);
const _sfc_main$4 = vue.defineComponent({
  __name: "Links",
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const pageInfo = vue.computed(() => {
      var _a;
      const info = themeLocale.value.pages && themeLocale.value.pages.links ? themeLocale.value.pages.links : {};
      if (info.title === void 0)
        info.title = (_a = themeLocale.value.pageText) == null ? void 0 : _a.links;
      return info;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(Common, _attrs, {
        page: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(PageHeader, { "page-info": pageInfo.value }, null, _parent2, _scopeId));
            _push2(`<div class="links-wrapper"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(frontmatter).links, (group, groupId) => {
              _push2(`<div class="link-section"${_scopeId}><h2${_scopeId}>${serverRenderer.ssrInterpolate(group.title)}</h2><div class="link-group"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(group.items, (item, itemId) => {
                _push2(`<div class="link-item"${_scopeId}><div class="content"${_scopeId}><a${serverRenderer.ssrRenderAttr("href", item.url)} target="_blank" rel="noopener noreferrer"${_scopeId}><img${serverRenderer.ssrRenderAttr("src", _ctx.$withBase(item.img))}${_scopeId}><span class="sitename"${_scopeId}>${serverRenderer.ssrInterpolate(item.sitename)}</span><div class="desc"${_scopeId}>${serverRenderer.ssrInterpolate(item.desc)}</div></a></div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              vue.createVNode(PageHeader, { "page-info": pageInfo.value }, null, 8, ["page-info"]),
              vue.createVNode("div", { class: "links-wrapper" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(frontmatter).links, (group, groupId) => {
                  return vue.openBlock(), vue.createBlock("div", {
                    key: `link-group-${groupId}`,
                    class: "link-section"
                  }, [
                    vue.createVNode("h2", null, vue.toDisplayString(group.title), 1),
                    vue.createVNode("div", { class: "link-group" }, [
                      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(group.items, (item, itemId) => {
                        return vue.openBlock(), vue.createBlock("div", {
                          key: `link-${itemId}`,
                          class: "link-item"
                        }, [
                          vue.createVNode("div", { class: "content" }, [
                            vue.createVNode("a", {
                              href: item.url,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, [
                              vue.createVNode("img", {
                                src: _ctx.$withBase(item.img)
                              }, null, 8, ["src"]),
                              vue.createVNode("span", { class: "sitename" }, vue.toDisplayString(item.sitename), 1),
                              vue.createVNode("div", { class: "desc" }, vue.toDisplayString(item.desc), 1)
                            ], 8, ["href"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/layouts/Links.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Links = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "Links.vue"]]);
var Links$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Links
}, Symbol.toStringTag, { value: "Module" }));
const Catalog = ({ headers, activeLink }) => {
  const router = vueRouter.useRouter();
  return vue.h("ul", {
    class: {
      catalog: true
    }
  }, headers.map((header) => {
    return vue.h("li", {
      class: {
        active: activeLink === header.slug,
        [`level-${header.level}`]: true,
        [`toc-link-${header.slug}`]: true
      },
      key: header.title,
      onClick: () => {
        if (router.currentRoute.value.hash !== `#${header.slug}`) {
          router.push(`#${header.slug}`);
        }
      }
    }, header.title);
  }));
};
Catalog.displayName = "Catalog";
Catalog.props = {
  headers: {
    type: Object,
    required: true
  },
  activeLink: {
    type: String,
    default: ""
  }
};
const catalogTopAbsolute = 40;
const catalogTopFixed = 80;
const _sfc_main$3 = vue.defineComponent({
  __name: "Post",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const themeLocale = useThemeLocaleData();
    const router = vueRouter.useRouter();
    const scrollPromise2 = useScrollPromise();
    const onBeforeEnter = scrollPromise2.resolve;
    const onBeforeLeave = scrollPromise2.pending;
    const shoudleShowCatalog = useCatalog();
    const pageHeaders = vue.computed(
      () => shoudleShowCatalog.value ? page.value.headers : []
    );
    const flattenHeaders = (item) => {
      return item.children.length > 0 ? [item].concat(...item.children.map(flattenHeaders)) : item;
    };
    const headers = vue.computed(
      () => [].concat(...pageHeaders.value.map(flattenHeaders))
    );
    const state = vue.reactive({
      headerHeight: 0,
      screenWidth: 0,
      catalogTop: 0,
      activeLink: "",
      isFixed: false
    });
    const handleScroll = () => {
      for (let i = headers.value.length - 1; i >= 0; i--) {
        const slug = headers.value[i].slug;
        const slugElement = document.querySelector(`#${slug}`);
        const headerTop = slugElement ? slugElement.getBoundingClientRect().top : 0;
        if (headerTop <= 100) {
          state.activeLink = slug;
          break;
        }
      }
      const currentTop = window.pageYOffset;
      if (currentTop > state.headerHeight + catalogTopAbsolute - catalogTopFixed) {
        state.isFixed = true;
        state.catalogTop = catalogTopFixed;
      } else {
        state.isFixed = false;
        state.catalogTop = state.headerHeight + catalogTopAbsolute;
      }
    };
    const resetCatalogPosition = () => {
      const postHeader = document.querySelector(".post-header");
      state.headerHeight = postHeader ? postHeader.offsetHeight : 0;
      state.screenWidth = document.body.clientWidth;
      state.catalogTop = state.headerHeight + catalogTopAbsolute;
    };
    let unregisterRouterHook;
    vue.onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      resetCatalogPosition();
      window.onresize = () => {
        return (() => {
          resetCatalogPosition();
          handleScroll();
        })();
      };
      unregisterRouterHook = router.afterEach(() => {
        resetCatalogPosition();
      });
    });
    vue.onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
      unregisterRouterHook();
    });
    const { post } = useBlog();
    const pagerData = vue.computed(() => {
      if (!post.value)
        return {};
      const next = post.value.info.next;
      if (next)
        next.text = themeLocale.value.postNext;
      const prev = post.value.info.prev;
      if (prev)
        prev.text = themeLocale.value.postPrev;
      return {
        next,
        prev
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(Common, _attrs, {
        page: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${serverRenderer.ssrRenderClass([{ "show-catalog": vue.unref(shoudleShowCatalog) }, "post-wrapper"])}"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(ArticleHeader, {
              style: vue.unref(page).title ? null : { display: "none" },
              class: "post-header"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(Page, {
              key: vue.unref(page).path,
              class: "post-content"
            }, {
              bottom: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (pagerData.value.next || pagerData.value.prev) {
                    _push3(serverRenderer.ssrRenderComponent(Pager, { data: pagerData.value }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    pagerData.value.next || pagerData.value.prev ? (vue.openBlock(), vue.createBlock(Pager, {
                      key: 0,
                      data: pagerData.value
                    }, null, 8, ["data"])) : vue.createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (vue.unref(shoudleShowCatalog)) {
              _push2(serverRenderer.ssrRenderComponent(vue.unref(Catalog), {
                headers: headers.value,
                "active-link": state.activeLink,
                class: { fixed: state.isFixed },
                style: { top: `${state.catalogTop}px` }
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode(vue.Transition, {
                name: "fade-slide-y",
                mode: "out-in",
                onBeforeEnter: vue.unref(onBeforeEnter),
                onBeforeLeave: vue.unref(onBeforeLeave)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode("div", {
                    class: ["post-wrapper", { "show-catalog": vue.unref(shoudleShowCatalog) }]
                  }, [
                    vue.withDirectives(vue.createVNode(ArticleHeader, { class: "post-header" }, null, 512), [
                      [vue.vShow, vue.unref(page).title]
                    ]),
                    (vue.openBlock(), vue.createBlock(Page, {
                      key: vue.unref(page).path,
                      class: "post-content"
                    }, {
                      bottom: vue.withCtx(() => [
                        pagerData.value.next || pagerData.value.prev ? (vue.openBlock(), vue.createBlock(Pager, {
                          key: 0,
                          data: pagerData.value
                        }, null, 8, ["data"])) : vue.createCommentVNode("", true)
                      ]),
                      _: 1
                    })),
                    vue.unref(shoudleShowCatalog) ? (vue.openBlock(), vue.createBlock(vue.unref(Catalog), {
                      key: 0,
                      headers: headers.value,
                      "active-link": state.activeLink,
                      class: { fixed: state.isFixed },
                      style: { top: `${state.catalogTop}px` }
                    }, null, 8, ["headers", "active-link", "class", "style"])) : vue.createCommentVNode("", true)
                  ], 2)
                ]),
                _: 1
              }, 8, ["onBeforeEnter", "onBeforeLeave"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/layouts/Post.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Post = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "Post.vue"]]);
var Post$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Post
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = vue.defineComponent({
  __name: "TagList",
  __ssrInlineRender: true,
  props: {
    currentTag: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    vueRouter.useRouter();
    const tagMap = useTagMap();
    const { tagsWithColor } = useTags();
    const { posts } = useBlog();
    const tags = vue.computed(() => {
      return [
        {
          name: themeLocale.value.showAllTagsText,
          path: tagMap.value.path,
          tagColor: null,
          pages: []
        },
        ...tagsWithColor.value
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      serverRenderer.ssrRenderList(tags.value, (item, index2) => {
        _push(`<span class="${serverRenderer.ssrRenderClass([[
          item.name === __props.currentTag && "active",
          item.path === vue.unref(tagMap).path && "tag-all"
        ], "article-tag"])}" style="${serverRenderer.ssrRenderStyle([item.tagColor ? { backgroundColor: item.tagColor } : {}])}">${serverRenderer.ssrInterpolate(item.name)} `);
        if (item.path == vue.unref(tagMap).path) {
          _push(`<sup>${serverRenderer.ssrInterpolate(vue.unref(posts).length)}</sup>`);
        } else {
          _push(`<sup>${serverRenderer.ssrInterpolate(item.pages.length)}</sup>`);
        }
        _push(`</span>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/TagList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var TagList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "TagList.vue"]]);
const _sfc_main$1 = vue.defineComponent({
  __name: "TagPostList",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<!--[-->`);
      serverRenderer.ssrRenderList(__props.data, (item, index2) => {
        _push(`<section><span class="year">${serverRenderer.ssrInterpolate(item.year)}</span><!--[-->`);
        serverRenderer.ssrRenderList(item.data, (subItem, subIndex) => {
          _push(`<div class="item">`);
          _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
            to: subItem.path
          }, {
            default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p class="title"${_scopeId}>${serverRenderer.ssrInterpolate(subItem.info.title)}</p>`);
                if (subItem.info.subtitle) {
                  _push2(`<p class="subtitle"${_scopeId}>${serverRenderer.ssrInterpolate(subItem.info.subtitle)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  vue.createVNode("p", { class: "title" }, vue.toDisplayString(subItem.info.title), 1),
                  subItem.info.subtitle ? (vue.openBlock(), vue.createBlock("p", {
                    key: 0,
                    class: "subtitle"
                  }, vue.toDisplayString(subItem.info.subtitle), 1)) : vue.createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<hr></div>`);
        });
        _push(`<!--]--></section>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/components/TagPostList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var TagPostList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "TagPostList.vue"]]);
const _sfc_main = vue.defineComponent({
  __name: "Tags",
  __ssrInlineRender: true,
  setup(__props) {
    const route = vueRouter.useRoute();
    const themeLocale = useThemeLocaleData();
    const { posts } = useBlog();
    const { tags } = useTags();
    const currentTag = vue.computed(() => {
      const tagName = tags.value.find((tag) => tag.path === route.path);
      return tagName ? tagName.name : themeLocale.value.showAllTagsText;
    });
    const filteredPosts = vue.computed(() => {
      const tag = currentTag.value === themeLocale.value.showAllTagsText ? "" : currentTag.value;
      return getPostsByYear(filterPostsByTag(posts.value, tag));
    });
    const pageInfo = vue.computed(() => {
      var _a;
      const info = themeLocale.value.pages && themeLocale.value.pages.tags ? themeLocale.value.pages.tags : {};
      if (info.title === void 0)
        info.title = (_a = themeLocale.value.pageText) == null ? void 0 : _a.tags;
      return info;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(Common, _attrs, {
        page: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(PageHeader, { "page-info": pageInfo.value }, null, _parent2, _scopeId));
            _push2(`<div class="tags-wrapper"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(TagList, { "current-tag": currentTag.value }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(TagPostList, { data: filteredPosts.value }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode(PageHeader, { "page-info": pageInfo.value }, null, 8, ["page-info"]),
              vue.createVNode("div", { class: "tags-wrapper" }, [
                vue.createVNode(TagList, { "current-tag": currentTag.value }, null, 8, ["current-tag"]),
                vue.createVNode(TagPostList, { data: filteredPosts.value }, null, 8, ["data"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.3.3_sass@1.77.6_webpack@5.92.1__typescript@5.5.3/node_modules/vuepress-theme-gungnir/lib/client/layouts/Tags.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Tags = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Tags.vue"]]);
var Tags$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Tags
}, Symbol.toStringTag, { value: "Module" }));
exports.createVueApp = createVueApp;
