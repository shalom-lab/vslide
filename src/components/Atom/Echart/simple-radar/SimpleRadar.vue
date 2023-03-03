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
    getIndicator () {
      var indicator = []
      for (let i = 1, nc = this.getDetail.sheetData[0].length; i < nc; i++) {
        indicator.push({
          name: this.getDetail.sheetData[0][i],
          min: this.getDetail.sheetData[1][i],
          max: this.getDetail.sheetData[2][i]
        })
      }
      return indicator
    },
    getData () {
      var data = []
      for (let i = 3, nr = this.getDetail.sheetData.length; i < nr; i++) {
        data.push({
          name: this.getDetail.sheetData[i][0],
          value: this.getDetail.sheetData[i].slice(1)
        })
      }
      return data
    },
    option () {
      return {
        tooltip: {},
        radar: {
          ...this.getDetail.simpleRadar,
          indicator: this.getIndicator
        },
        series: {
          type: 'radar',
          tooltip: {
            trigger: 'item'
          },
          ...this.getDetail.simpleRadar,
          areaStyle: this.getDetail.simpleRadar.areaStyle,
          data: this.getData
        },
        animation: this.getDetail.animation,
        title: this.getDetail.title,
        legend: this.getDetail.legend,
        color: this.getDetail.palette[this.getDetail.palette.mode],
        backgroundColor: this.getDetail.backgroundPalette[this.getDetail.backgroundPalette.mode],
      }

    }
  }
}
</script>


