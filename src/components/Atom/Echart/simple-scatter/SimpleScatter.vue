<template>
  <v-chart :update-options="{notMerge:true}" :option="option" :initOptions="initOptions" :theme="theme" autoresize />
</template>
<script>
import { reactive, toRaw } from "vue";
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
    getGroupName() {
      var timelineData = Array.from(
        new Set(this.getDetail.sheetData.slice(1).map((item) => item[0]))
      );
      return timelineData;
    },
    getDataList() {
      var sheetData = toNumber(toRaw(this.getDetail.sheetData), 1, 1);
      var dataList = JSON.parse(
        JSON.stringify(
          this.getGroupName.map((item) => {
            return sheetData.filter((item1) => {
              return item1[0] === item;
            });
          })
        )
      );
      return dataList;
    },
    getSeries() {
      var series = [];
      this.getGroupName.forEach((name, index) => {
        series.push({
          ...this.getDetail.simpleScatter,
          type: "scatter",
          name: name,
          data: this.getDataList[index].map((item) => {
            return { name: item[0], value: [item[1], item[2]] };
          }),
        });
      });
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
        series: this.getSeries,
        animation: this.getDetail.animation,
        title: this.getDetail.title,
        legend: this.getDetail.legend,
        grid: this.getDetail.grid,
        xAxis: this.getDetail.xAxis,
        yAxis: this.getDetail.yAxis,
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


