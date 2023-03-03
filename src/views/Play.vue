<template>
  <v-slides-play :slides="sortLayout" :background="getBackground" :height="innerSize.height" @contextmenu="handleContextMenu" />
  <n-dropdown placement="bottom-start" trigger="manual" :x="x" :y="y" :options="options" :show="showDropdown" :on-clickoutside="onClickoutside" @select="handleSelect" />
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  computed: {
    ...mapState(["innerSize"]),
    ...mapGetters(["sortLayout", "getBackground"]),
  },
  setup() {
    //router
    const router = useRouter();
    const push = (name) => {
      router.push({ name });
    };
    const options = [
      { label: "编辑模式", key: "edit" },
      { label: "放映模式", key: "play", disabled: true },
      { label: "浏览模式", key: "view" },
      { label: "文稿模式", key: "doc" },
      { label: "回到首页", key: "chart" },
    ];
    const modeRef = ref("play");
    const showDropdownRef = ref(false);
    const xRef = ref(0);
    const yRef = ref(0);
    return {
      options,
      showDropdown: showDropdownRef,
      x: xRef,
      y: yRef,
      mode: modeRef,
      handleSelect(key) {
        showDropdownRef.value = false;
        push(key);
      },
      handleContextMenu(e) {
        e.preventDefault();
        showDropdownRef.value = false;
        Vue.nextTick().then(() => {
          showDropdownRef.value = true;
          xRef.value = e.clientX;
          yRef.value = e.clientY;
        });
      },
      onClickoutside() {
        showDropdownRef.value = false;
      },
    };
  },
};
</script>



