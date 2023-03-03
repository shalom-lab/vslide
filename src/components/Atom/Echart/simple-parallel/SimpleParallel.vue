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
      for (let i = 1, nc = this.getDetail.nc + 1; i < nc; i++) {
        series.push({
          type: 'bar',
          name: this.getDetail.sheetData[0][i],
          showBackground: this.getDetail.simpleBar.showBackground,
          backgroundStyle: {
            color: this.getDetail.simpleBar.backgroundStyle[this.getDetail.simpleBar.backgroundStyle.mode]
          },
          encode: {
            x: 0,
            y: i + 1
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
        parallelAxis: [
          { dim: 0, name: 'Price' },
          { dim: 1, name: 'Net Weight' },
          { dim: 2, name: 'Amount' },
          {
            dim: 3,
            name: 'Score',
            type: 'category',
            data: ['Excellent', 'Good', 'OK', 'Bad']
          }
        ],
        series: {
          type: 'parallel',
          lineStyle: {
            width: 4
          },
          data: [
            [12.99, 100, 82, 'Good'],
            [9.99, 80, 77, 'OK'],
            [20, 120, 60, 'Excellent']
          ]
        }
      }
    }
  }
}
</script>


