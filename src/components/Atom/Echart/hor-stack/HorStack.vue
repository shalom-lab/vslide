<template>
  <v-chart :update-options="{notMerge:true}" :option="option" :initOptions="initOptions" :theme="theme" autoresize />
</template>
<script>
import { reactive } from "vue";
import { transpose, toNumber } from "@/hooks/useData.js";

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
    getSeries() {
      var series = [];
      var arr = transpose(this.getDetail.sheetData);
      var newArr = arr.map((item) => {
        return item.slice(1);
      });
      //console.log(newArr);
      for (let i = 1, nc = this.getDetail.nc; i < nc; i++) {
        series.push({
          type: "bar",
          ...this.getDetail.simpleBar,
          name: this.getDetail.sheetData[0][i],
          stack: "total",
          data: newArr[i],
          showBackground: this.getDetail.simpleBar.showBackground,
          backgroundStyle: {
            color:
              this.getDetail.simpleBar.backgroundStyle[
                this.getDetail.simpleBar.backgroundStyle.mode
              ],
          },
          itemStyle: {
            ...this.getDetail.itemStyle,
            borderRadius: this.getDetail.simpleBar.borderRadius,
          },
          emphasis: this.getDetail.emphasis,
        });
      }
      return series;
    },
    getAxisData() {
      //console.log(this.getDetail.sheetData.slice(1).map((item) => item[0]));
      return this.getDetail.sheetData.slice(1).map((item) => item[0]);
    },
    getLegend() {
      var legend = {
        ...this.getDetail.legend,
        data: JSON.parse(JSON.stringify(this.getDetail.sheetData[0])),
      };
      //console.log("legend", legend);
      return legend;
    },
    option() {
      return {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        series: this.getSeries,
        animation: this.getDetail.animation,
        title: this.getDetail.title,
        legend: this.getDetail.legend,
        grid: this.getDetail.grid,
        xAxis: this.getDetail.yAxis,
        yAxis: {
          ...this.getDetail.xAxis,
          data: this.getAxisData,
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


