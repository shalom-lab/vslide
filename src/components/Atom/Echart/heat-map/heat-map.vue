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
    getData() {
      var data1 = this.getDetail.sheetData
        .slice(1)
        .map((item) => item.slice(1));
      var data2 = data1.map((item, i1) =>
        item.map((item2, i2) => [i2, i1, item2])
      );
      function con(arr1, arr2) {
        return arr1.concat(arr2);
      }
      var data3 = data2.reduce(con);
      return data3;
    },
    option() {
      return {
        tooltip: {
          position: "top",
        },
        grid: this.getDetail.grid,
        xAxis: {
          //...this.getDetail.xAxis,
          type: "category",
          data: this.getDetail.sheetData[0].slice(1),
          splitArea: {
            show: true,
          },
        },
        yAxis: {
          //...this.getDetail.yAxis,
          type: "category",
          data: this.getDetail.sheetData.map((item) => item[0]).slice(1),
          splitArea: {
            show: true,
          },
        },
        visualMap: this.getDetail.visualMapC,
        series: [
          {
            type: "heatmap",
            data: this.getData,
            label: this.getDetail.label,
            itemStyle: this.getDetail.itemStyle,
            emphasis: this.getDetail.emphasis,
          },
        ],
      };
    },
  },
};
</script>


