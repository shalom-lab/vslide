<template>
  <v-chart :update-options="{notMerge:true}" :option="option" :initOptions="initOptions" :theme="theme" autoresize />
</template>
<script>
import { reactive } from "vue";
export default {
  props: {
    atomContent: Object,
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
  mounted() {
    //console.log(this.getLinks)
  },
  computed: {
    getData() {
      var name = [];
      for (let i = 1, nr = this.getDetail.sheetData.length; i < nr; i++) {
        name.push(this.getDetail.sheetData[i][0]);
        name.push(this.getDetail.sheetData[i][1]);
      }
      var set = new Set(name);
      return Array.from(set).map((item, i) => {
        return {
          name: item,
          itemStyle: {
            color: this.getDetail.palette[this.getDetail.palette.mode][i % 12],
          },
        };
      });
    },
    getLinks() {
      var links = [];
      for (let i = 1, nr = this.getDetail.sheetData.length; i < nr; i++) {
        links.push({
          source: this.getDetail.sheetData[i][0],
          target: this.getDetail.sheetData[i][1],
          value: Number(this.getDetail.sheetData[i][2]),
        });
      }
      return links;
    },
    option() {
      return {
        tooltip: {},
        series: {
          type: "sankey",
          layout: "none",
          emphasis: {
            focus: "adjacency",
          },
          data: this.getData,
          links: this.getLinks,
          itemStyle: this.getDetail.itemStyle,
        },
        animation: false,
        title: this.getDetail.title,
        legend: this.getDetail.legend,
        color: this.getDetail.palette[this.getDetail.palette.mode],
        backgroundColor:
          this.getDetail.backgroundPalette[
            this.getDetail.backgroundPalette.mode
          ],
      };
    },
  },
};
</script>


