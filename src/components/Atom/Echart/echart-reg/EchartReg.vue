<template>
  <v-chart :update-options="{notMerge:true}" :option="option" :initOptions="initOptions" :theme="theme" autoresize />
</template>
<script>
import { reactive } from "vue";
import * as echarts from "echarts";
import ecStat from "echarts-stat";
import { transpose, toNumber } from "@/hooks/useData.js";
export default {
  props: {
    atomContent: Object,
  },
  data() {
    return {
      initOptions: { renderer: "canvas" },
      theme: "default",
      ecStat: ecStat,
    };
  },
  setup(props) {
    var getDetail = reactive(props.atomContent.detail);
    echarts.registerTransform(ecStat.transform.regression);
    return { getDetail };
  },
  computed: {
    getSeries() {
      var series = [
        {
          name: "scatter",
          type: "scatter",
        },
        {
          name: "line",
          type: "line",
          datasetIndex: 1,
          symbolSize: 0.1,
          symbol: "circle",
          label: { show: true, fontSize: 16 },
          labelLayout: { dx: -20 },
          encode: { label: 2, tooltip: 1 },
        },
      ];
      return series;
    },
    option() {
      return {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        dataset: [
          {
            source: toNumber(this.getDetail.sheetData.slice(1), 0, 0),
          },
          {
            transform: {
              type: "ecStat:regression",
              config: this.getDetail.reg,
            },
          },
        ],
        series: [
          {
            name: "真实值",
            type: "scatter",
          },
          {
            name: "拟合值",
            type: "line",
            datasetIndex: 1,
            symbolSize: 0.1,
            symbol: "circle",
            label: { show: true, fontSize: 16 },
            labelLayout: { dx: -20 },
            encode: { label: 2, tooltip: 1 },
          },
        ],
        animation: this.getDetail.animation,
        title: this.getDetail.title,
        legend: this.getDetail.legend,
        grid: this.getDetail.grid,
        /* xAxis: this.getDetail.xAxis,
        yAxis: this.getDetail.yAxis, */
        xAxis: {
          ...this.getDetail.xAxis,
          type: "value",
          name: this.getDetail.sheetData[0][0],
        },
        yAxis: {
          ...this.getDetail.yAxis,
          type: "value",
          name: this.getDetail.sheetData[0][1],
        },
        color: this.getDetail.palette[this.getDetail.palette.mode],
        label: this.getDetail.label,
        backgroundColor:
          this.getDetail.backgroundPalette[
            this.getDetail.backgroundPalette.mode
          ],
      };
    },
  },
};
</script>


