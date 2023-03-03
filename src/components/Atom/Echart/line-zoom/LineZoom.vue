<template>
  <v-chart :update-options="{notMerge:true}" :option="option" :initOptions="initOptions" :theme="theme" autoresize />
</template>
<script>
import { reactive } from "vue";
export default {
  props: {
    atomContent: Object,
  },
  data () {
    return {
      initOptions: { renderer: 'canvas' },
      theme: 'default'
    }
  },
  setup (props) {
    var getDetail = reactive(props.atomContent.detail)
    return { getDetail }
  },
  computed: {
    getSeries () {
      var series = []
      for (let i = 1, nc = this.getDetail.nc; i < nc; i++) {
        series.push({
          type: 'line',
          ...this.getDetail.simpleLine
        })
      }
      return series
    },
    option () {
      return {
        dataZoom: [
          {
            type: 'inside',
            xAxisIndex: [0],
            filterMode: 'filter'
          },
          {
            ...this.getDetail.dataZoom,
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter'
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        dataset: {
          source: this.getDetail.sheetData
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
        backgroundColor: this.getDetail.backgroundPalette[this.getDetail.backgroundPalette.mode],
      }
    }
  }
}
</script>


