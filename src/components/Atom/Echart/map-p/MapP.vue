<template>
  <v-chart :update-options="{notMerge:true}" :option="option" :initOptions="initOptions" :theme="theme" autoresize />
</template>
<script>
import { reactive } from "vue";
import { registerMap } from "echarts";
export default {
  props: {
    atomContent: Object,
  },
  mounted() {
    registerMap(
      this.getDetail.mapName,
      JSON.parse(JSON.stringify(this.getDetail.mapObj))
    );
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
        animation: this.getDetail.animation,
        backgroundColor:
          this.getDetail.backgroundPalette[
            this.getDetail.backgroundPalette.mode
          ],
        title: this.getDetail.title,
        tooltip: {
          formatter: "{b}: {c}",
        },
        visualMap: this.getDetail.visualMapP,
        series: {
          type: "map",
          map: this.getDetail.mapName,
          label: {
            show: true,
          },
          roam: this.getDetail.simpleMap.roam,
          left: this.getDetail.simpleMap.left,
          right: this.getDetail.simpleMap.right,
          bottom: this.getDetail.simpleMap.bottom,
          top: this.getDetail.simpleMap.top,
          itemStyle: this.getDetail.simpleMap.itemStyle,
          data: this.getDetail.sheetData.map((item) => {
            return { name: item[0], value: item[1] };
          }),
        },
      };
    },
  },
};
</script>
