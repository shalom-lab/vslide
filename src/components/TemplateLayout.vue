<template>
  <div class="workingslide" style="overflow-y:scroll">
    <grid-layout class="gridlayout" :layout="getTemplateSlideContent" :col-num="18" :row-height="40" :is-draggable="true" :is-resizable="true" :vertical-compact="true" :preventCollision="false" :margin="[20, 20]" :use-css-transforms="false">
      <grid-item v-for="(atom) in getTemplateSlideContent" class="insideGridItem" :x="atom.x" :y="atom.y" :w="atom.w" :h="atom.h" :i="atom.i" :key="atom.i" :static="atom.static" dragAllowFrom=".dragable">
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
    <v-contextmenu-item @click="edit('sheetData')"><i class="iconfont icon-data" /> 数据</v-contextmenu-item>
    <v-contextmenu-divider />
    <v-contextmenu-item @click="edit('atomContent')"><i class="iconfont icon-style" /> 样式</v-contextmenu-item>
    <v-contextmenu-divider />
    <v-contextmenu-item @click="save()"><i class="iconfont iconfont icon-save" /> 保存</v-contextmenu-item>
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
import useMessage from "@/hooks/useMessage";
import { GridLayout, GridItem } from "@/components/gridlayout.js";

export default {
  components: {
    Atom,
    EditAtomContent,
    SheetData,
    GridLayout,
    GridItem,
  },
  setup() {
    const message = useMessage();
    provide("editMode", true);
    provide("menuValue", "template-layout");
    return {
      ...message,
    };
  },
  data() {
    return {
      refresh: {
        atomContent: false,
        sheetData: false,
      },
    };
  },
  computed: {
    ...mapState(["gallery", "store"]),
    ...mapGetters(["getTemplateSlideContent", "getLocalSlideContent"]),
    editingAtom() {
      return this.getTemplateSlideContent[this.gallery.activeIndex];
    },
  },
  methods: {
    ...mapMutations([
      "changeGalleryActiveIndex",
      "addLocalAtom",
      "initLocalAtom",
      "removeLocalAtom",
    ]),
    edit(editWhat) {
      this.refresh[editWhat] = false;
      this.$nextTick(() => {
        this.refresh[editWhat] = true;
      });
    },
    atomActive(i) {
      var activeIndex = this.getTemplateSlideContent
        .map((atom) => atom.i)
        .indexOf(i);
      this.changeGalleryActiveIndex({ activeIndex });
    },
    save() {
      var atom = JSON.parse(JSON.stringify(this.editingAtom));
      var copyatom = {
        ...atom,
        i: String(Date.parse(Date())),
        y: atom.y + 1,
      };
      this.addLocalAtom({ atom: copyatom });
      this.success("已保存至我的图表");
      this.saveIndexDB();
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
