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
    layers () {
      return Array.from(new Set(this.getDetail.sheetData.map(item => item[0])))
    },
    groups () {
      return Array.from(new Set(this.getDetail.sheetData.map(item => item[1])))
    },
    source () {
      return this.layers.map((layer => {
        return {
          source: this.getDetail.sheetData.filter(item => item[0] === layer).map(item => item.slice(2))
        }
      }))
    },
    transform () {
      var groups = this.groups
      return this.source.map((item, i) => {
        return {
          fromDatasetIndex: i,
          transform: {
            type: 'boxplot',
            //print: true,
            config: {
              itemNameFormatter: function (param) {
                return groups[param.value];
              }
            }
          }
        }
      })
    },
    getDataset () {
      return [...this.source, ...this.transform]
    },
    getSeries () {
      return this.layers.map((item, i) => {
        return {
          name: item,
          type: 'boxplot',
          datasetIndex: this.layers.length + i,
          encode: {
            tooltip: ['Low', 'Q1', 'Q2', 'Q3', 'High']
          }
        }
      })
    },
    option () {
      return {
        dataset: this.getDataset,
        tooltip: {},
        series: this.getSeries,
        //animation: this.getDetail.animation,
        title: this.getDetail.title,
        legend: this.getDetail.legend,
        grid: this.getDetail.grid,
        xAxis: {
          ...this.getDetail.xAxis,
          type: 'category',
          boundaryGap: true,
          nameGap: 30,
        },
        yAxis: {
          ...this.getDetail.yAxis,
          type: 'value',
        },
        color: this.getDetail.palette[this.getDetail.palette.mode],
        label: this.getDetail.label,
        backgroundColor: this.getDetail.backgroundPalette[this.getDetail.backgroundPalette.mode],
      }

    }
  }
}
</script>


