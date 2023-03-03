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
    option () {
      return {
        tooltip: {},
        dataset: {
          source: this.getDetail.sheetData,
          sourceHeader: true
        },
        series: {
          type: 'pie',
          ...this.getDetail.simplePie,
          data: this.getDetail.sheetData.slice(1).map((item) => {
            return { name: item[0], value: item[1] }
          }),
          label: this.getDetail.label,
          itemStyle: this.getDetail.itemStyle,
          emphasis: this.getDetail.emphasis,
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


