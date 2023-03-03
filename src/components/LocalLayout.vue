<template>
  <div class="workingslide" style="overflow-y:scroll">
    <grid-layout class="gridlayout" :layout="getLocalSlideContent" :col-num="18" :row-height="40" :is-draggable="true" :is-resizable="true" :vertical-compact="true" :preventCollision="false" :margin="[20, 20]" :use-css-transforms="false">
      <grid-item v-for="(atom) in getLocalSlideContent" class="insideGridItem" :x="atom.x" :y="atom.y" :w="atom.w" :h="atom.h" :i="atom.i" :key="atom.i" :static="atom.static" dragAllowFrom=".dragable">
        <div class="insideContent" style="height:100%" @dblclick="fixedAtom" @click="atomActive(atom.i)" @contextmenu="atomActive(atom.i)">
          <div class="dragable"></div>
          <div class="nodrag" v-contextmenu:contextmenu-atom>
            <atom :atomType="atom.atomType" :atomContent="atom.atomContent"></atom>
          </div>
        </div>
      </grid-item>
    </grid-layout>
  </div>
  <v-contextmenu ref="contextmenu-atom">
    <v-contextmenu-item @click="edit('sheetData')" :disabled="disabled.sheetData"><i class="iconfont icon-data" /> 数据</v-contextmenu-item>
    <v-contextmenu-divider />
    <v-contextmenu-item @click="edit('atomContent')" :disabled="disabled.atomContent"><i class="iconfont icon-style" /> 样式</v-contextmenu-item>
    <v-contextmenu-divider />
    <v-contextmenu-item @click="copy()"><i class="iconfont icon-copy" /> 复制</v-contextmenu-item>
    <v-contextmenu-divider />
    <v-contextmenu-item @click="remove()"><i class="iconfont icon-delete" /> 删除</v-contextmenu-item>
    <!-- <v-contextmenu-divider />
    <v-contextmenu-item @click="share()"><i class="iconfont icon-peizhi" /> 分享</v-contextmenu-item> -->
  </v-contextmenu>
  <edit-atom-content ref="atomContent" :initAtom="editingAtom" v-if="refresh.atomContent" />
  <sheet-data ref="sheetData" :initAtom="editingAtom" v-if="refresh.sheetData" />

</template>
<script>
import { h, ref, defineComponent, provide } from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import Atom from "@/components/Atom/Atom.vue";
import EditAtomContent from "@/components/Edit/EditAtomContent.vue";
import SheetData from "@/components/Edit/Share/SheetData.vue";
import { GridLayout, GridItem } from "@/components/gridlayout.js";

export default {
  setup() {
    provide("editMode", true);
    provide("menuValue", "local-layout");
  },
  components: {
    Atom,
    EditAtomContent,
    SheetData,
    GridLayout,
    GridItem,
  },
  data() {
    return {
      refresh: {
        atomContent: false,
        sheetData: false,
      },
      disabled: {
        sheetData: true,
        atomContent: true,
      },
    };
  },
  computed: {
    ...mapState(["gallery", "store"]),
    ...mapGetters(["getLocalSlideContent"]),
    editingAtom() {
      return this.getLocalSlideContent[this.gallery.activeIndex];
    },
    length() {
      return this.getLocalSlideContent.length;
    },
  },
  methods: {
    ...mapMutations(["changeGalleryActiveIndex", "addLocalAtom"]),
    edit(editWhat) {
      this.refresh[editWhat] = false;
      this.$nextTick(() => {
        this.refresh[editWhat] = true;
      });
    },
    atomActive(i) {
      var activeIndex = this.getLocalSlideContent
        .map((atom) => atom.i)
        .indexOf(i);
      this.changeGalleryActiveIndex({ activeIndex });
    },
    copy() {
      var atom = JSON.parse(JSON.stringify(this.editingAtom));
      var copyatom = {
        ...atom,
        i: String(Date.parse(Date())),
        y: atom.y + 1,
      };
      this.addLocalAtom({ atom: copyatom });
      window.dispatchEvent(new Event("resize"));
      this.saveIndexDB();
    },
    remove() {
      this.getLocalSlideContent.splice(this.gallery.activeIndex, 1);
      window.dispatchEvent(new Event("resize"));
      this.saveIndexDB();
    },
    share() {
      ////console.log("共享", this.localObj, this.getLocalSlideContent);
    },
    saveIndexDB() {
      const slideContent = JSON.parse(
        JSON.stringify(this.getLocalSlideContent)
      );
      this.store.set("slideContent", slideContent, (err) => {
        if (err) console.log("saveIndexDB failed", err);
      });
    },
  },
  mounted() {
    window.dispatchEvent(new Event("resize"));
  },
  unmounted() {
    this.saveIndexDB();
  },
  watch: {
    editingAtom: {
      deep: true,
      immediate: true,
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
  },
};
</script>

<style scoped>
.workingslide {
  width: 100%;
  height: 100%;
  outline: 1px solid rgba(119, 119, 119, 0.322);
}
.chart {
  width: 100%;
  height: 100%;
  outline: 1px solid rgba(119, 119, 119, 0.322);
}
.right {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;
}
.header {
  display: grid;
  grid-template-columns: 1fr 120px;
  border-bottom: 1px solid rgba(119, 119, 119, 0.322);
  padding: 10px;
}
::-webkit-scrollbar {
  display: none;
}
.gridlayout {
  overflow-y: auto;
  width: 100%;
  height: 100%;
}
.insideGridItem {
  box-sizing: border-box;
  border: 0px solid;
  border-radius: 5px;
  background-color: rgb(247, 248, 250);
  outline: 0px solid rgb(119, 119, 119);
  box-shadow: -2px -2px 5px rgba(243, 245, 247, 0.863);
  box-shadow: 2px 2px 5px rgba(112, 128, 144, 0.493);
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
.menu {
  list-style: none;
  padding-left: 0px;
}
.menu li {
  float: left;
  line-height: 30px;
  height: 30px;
  margin: 0 10px;
  padding: 0 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.menu li:hover {
  background-color: rgba(184, 206, 204, 0.486);
}
</style>
