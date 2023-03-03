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
      //console.log('series变化了')
      var series = []
      for (let i = 1, nc = this.getDetail.nc; i < nc; i++) {
        series.push({
          type: 'bar',
          name: this.getDetail.sheetData[0][i],
          showBackground: this.getDetail.simpleBar.showBackground,
          backgroundStyle: {
            color: this.getDetail.simpleBar.backgroundStyle[this.getDetail.simpleBar.backgroundStyle.mode]
          },
          encode: {
            x: 0,
            y: i
          },
          itemStyle: {
            ...this.getDetail.itemStyle,
            borderRadius: this.getDetail.simpleBar.borderRadius
          },
          emphasis: this.getDetail.emphasis,
        })
      }
      //console.log('series', series)
      return series
    },
    getLegend () {
      var legend = {
        ...this.getDetail.legend,
        data: JSON.parse(JSON.stringify(this.getDetail.sheetData[0]))
      }
      //console.log('legend', legend)
      return legend
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
        tooltip: {},
        dataset: {
          source: this.getDetail.sheetData,
          sourceHeader: true
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


