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
        series: {
          type: 'funnel',
          ...this.getDetail.simpleFunnel,
          data: this.getDetail.sheetData.map(item => {
            return { name: item[0], value: item[1] }
          }),
          label: this.getDetail.label,
          itemStyle: this.getDetail.itemStyle,
          emphasis: this.getDetail.emphasis,
        },
        animation: this.getDetail.animation,
        title: this.getDetail.title,
        color: this.getDetail.palette[this.getDetail.palette.mode],
        backgroundColor: this.getDetail.backgroundPalette[this.getDetail.backgroundPalette.mode],
        legend: this.getDetail.legend,
      }

    }
  }
}
</script>


