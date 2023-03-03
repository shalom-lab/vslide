import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routes = [
  {
    path: "/dataviz/",
    name: "chart",
    component: () => import("../views/Chart.vue")
  },
  {
    path: "/doc",
    name: "doc",
    component: () => import("../views/Doc.vue"),
    meta: { title: "微思文稿 | 文档模式", needLogin: false },
  },
  {
    path: "/edit",
    name: "edit",
    component: () => import("../views/Edit.vue"),
    meta: { title: "微思文稿 | 编辑模式", needLogin: false },
  },
  {
    path: "/view",
    name: "view",
    component: () => import("../views/View.vue"),
    meta: { title: "微思文稿 | 浏览模式", needLogin: false },
  },
  {
    path: "/play",
    name: "play",
    component: () => import("../views/Play.vue"),
    meta: { title: "微思文稿 | 放映模式", needLogin: false },
  }
];

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: process.env.IS_ELECTRON
    ? createWebHashHistory()
    : createWebHistory(),
  routes,
  mode: "history",
});


export default router;
