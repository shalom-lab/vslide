<template>
  <v-chart :update-options="{notMerge:true}" :option="option" :initOptions="initOptions" :theme="theme" autoresize />
</template>
<script>
import { transpose, toNumber } from "@/hooks/useData.js";
import { reactive, toRaw } from "vue";
import "echarts-wordcloud";
export default {
  props: {
    atomContent: Object,
  },
  data() {
    return {
      initOptions: { renderer: "canvas" },
      theme: "default",
    };
  },
  setup(props) {
    var getDetail = reactive(props.atomContent.detail);
    return { getDetail };
  },
  computed: {
    getSheetData() {
      return toNumber(toRaw(this.getDetail.sheetData), 0, 1);
    },
    getData() {
      var data = [];
      for (let i = 0, nr = this.getSheetData.length; i < nr; i++) {
        data.push({
          name: this.getSheetData[i][0],
          value: this.getSheetData[i][1],
          textStyle: {
            fontFamily: this.getDetail.wordCloud.fontFamily,
            fontWeight: this.getDetail.wordCloud.fontWeight,
            color: this.getDetail.palette.pureColor[i % 12],
          },
        });
      }
      return data;
    },
    option() {
      return {
        tooltip: {},
        series: [
          {
            shape: this.getDetail.wordCloud.shape,
            // maskImage:
            type: "wordCloud",
            data: this.getData,
            left: null,
            right: null,
            top: null,
            bottom: null,
            width: "100%",
            height: "100%",
            sizeRange: this.getDetail.wordCloud.sizeRange,
            rotationRange: this.getDetail.wordCloud.rotationRange,
            rotationStep: this.getDetail.wordCloud.rotationStep,
            gridSize: this.getDetail.wordCloud.gridSize,
            drawOutOfBound: false,
          },
        ],
        animation: this.getDetail.animation,
        backgroundColor:
          this.getDetail.backgroundPalette[
            this.getDetail.backgroundPalette.mode
          ],
      };
    },
  },
};
</script>