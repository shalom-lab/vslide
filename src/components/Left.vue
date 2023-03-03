<template>
  <grid-layout class="gridLayout" v-model:layout="layout" :col-num="1" :row-height="250/16*9" :is-draggable="true" :is-responsive="true" :is-resizable="false" :vertical-compact="true" :margin="[0, 5]" :use-css-transforms="true" :key="leftAreaKey">
    <grid-item v-for="slide in layout" class="gridItem" :class="[iActive.slide === slide.i ? 'actived' : '']" :x="slide.x" :y="slide.y" :w="slide.w" :h="slide.h" :i="slide.i" :key="slide.i">
      <div class="slideContent" @click="active(slide.i)" v-contextmenu:contextmenu-slide :style="{background:getBackground}">
        <div @contextmenu="active(slide.i)" style="width:100%;height:100%">
          <v-slide :slideContent="slide.slideContent" :height="540" />
        </div>
      </div>
    </grid-item>
  </grid-layout>
  <v-contextmenu ref="contextmenu-slide">
    <v-contextmenu-item @click="newSlide"><i class="iconfont icon-new" /> 新建幻灯片</v-contextmenu-item>
    <v-contextmenu-divider />
    <v-contextmenu-item @click="copySlide"><i class="iconfont icon-copy" /> 复制幻灯片</v-contextmenu-item>
    <v-contextmenu-divider />
    <v-contextmenu-item @click="deleteSlide" v-on:keyup.delete="deleteSlide"><i class="iconfont icon-delete" /> 删除幻灯片</v-contextmenu-item>
  </v-contextmenu>
</template>
<script>
import { provide } from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import useMessage from "@/hooks/useMessage";
import { GridLayout, GridItem } from "@/components/gridlayout.js";

export default {
  setup() {
    provide("previewdisabled", true);
    const message = useMessage();
    return {
      ...message,
    };
  },
  mounted() {
    document.onkeydown = (event) => {
      let key = window.event.keyCode;
      switch (key) {
        case 46: //delete
          //this.deleteSlide()
          break;
        case 40: //↓
          /*         case 32: //Space
        case 13: //Enter */
          /*         case 68: //D
        case 83: //S */
          this.next();
          break;
        case 38: //↑
          /*         case 87: //W
        case 65: //A */
          this.prev();
          break;
      }
    };
  },
  components: {
    //VSlide,
    GridLayout,
    GridItem,
  },
  computed: {
    ...mapState(["layout", "iActive", "iMax", "leftAreaKey"]),
    ...mapGetters([
      "activeSlide",
      "activeAtom",
      "indexActive",
      "activeSlideContent",
      "getBackground",
    ]),
  },
  methods: {
    ...mapMutations([
      "updateIActive",
      "addSlide",
      "removeSlide",
      "changeWorkingAreaKey",
    ]),
    next() {
      const nextY = this.layout[this.indexActive.slide].y + 1;
      const nextIndex = this.layout.map((slide) => slide.y).indexOf(nextY);
      if (nextIndex === -1) {
      } else {
        const nextI = String(this.layout[nextIndex].i);
        this.updateIActive({ slide: nextI, atom: -1 });
      }
    },
    prev() {
      const preY = this.layout[this.indexActive.slide].y - 1;
      const preIndex = this.layout.map((slide) => slide.y).indexOf(preY);
      if (preIndex === -1) {
      } else {
        const preI = String(this.layout[preIndex].i);
        this.updateIActive({ slide: preI, atom: -1 });
      }
    },
    active(i) {
      this.updateIActive({ slide: i, atom: -1 });
      this.changeWorkingAreaKey();
    },
    newSlide() {
      var blankSlide = {
        ...JSON.parse(JSON.stringify(this.activeSlide)),
        slideContent: [],
        i: String(this.iMax.slide),
        y: this.activeSlide.y + 0.5,
      };
      this.addSlide(blankSlide);
    },
    copySlide() {
      var copySlide = {
        ...JSON.parse(JSON.stringify(this.activeSlide)),
        i: String(this.iMax.slide),
        y: this.activeSlide.y + 0.5,
      };
      this.addSlide(copySlide);
    },
    deleteSlide() {
      if (this.layout[this.indexActive.slide].y) {
        const preY = this.layout[this.indexActive.slide].y - 1;
        const preIndex = this.layout.map((slide) => slide.y).indexOf(preY);
        const preI = String(this.layout[preIndex].i);
        ////console.log('删吧删吧preY-preI',preY,preI)
        this.removeSlide(this.indexActive.slide);
        this.updateIActive({ slide: preI, atom: -1 });
        window.dispatchEvent(new Event("resize"));
      } else this.info("请保留首张幻灯片");
    },
  },
  watch: {
    iMax: {
      deep: true,
      handler() {
        window.dispatchEvent(new Event("resize"));
      },
    },
  },
};
</script>

<style scoped>
.gridLayout {
  height: 100%;
  background-color: transparent;
  margin: 0px 10px;
  display: block;
}
.gridItem {
  background-color: rgb(255, 255, 255);
  /* border: 1px solid rgb(198,198,198); */
  box-shadow: 1px 1px 1px #888888;
  outline: 2 px solid rgba(226, 211, 226, 0.705);
}
.gridItem:hover {
  padding: 0px;
  /* border: 1px solid rgb(221, 104, 172); */
  outline: 1px solid rgba(221, 83, 115, 0.705);
}
.actived,
.actived:hover {
  padding: 0px;
  outline: 2px solid rgb(230, 28, 78);
}
.slideContent {
  width: 400%;
  height: 400%;
  transform: scale(0.25);
  transform-origin: 0 0;
}
</style>

