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
    getOptions() {
      var options = [];
      for (let i = 0, nc = this.getDetail.nc - 1; i < nc; i++) {
        var arr = this.getDetail.sheetData.slice(1).map((item, index) => {
          return [
            item[0],
            item[i + 1],
            this.getDetail.palette[this.getDetail.palette.mode][index % 12],
          ];
        });
        arr.sort((a, b) => {
          return a[1] - b[1];
        });
        arr = arr.slice(0);
        // 转置
        var newArray = transpose(arr);
        //console.log(arr, newArray);
        options.push({
          series: [
            {
              ...this.getDetail.simpleBar,
              showBackground: false,
              //barGap: "-100%",
              label: {
                ...this.getDetail.label,
              },
              emphasis: this.getDetail.emphasis,
              animationDuration: this.getDetail.racingBar.animationDuration,
              animationDurationUpdate:
                this.getDetail.racingBar.animationDurationUpdate,
              animationEasing: this.getDetail.racingBar.easing,
              animationEasingUpdate: this.getDetail.racingBar.easing,
              type: "bar",
              data: arr.map((item, index) => {
                return {
                  name: item[0],
                  value: item[1],
                  itemStyle: { color: item[2], ...this.getDetail.simpleBar },
                  label: { color: item[2] },
                };
              }),
            },
          ],
          yAxis: [
            {
              data: newArray[0],
              type: "category",
              max: this.getDetail.racingBar.top - 1,
            },
          ],
          title: {
            ...this.getDetail.title,
            text:
              this.getDetail.sheetData[0][i + 1] + this.getDetail.title.text,
          },
        });
      }
      return options;
    },
    option() {
      return {
        baseOption: {
          animationDurationUpdate: 1000,
          animationEasing: "quinticInOut",
          animationEasingUpdate: "quinticInOut",
          //animation: this.getDetail.animation,
          timeline: {
            ...this.getDetail.timeline,
            data: this.getDetail.sheetData[0].slice(1),
          },
          itemStyle: {
            ...this.getDetail.itemStyle,
          },
          title: this.getDetail.title,
          grid: this.getDetail.grid,
          xAxis: this.getDetail.xAxis,
          yAxis: {
            ...this.getDetail.yAxis,
            axisLabel: {
              show: false,
            },
          },
          tooltip: {},
        },
        options: this.getOptions,
      };
    },
  },
};
</script>


