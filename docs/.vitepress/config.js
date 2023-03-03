import atomSidebar from "./atomSidebar";
import docSidebar from "./docSidebar";
import ideaSidebar from "./ideaSidebar";
import pricingSidebar from "./pricingSidebar";

export default {
  base: "/",
  outDir: "./.vitepress/docs",
  title: "微思文稿", // 所有文档的浏览器标签title
  description: "零代码零基础免费制作数据可视化图表,在线图表制作", // 会渲染成<meta>标签，SEO用
  head: [
    ['link', { rel:'icon',href: 'https://vslide.cn/logo.ico' }],
    ['meta', { name:'keywords',content: 'echarts图表制作,可视化工具,在线图表制作,数据可视化' }],
    ['script',{async:'',src:'https://www.googletagmanager.com/gtag/js?id=G-JVVSLFR4Z3'}],
    ['script',{src:'https://vslide.cn/google.js'}]    
  ],
  themeConfig: {
    siteTitle: "VSlide微思文稿",
    logo: "/logo.png",

    nav: [
      { text: "立即使用", link: "https://vslide.cn/dataviz/" },
      { text: "文档", link: "/doc/", activeMatch: "/doc/" },
      { text: "组件", link: "/atom/", activeMatch: "/atom/" },
      { text: "原理", link: "/idea/", activeMatch: "/idea/" },
      { text: "文章", link: "/article/", activeMatch: "/article/" },
      { text: "文稿", link: "/file/", activeMatch: "/file/" },
      { text: "实操教程", link: "/guide/", activeMatch: "/guide/" },
      { text: "价格", link: "/pricing/", activeMatch: "/pricing/" },
      { text: "关于", link: "/about/", activeMatch: "/about/" },
    ],

    sidebar: {
      "/doc/": docSidebar,
      "/atom/": atomSidebar,
      "/idea/": ideaSidebar,
      "/pricing/": pricingSidebar,
    },

    socialLinks: [
    ],

    footer: {
      message: "<a href='https://vslide.cn'>微思文稿</a>(vslide.cn)-免费好用的数据可视化工具",
      copyright: "Copyright © 2022-present VSlide <a href='https://beian.miit.gov.cn' target='_blank'>豫ICP备2022018163号-2</a> 友情链接: <a target='_blank' href='https://rlearner.com'>R语言学习</a> <a target='_blank' href='https://blog.rlearner.com'>博客</a>",
    },
    docFooter: {
      prev: "上一节",
      next: "下一节",
    },
    outlineTitle: '目录'
  },
};
