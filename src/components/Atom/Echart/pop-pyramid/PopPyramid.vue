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
      series.push({
        name: this.getDetail.sheetData[0][1],
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        encode: {
          x: 1,
          y: 0
        },
        ...this.getDetail.simpleBar,
        backgroundStyle: {
          color: this.getDetail.simpleBar.backgroundStyle[this.getDetail.simpleBar.backgroundStyle.mode]
        }
      })
      series.push({
        name: this.getDetail.sheetData[0][2],
        type: 'bar',
        xAxisIndex: 2,
        yAxisIndex: 2,
        encode: {
          x: 2,
          y: 0
        },
        ...this.getDetail.simpleBar,
        backgroundStyle: {
          color: this.getDetail.simpleBar.backgroundStyle[this.getDetail.simpleBar.backgroundStyle.mode]
        }
      })
      return series
    },
    getLabel () {
      var label = []
      for (let i = 1, nr = this.getDetail.nr; i < nr; i++) {
        label.push({
          value: this.getDetail.sheetData[i][0],
          textStyle: {
            align: 'center'
          }
        })
      }
      return label
    },
    option () {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        dataset: {
          source: this.getDetail.sheetData
        },
        xAxis: [
          {
            show: false
          },
          {
            ...this.getDetail.xAxis,
            gridIndex: 1,
            type: 'value',
            max: this.getDetail.popPyramid.max,
            inverse: true
          },
          {
            ...this.getDetail.xAxis,
            gridIndex: 2,
            type: 'value',
            max: this.getDetail.popPyramid.max,
            inverse: false
          }
        ],
        yAxis: [
          {
            show: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            data: this.getLabel
          },
          {
            ...this.getDetail.yAxis,
            gridIndex: 1,
            type: 'category',
            position: 'right',
            show: true,
            axisLabel: {
              show: false
            }
          },
          {
            ...this.getDetail.yAxis,
            gridIndex: 2,
            type: 'category',
            position: 'left',
            show: true,
            axisLabel: {
              show: false
            }
          }
        ],
        series: this.getSeries,
        grid: [
          {
            show: false,
            left: '10%',
            top: '20%',
            bottom: '5%',
            width: '5%'
          }, {
            show: false,
            left: '15%',
            top: '20%',
            bottom: '5%',
            containLabel: true,
            width: '35%'
          }, {
            show: false,
            left: '50%',
            top: '20%',
            bottom: '5%',
            containLabel: true,
            width: '35%'
          }],
        animation: this.getDetail.animation,
        title: this.getDetail.title,
        legend: this.getDetail.legend,
        color: this.getDetail.palette[this.getDetail.palette.mode],
        label: this.getDetail.label,
        backgroundColor: this.getDetail.backgroundPalette[this.getDetail.backgroundPalette.mode],
      }

    }
  }
}
</script>


