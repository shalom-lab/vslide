<template>
  <div class="workingslide" :style="{background: getBackground}" :key="workingAreaKey">
    <grid-layout class="gridlayout" :layout="slideContent" :col-num="18" :row-height="rowHeight" :is-draggable="true" :is-resizable="true" :vertical-compact="false" :preventCollision="false" :margin="[5, 5]" :use-css-transforms="false">
      <grid-item v-for="atom in slideContent" class="insideGridItem" :x="atom.x" :y="atom.y" :w="atom.w" :h="atom.h" :i="atom.i" :key="atom.i" :static="atom.static" @moved="layoutChange" @resized="layoutChange" dragAllowFrom=".dragable">
        <div class="insideContent" style="height:100%" @dblclick="fixedAtom" @click="atomActive(atom.i)" @contextmenu="atomActive(atom.i)">
          <div class="dragable"></div>
          <div class="nodrag" v-contextmenu:contextmenu-atom v-bind:style="{ 'border-width': atom.atomBorder.width  + 'px', 'border-style': atom.atomBorder.type, 'border-color': atom.atomBorder.color, 'border-radius': atom.atomBorder.radius + 'px', 'box-sizing': 'border-box' }">
            <atom :atomType="atom.atomType" :atomContent="atom.atomContent"></atom>
          </div>
        </div>
      </grid-item>
    </grid-layout>
  </div>
  <v-contextmenu ref="contextmenu-atom">
    <v-contextmenu-item @click="edit('sheetData')" :disabled="disabled.sheetData || forbidden"><i class="iconfont icon-data" /> 数据</v-contextmenu-item>
    <v-contextmenu-divider />
    <v-contextmenu-item @click="edit('atomContent')" :disabled="disabled.atomContent || forbidden"><i class="iconfont icon-style" /> 样式</v-contextmenu-item>
    <v-contextmenu-divider />
    <v-contextmenu-item @click="edit('atomBorder')" :disabled="forbidden"><i class="iconfont icon-border" /> 边框</v-contextmenu-item>
    <v-contextmenu-divider />
    <v-contextmenu-item @click="edit('atomAnimation')" :disabled="forbidden"><i class="iconfont icon-animate" /> 动画</v-contextmenu-item>
    <v-contextmenu-divider />
    <v-contextmenu-item @click="fixedAtom()" :disabled="forbidden"><i class="iconfont icon-fix" /> 固定</v-contextmenu-item>
    <v-contextmenu-divider />
    <v-contextmenu-item @click="copyAtom()" :disabled="forbidden"><i class="iconfont icon-copy" /> 复制</v-contextmenu-item>
    <v-contextmenu-divider />
    <v-contextmenu-item @click="deleteAtom()"><i class="iconfont icon-delete" /> 删除</v-contextmenu-item>
    <v-contextmenu-divider />
    <v-contextmenu-item @click="saveAtom()" :disabled="forbidden"><i class="iconfont icon-save" /> 保存</v-contextmenu-item>
  </v-contextmenu>
  <edit-atom-content ref="atomContent" :initAtom="activeAtom" v-if="enableEditAtomContent" />
  <edit-atom-border ref="atomBorder" :initAtom="activeAtom" v-if="enableEditAtomBorder" />
  <edit-atom-animation ref="atomAnimation" :initAtom="activeAtom" v-if="enableEditAtomAnimation" />
  <sheet-data ref="sheetData" :initAtom="activeAtom" v-if="enableEditSheetData" />
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import Atom from "@/components/Atom/Atom.vue";
import EditAtomBorder from "@/components/Edit/EditAtomBorder.vue";
import EditAtomAnimation from "@/components/Edit/EditAtomAnimation.vue";
import EditAtomContent from "@/components/Edit/EditAtomContent.vue";
import SheetData from "@/components/Edit/Share/SheetData.vue";
import { GridLayout, GridItem } from "@/components/gridlayout.js";
import { provide } from "vue";
import { nanoid } from "nanoid";
import useMessage from "@/hooks/useMessage";

