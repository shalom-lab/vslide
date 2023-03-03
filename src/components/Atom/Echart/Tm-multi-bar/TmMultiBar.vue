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
    getTimelineData() {
      var timelineData = Array.from(
        new Set(this.getDetail.sheetData.slice(1).map((item) => item[0]))
      );
      return timelineData;
    },
    getDataList() {
      var sheetData = toNumber(toRaw(this.getDetail.sheetData), 1, 2);
      var dataList = JSON.parse(
        JSON.stringify(
          this.getTimelineData.map((item) => {
            return sheetData.filter((item1) => {
              return item1[0] === item;
            });
          })
        )
      );
      return dataList;
    },
    getOptions() {
      var options = [];
      for (let i = 0, nt = this.getTimelineData.length; i < nt; i++) {
        options.push({
          dataset: {
            source: this.getDataList[i],
          },
          series: this.getDetail.sheetData[0].slice(2).map((item, index) => {
            return {
              type: "bar",
              ...this.getDetail.simpleBar,
              name: item,
              encode: {
                x: 1,
                y: index + 2,
              },
              label: {
                ...this.getDetail.label,
                formatter: (params) => {
                  params.value[params.encode.y[index + 2]];
                },
              },
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
            };
          }),
          title: {
            ...this.getDetail.title,
            text: this.getTimelineData[i] + this.getDetail.title.text,
          },
          legend: this.getDetail.legend,
        });
      }
      return options;
    },
    option() {
      return {
        baseOption: {
          timeline: {
            ...this.getDetail.timeline,
            data: this.getTimelineData,
          },
          itemStyle: {
            ...this.getDetail.itemStyle,
          },
          color: this.getDetail.palette[this.getDetail.palette.mode],
          title: this.getDetail.title,
          grid: this.getDetail.grid,
          xAxis: this.getDetail.xAxis,
          yAxis: this.getDetail.yAxis,
          color: this.getDetail.palette[this.getDetail.palette.mode],
          backgroundColor:
            this.getDetail.backgroundPalette[
              this.getDetail.backgroundPalette.mode
            ],
          tooltip: {},
        },
        options: this.getOptions,
      };
    },
  },
};
</script>


