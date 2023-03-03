<template>
  <n-layout>
    <n-layout-header>
      <div class="header">
        <div class="logo">
          <img style="width:30px;height:30px;justify-self:end;padding-right:10px" src="logo.png" />
          <strong style="justify-self:start;font-size:16px">微思文稿</strong>
        </div>
        <n-menu v-model:value="navValue" mode="horizontal" :options="navOptions" @update:value="changeNav" />
      </div>
    </n-layout-header>
    <n-layout has-sider :content-style="{height: innerSize.height-64+'px'}">
      <n-layout-sider :collapsed-width="64" :width="220" show-trigger content-style="background-color:#f7f8fa" bordered collapse-mode="width" :collapsed="collapsed" @collapse="collapsed = true" @expand="collapsed = false">
        <div class="sidebar" :style="{height:innerSize.height-94+'px'}">
          <n-menu :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="20" :options="menuOptions" v-model:value="currentChartmenu" />
        </div>
        <a href="https://vslide.cn" target="_blank" v-if="!collapsed">
vslide.cn</a>
      </n-layout-sider>
      <n-layout content-style="padding: 0px;overflow-y: hidden">
        <div class="right">
          <component :is="currentChartmenu"></component>
        </div>
      </n-layout>
    </n-layout>
  </n-layout>
</template>
<script>
import {
  h,
  ref,
  reactive,
  defineComponent,
  provide,
  computed,
  watch,
  toRaw,
  markRaw,
} from "vue";
import { mapState, mapGetters, mapMutations, useStore } from "vuex";
import useMessage from "@/hooks/useMessage";

import TemplateLayout from "@/components/TemplateLayout.vue";
import LocalLayout from "@/components/LocalLayout.vue";
import AllSlides from "@/components/AllSlides.vue";


import { NIcon } from "naive-ui";
import {
  SettingsOutline,
  LogOutOutline,
  StatsChart,
  BookmarkOutline,
  AlbumsOutline,
  CloudDoneOutline,
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.getters.user);
    const currentChartmenu = ref(user.value ? "all-slides" : "template-layout");
    const message = useMessage();
    // menuOptions
    const menuOptions = reactive([
      {
        label: "模板图表",
        key: "template-layout",
        icon: renderIcon(StatsChart),
      },
      {
        label: "我的图表",
        key: "local-layout",
        icon: renderIcon(BookmarkOutline),
      },
      {
        key: "divider-1",
        type: "divider",
      },
      {
        label: "演示文稿",
        key: "all-slides",
        icon: renderIcon(AlbumsOutline)
      }
    ]);
    const navOptions = reactive([
      {
        label: () =>
          h(
            "a",
            {
              href: "https://vslide.cn",
              target: "_blank",
            },
            "文档"
          ),
        key: "docs",
      },
    ]);
    return {
      currentChartmenu,
      menuOptions,
      navValue: ref(""),
      navOptions,
      ...message,
      key: ref(0),
      collapsed: ref(false),
    };
  },
  components: {
    TemplateLayout,
    LocalLayout,
    AllSlides
  },
  data() {
    return {
      options: [
        {
          label: "账号设置",
          key: "account",
          disabled: false,
          icon: renderIcon(SettingsOutline),
        },
        { label: "退出登录", key: "logout", icon: renderIcon(LogOutOutline) },
      ],
      charts: [
        { label: "模板", key: "template-layout" },
        { label: "我的", key: "local-layout" },
        { label: "幻灯片", key: "all-slides" },
      ],
    };
  },
  props: {
    rowHeight: Number,
  },
  computed: {
    ...mapState([
      "atom",
      "iActive",
      "iMax",
      "workingAreaKey",
      "gallery",
      "loginState",
      "innerSize",
    ]),
    ...mapGetters([
      "activeSlide",
      "activeAtom",
      "indexActive",
      "activeSlideContent",
      "getBackground",
      "user",
    ]),
    getLoginState() {
      return this.$store.state.loginState;
    },
    nickName() {
      return this.user && this.user.nickName != "" ? this.user.nickName : "Hi";
    },
  },
  methods: {
    ...mapMutations([
      "initLocalAtom",
      "changeStore",
      "changeLoginState",
      "changeDocumentFileList",
      "initAccount",
      "initSharedFileList",
    ]),
    //navChange
    changeNav(key, item) {
      switch (key) {
        case "docs":
          /* window.location.href =
            "https://vslide.cn/docs/"; */
          break;
        default:
          break;
      }
    },
  },
  watch: {
  },
};
</script>

<style scoped>
.header {
  height: 64px;
  display: grid;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(119, 119, 119, 0.322);
  grid-template-columns: 220px 1fr 120px;
  align-items: center;
}
.logo {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  justify-items: center;
}
.chart {
  width: 100%;
  height: 100%;
}
.right {
  width: 100%;
  height: 100%;
}
.login {
  margin-right: 15px;
}
::-webkit-scrollbar {
  display: none;
}
div.slidebar {
  display: grid;
  height: 100%;
  grid-template-rows: 1fr 20px;
}
a {
  text-decoration: none;
  color:#ACAEB0
}
</style>