export default {
  setup() {
    const message = useMessage();
    provide("editMode", true);
    provide("menuValue", "layout");
    return {
      ...message,
    };
  },
  components: {
    Atom,
    EditAtomContent,
    EditAtomBorder,
    EditAtomAnimation,
    SheetData,
    GridLayout,
    GridItem,
  },
  data() {
    return {
      refresh: {
        atomContent: false,
        atomBorder: false,
        atomAnimation: false,
        sheetData: false,
      },
      disabled: {
        sheetData: true,
        atomContent: true,
      },
    };
  },
  props: {
    slideContent: Array,
    rowHeight: Number,
  },
  computed: {
    ...mapState([
      "layout",
      "iActive",
      "iMax",
      "workingAreaKey",
      "document",
      "store",
      "background",
      "gallery",
      "account",
    ]),
    ...mapGetters([
      "activeSlide",
      "activeAtom",
      "indexActive",
      "activeSlideContent",
      "getBackground",
      "sortLayout",
      "getFileList",
      "getLocalSlideContent",
    ]),
    activeSlide() {
      return this.iActive.slide;
    },
    enableEditAtomContent() {
      return this.refresh.atomContent && this.activeAtom;
    },
    enableEditAtomBorder() {
      return this.refresh.atomBorder && this.activeAtom;
    },
    enableEditAtomAnimation() {
      return this.refresh.atomAnimation && this.activeAtom;
    },
    forbidden() {
      if (this.activeAtom) {
        return this.activeAtom.super && this.account.role === "user";
      } else {
        return true;
      }
    },
    enableEditSheetData() {
      return (
        this.refresh.sheetData &&
        this.activeAtom &&
        ["echart", "tables"].includes(this.activeAtom.atomType) &&
        this.activeAtom.atomContent.detail.sheetData &&
        !this.forbidden
      );
    },
  },
  methods: {
    ...mapMutations([
      "updateIActive",
      "addAtom",
      "removeAtom",
      "fixedAtom",
      "changeWorkingAreaKey",
      "changeDocumentFileList",
      "addLocalAtom",
    ]),
    edit(editWhat) {
      this.refresh[editWhat] = false;
      this.$nextTick(() => {
        this.refresh[editWhat] = true;
      });
    },
    layoutChange: function (i, newX, newY) {
      //console.log("layoutChange", i, newX, newY);
      //this.updateIActive({ slide: this.iActive.slide, atom: i });
    },
    atomActive(i) {
      this.updateIActive({ slide: this.iActive.slide, atom: i });
    },
    copyAtom() {
      var copyAtom = JSON.parse(
        JSON.stringify({
          // cut off link
          ...this.activeSlideContent[this.indexActive.atom],
          //...this.activeSlideContent[this.indexActive.atom],
          i: String(this.iMax.atom),
          y: this.activeSlideContent[this.indexActive.atom].y + 1,
        })
      );
      if (copyAtom.atomContent.atomName === "text-md")
        copyAtom.atomContent.detail.editorId = nanoid(10);
      this.addAtom(copyAtom);
      window.dispatchEvent(new Event("resize"));
    },
    deleteAtom(i) {
      this.removeAtom();
    },
    //保存至local Layout
    saveAtom() {
      var atom = JSON.parse(JSON.stringify(this.activeAtom));
      var copyatom = {
        ...atom,
        i: String(Date.parse(Date())),
        x: 0,
        w: 6,
        h: 5,
        static: false,
      };
      if (copyatom.atomContent.atomName === "text-md")
        copyatom.atomContent.detail.editorId = nanoid(10);
      this.addLocalAtom({ atom: copyatom });
      this.success("已保存至我的图表");
    },
    //save IndexDB
    saveIndexDB() {
      const fileList = JSON.parse(JSON.stringify(this.getFileList));
      fileList[this.document.activeIndex].slides = JSON.parse(
        JSON.stringify(this.sortLayout)
      );
      fileList[this.document.activeIndex].background = JSON.parse(
        JSON.stringify(this.background)
      );
      fileList[this.document.activeIndex].getBackground = JSON.parse(
        JSON.stringify(this.getBackground)
      );
      this.changeDocumentFileList({ fileList });
      //save
      const slideContent = JSON.parse(
        JSON.stringify(this.getLocalSlideContent)
      );
      this.store.set("slideContent", slideContent, (err) => {
        if (err) {
          this.error("保存slideContent出错");
          throw err;
        }
      });
      this.store.set("fileList", fileList, (err) => {
        if (err) {
          this.error("保存fileList出错");
          throw err;
        }
      });
    },
  },
  watch: {
    activeAtom: {
      deep: true,
      handler(newVal) {
        if (newVal) {
          this.disabled.sheetData = !(
            ["echart", "tables"].indexOf(newVal.atomType) > -1
          );
          this.disabled.atomContent =
            ["text-md", "simple-table"].indexOf(newVal.atomContent.atomName) >
            -1;
        }
      },
    },
    "iActive.slide"() {
      this.changeWorkingAreaKey();
    },
    workingAreaKey() {
      this.refresh.atomContent = false;
      this.refresh.atomBorder = false;
      this.refresh.atomAnimation = false;
      this.refresh.sheetData = false;
    },
  },
  unmounted() {
    this.saveIndexDB();
  },
};
</script>

<style scoped>
.workingslide {
  border: 0px solid red;
  width: 100%;
  height: 100%;
  outline: 1px solid rgba(119, 119, 119, 0.322);
}

.gridlayout {
  background-color: transparent;
  width: 100%;
  height: 100%;
}
.insideGridItem {
  box-sizing: border-box;
}
.insideGridItem:hover {
  outline: 1px solid rgb(119, 119, 119);
}
.dragable {
  height: 5px;
  background-color: transparent;
}
.dragable:hover {
  background-color: rgb(177, 177, 191);
}
.nodrag {
  height: calc(100% - 5px);
  overflow: hidden;
}
</style>
