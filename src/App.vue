<template>
  <n-notification-provider>
    <n-message-provider>
      <n-config-provider :theme-overrides="themeOverrides">
        <!-- <n-theme-editor> -->
          <n-dialog-provider>
            <router-view />
          </n-dialog-provider>
        <!-- </n-theme-editor> -->
      </n-config-provider>
    </n-message-provider>
  </n-notification-provider>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { NThemeEditor } from "naive-ui";
import themeOverrides from "./naive-ui.json";
const IdbKvStore = require("idb-kv-store");
//import useMessage from "@/hooks/useMessage";

export default {
  setup() {
    /* const message = useMessage();
    return { ...message }; */
  },
  components: {
    NThemeEditor,
  },
  async mounted() {
    var store = new IdbKvStore("localStorage");
    this.changeStore({ store });
    const that = this;
    store.get("slideContent", (err, obj) => {
      if (err) throw err;
      that.initLocalAtom({ slideContent: obj || [] });
    });
    store.get("fileList", (err, obj) => {
      if (err) throw err;
      that.changeDocumentFileList({ fileList: obj || [] });
    });
  },
  methods: {
    ...mapMutations([
      "changeStore",
      "initLocalAtom",
      "changeDocumentFileList",
      "changeInnersize",
      "changeLoginState",
      "initAccount",
      "initSharedFileList",
    ]),
    getHeight() {
      this.changeInnersize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  },
  created() {
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
  },
  destroyed() {
    window.removeEventListener("resize", this.getHeight);
  },
  data() {
    return {
      themeOverrides,
    };
  },
  computed: {
    ...mapState(["loginState"]),
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  user-select: none;
}
* {
  margin: 0;
}
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
::-webkit-scrollbar-track {
  background-color: rgb(219, 219, 219);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 4px;
  border: solid 1px rgb(219, 219, 219);
}
::-webkit-scrollbar-thumb:hover {
  border: solid 1px rgb(171, 171, 171);
}
.vue-grid-item.vue-grid-placeholder {
  background: rgb(166, 177, 182) !important;
  opacity: 0.3;
  transition-duration: 1000ms;
  z-index: 2;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.v-contextmenu {
  font-family: Georgia, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, 微软雅黑, Arial, sans-serif;
  font-size: 12px;
  font-weight: 500;
}
.v-contextmenu-item {
  color: #7d7c7c;
  padding: 3px 8px;
  user-select: none;
}
</style>
