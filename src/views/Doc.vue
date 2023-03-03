<template>
  <div class="doc" :style="{background:getBackground}" @contextmenu="handleContextMenu">
    <div class="slide" v-for="(slide, i) in sortLayout" :key="i" :style="{width: '100%',height: innerSize.height/1+ 'px'}">
      <v-slide :slideContent="slide.slideContent" :height="innerSize.height/1">
      </v-slide>
      <span class="footer">{{i+1}}/{{this.sortLayout.length}}</span>
    </div>
  </div>
  <n-dropdown placement="bottom-start" trigger="manual" :x="x" :y="y" :options="options" :show="showDropdown" :on-clickoutside="onClickoutside" @select="handleSelect" />
</template>

<script>
import VSlide from "@/components/VSlide.vue";
import { mapGetters, mapState } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    VSlide,
  },
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
      { label: "放映模式", key: "play" },
      { label: "浏览模式", key: "view" },
      { label: "文稿模式", key: "doc", disabled: true },
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

<style scoped>
.doc {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
}
.slide {
  padding-top: 20px;
  box-sizing: border-box;
  box-shadow: -2px -2px 5px rgba(243, 245, 247, 0.863);
  box-shadow: 2px 2px 5px rgba(112, 128, 144, 0.493);
  position: relative;
}
.footer {
  position: absolute;
  bottom: 5px;
  color: silver;
}
</style>


