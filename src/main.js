import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import {
  // create naive ui
  create,
  // component
  NButton,
  NButtonGroup,
  NColorPicker,
  NForm,
  NFormItem,
  NIcon,
  NInput,
  NImage,
  NImageGroup,
  NSpace,
  NTag,
  NDataTable,
  NDrawer,
  NDrawerContent,
  NCard,
  NSwitch,
  NCarousel,
  NInputNumber,
  NSelect,
  NUpload,
  NUploadDragger,
  NMessageProvider,
  NAnchor,
  NAnchorLink,
  NScrollbar,
  NTabs,
  NTable,
  NTabPane,
  NPopselect,
  NGrid,
  NGridItem,
  NInputGroup,
  NInputGroupLabel,
  NDynamicInput,
  NCollapse,
  NCollapseItem,
  NDivider,
  NBlockquote,
  NRadio,
  NDropdown,
  NModal,
  NDynamicTags,
  NCheckbox,
  NCheckboxGroup,
  NDialog,
  NDialogProvider,
  NFormItemRow,
  NLayout,
  NLayoutSider,
  NMenu,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NGradientText,
  NAvatar,
  NConfigProvider,
  NPopover,
  NThemeEditor,
  NProgress,
  NSlider,
  NList,
  NListItem,
  NEmpty,
  NBadge,
  NDatePicker,
  NNotificationProvider,
} from "naive-ui";

const naive = create({
  components: [
    NButton,
    NButtonGroup,
    NColorPicker,
    NIcon,
    NForm,
    NFormItem,
    NInput,
    NImage,
    NImageGroup,
    NSpace,
    NTag,
    NDataTable,
    NDrawer,
    NDrawerContent,
    NCard,
    NSwitch,
    NCarousel,
    NInputNumber,
    NSelect,
    NUpload,
    NUploadDragger,
    NMessageProvider,
    NAnchor,
    NAnchorLink,
    NScrollbar,
    NTabs,
    NTable,
    NTabPane,
    NPopselect,
    NGrid,
    NGridItem,
    NInputGroup,
    NInputGroupLabel,
    NDynamicInput,
    NCollapse,
    NCollapseItem,
    NDivider,
    NBlockquote,
    NRadio,
    NDropdown,
    NModal,
    NDataTable,
    NDynamicTags,
    NTag,
    NCheckbox,
    NCheckboxGroup,
    NDialog,
    NDialogProvider,
    NFormItemRow,
    NLayoutSider,
    NLayout,
    NMenu,
    NLayoutContent,
    NLayoutFooter,
    NLayoutHeader,
    NGradientText,
    NAvatar,
    NConfigProvider,
    NMessageProvider,
    NNotificationProvider,
    NPopover,
    NThemeEditor,
    NProgress,
    NSlider,
    NList,
    NListItem,
    NEmpty,
    NBadge,
    NDatePicker,
  ],
});

import "vfonts/Lato.css";
import "vfonts/FiraCode.css";

import "./assets/iconfont/iconfont.js";
import "./assets/iconfont/iconfont.css";

import contextmenu from "v-contextmenu";
import "v-contextmenu/dist/themes/default.css";

//nprogress
import NP from "nprogress";
import "nprogress/nprogress.css"; //这个样式必须引入
NP.inc(0.2);
NP.configure({ easing: "ease", speed: 500, showSpinner: false });
router.beforeEach((to, from, next) => {
  NP.start();
  if(to.meta.needLogin && !store.state.loginState){
    next('./chart')
  } else {
    next()
  }
});

router.afterEach((to, from) => {
  NP.done();
  document.title = to.meta.title || "VSlide-微思文稿";
});

import VSlide from "@/components/VSlide.vue";
import VSlidesView from "@/components/VSlidesView.vue";
import VSlidesPlay from "@/components/VSlidesPlay.vue";

//cloudbase
import Cloudbase from "cloudbase-vue-next";

//axios
import axios from "axios";
import VueAxios from "vue-axios";

//echarts
import VueECharts from "vue-echarts";

createApp(App)
  .use(store)
  .use(router)
  .use(naive)
  .use(contextmenu)
  .use(Cloudbase, { env: "cloud1-6gje6dbjbdbca85f" })
  .use(VueAxios, axios)
  .component("v-slide", VSlide)
  .component("v-slides-view", VSlidesView)
  .component("v-slides-play", VSlidesPlay)
  .component("v-chart", VueECharts)
  .mount("#app");
