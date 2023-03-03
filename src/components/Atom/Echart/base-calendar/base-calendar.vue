<template>
  <v-chart :update-options="{notMerge:true}" :option="option" :initOptions="initOptions" :theme="theme" autoresize />
</template>
<script>
import { reactive } from "vue";
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
    option() {
      return {
        title: {
          top: 30,
          left: "center",
          text: "Daily Step Count",
        },
        tooltip: {},
        visualMap: {
          min: 0,
          max: 30000,
          type: "piecewise",
          orient: "horizontal",
          left: "center",
          top: 65,
        },
        calendar: {
          top: 120,
          left: 30,
          right: 30,
          cellSize: ["auto", 13],
          range: "2022",
          itemStyle: {
            borderWidth: 0.5,
          },
          yearLabel: { show: false },
        },
        series: {
          type: "heatmap",
          coordinateSystem: "calendar",
          data: this.getDetail.sheetData,
        },
      };
    },
  },
};
</script>


