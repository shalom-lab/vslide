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
      for (let i = 1, nr = this.getDetail.nr; i < nr; i++) {
        series.push({
          type: 'bar',
          seriesLayoutBy: 'row',
          ...this.getDetail.simpleBar,
          itemStyle: this.getDetail.itemStyle,
          emphasis: this.getDetail.emphasis,
          backgroundStyle: {
            color: this.getDetail.simpleBar.backgroundStyle[this.getDetail.simpleBar.backgroundStyle.mode]
          }
        })
      }
      for (let i = 1, nc = this.getDetail.nc; i < nc; i++) {
        series.push({
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          ...this.getDetail.simpleBar,
          itemStyle: this.getDetail.itemStyle,
          emphasis: this.getDetail.emphasis,
          backgroundStyle: {
            color: this.getDetail.simpleBar.backgroundStyle[this.getDetail.simpleBar.backgroundStyle.mode]
          }
        })
      }
      return series
    },
    option () {
      return {
        tooltip: {},
        dataset: {
          source: this.getDetail.sheetData,
          sourceHeader: true
        },
        series: this.getSeries,
        animation: this.getDetail.animation,
        title: this.getDetail.title,
        legend: this.getDetail.legend,
        xAxis: [
          { type: 'category', gridIndex: 0 },
          { type: 'category', gridIndex: 1 }
        ],
        yAxis: [
          {
            gridIndex: 0,
            position: 'left',
            axisLine: {
              show: true,
              onZero: true,
              symbol: ['none', 'arrow'],
              symbolOffset: 6,
              symbolSize: [6, 9],
              lineStyle: {
                color: '#333',
                width: 1,
                type: 'solid'
              }
            },
            splitLine: {
              show: true,
              interval: 'auto',
              lineStyle: {
                color: 'rgba(28, 51, 28, 0.81)',
                width: 1,
                type: 'dashed'
              }
            }
          },
          {
            gridIndex: 1,
            position: 'left',
            axisLine: {
              show: true,
              onZero: true,
              symbol: ['none', 'arrow'],
              symbolOffset: 6,
              symbolSize: [6, 9],
              lineStyle: {
                color: '#333',
                width: 1,
                type: 'solid'
              }
            },
            splitLine: {
              show: true,
              interval: 'auto',
              lineStyle: {
                color: 'rgba(28, 51, 28, 0.81)',
                width: 1,
                type: 'dashed'
              }
            }
          }
        ],
        grid: [
          { top: '20%', bottom: '55%', left: '10%', right: '10%' },
          { top: '55%', bottom: '10%', left: '10%', right: '10%' }
        ],
        color: this.getDetail.palette[this.getDetail.palette.mode],
        label: this.getDetail.label,
        backgroundColor: this.getDetail.backgroundPalette[this.getDetail.backgroundPalette.mode],
      }

    }
  }
}
</script>


