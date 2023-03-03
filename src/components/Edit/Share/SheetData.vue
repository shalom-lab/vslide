<template>
  <n-drawer v-model:show="show" :mask-closable="true" width="600" height="400" placement="right">
    <n-drawer-content header-style="margin:0 auto">
      <hot-table language="zh-CN" :settings="hotSettings" ref="hottable"></hot-table>
    </n-drawer-content>
  </n-drawer>
</template>

<script>
import { mapState, mapGetters, mapMutations, useStore } from "vuex";
import { inject, computed, toRaw } from "vue";
import useMessage from "@/hooks/useMessage";

/* import { HotTable } from "@handsontable/vue3";
import "handsontable/dist/handsontable.full.css";
import "handsontable/languages/zh-CN";
import { getLanguagesDictionaries } from "handsontable/i18n";
import { registerAllModules } from "handsontable/registry";
registerAllModules(); */

export default {
  setup() {
    const menuValue = inject("menuValue");
    const message = useMessage();
    return {
      ...message,
      menuValue,
    };
  },
  props: {
    initAtom: Object,
  },
  components: {
    HotTable: Handsontable.vue.HotTable,
  },
  data() {
    return {
      show: true,
      data: null,
      formalData: null,
      nr: null,
      nc: null,
      key: 1,
      hotSettings: {
        rowHeaders: true,
        colHeaders: true,
        height: "auto",
        manualRowResize: true,
        manualColumnResize: true,
        columnSorting: false,
        filters: true,
        dropdownMenu: false,
        contextMenu: true,
        customBorders: [],
        fixedRowsTop: 1,
        minSpareRows: 5,
        minSpareCols: 3,
        licenseKey: "non-commercial-and-evaluation",
        afterChange: this.rawDataChange,
        afterRemoveCol: this.rawDataChange,
        afterRemoveRow: this.rawDataChange,
      },
    };
  },
  computed: {
    ...mapState(["gallery", "account"]),
  },
  methods: {
    rawDataChange: function () {
      var nr =
        this.$refs.hottable.hotInstance.countRows() -
        this.$refs.hottable.hotInstance.countEmptyRows(true);
      var nc =
        this.$refs.hottable.hotInstance.countCols() -
        this.$refs.hottable.hotInstance.countEmptyCols(true);
      var data = JSON.parse(
        JSON.stringify(
          this.$refs.hottable.hotInstance.getData(0, 0, nr - 1, nc - 1)
        )
      );
      ////console.log(nr, nc, data);
      if (nr + nc != 0) {
        ////console.log("upDataStateData");
        this.changeSheetData({
          sheetData: data,
          nr: nr,
          nc: nc,
          menuValue: this.menuValue,
        });
      }
    },
    ...mapMutations(["changeSheetData"]),
  },
  watch: {
    formalData: {
      deep: true,
      handle() {
        ////console.log("watch", this.data);
      },
    },
  },
  mounted() {
    let data;
    switch (this.menuValue) {
      case "template-layout":
        data =
          this.gallery.templateLayout[0].slideContent[this.gallery.activeIndex]
            .atomContent.detail.sheetData;
        break;
      case "local-layout":
        data =
          this.gallery.localLayout[0].slideContent[this.gallery.activeIndex]
            .atomContent.detail.sheetData;
        break;
      case "layout":
        data = this.initAtom.atomContent.detail.sheetData;
    }

    this.$refs.hottable.hotInstance.loadData(JSON.parse(JSON.stringify(data)));
  },
};
</script>
