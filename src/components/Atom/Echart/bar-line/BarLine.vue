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
    getSeries() {
      var series = [];
      for (let i = 1, nc = this.getDetail.nc + 1; i < nc; i++) {
        series.push({
          type: this.getDetail.sheetData[0][i],
          yAxisIndex: Number(this.getDetail.sheetData[1][i]),
          name: this.getDetail.sheetData[2][i],
          ...this.getDetail.simpleBar,
          ...this.getDetail.simpleLine,
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
    option() {
      return {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
          },
        },
        dataset: {
          source: this.getDetail.sheetData.slice(2),
          sourceHeader: true,
        },
        series: this.getSeries,
        animation: this.getDetail.animation,
        title: this.getDetail.title,
        legend: this.getDetail.legend,
        grid: this.getDetail.grid,
        xAxis: this.getDetail.xAxis,
        yAxis: [this.getDetail.yAxis, this.getDetail.yAxis1],
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


