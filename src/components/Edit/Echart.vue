<template>
  <n-drawer v-model:show="show" :mask-closable="true" width="400" height="400" placement="right" show-mask="transparent">
    <n-drawer-content header-style="margin:0 auto">
      <n-tabs type="card">
        <n-tab-pane v-for="(item,i ) in config" :key="i" :name="item.name" :tab="item.tab" display-directive="show">
          <editor :obj="item.obj" :prefix='item.name' :editorOptionKey="atomContent.atomName" />
        </n-tab-pane>
      </n-tabs>
    </n-drawer-content>
  </n-drawer>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import {
  toRaw,
  markRaw,
  computed,
  isRef,
  unref,
  isReactive,
  watch,
  reactive,
} from "vue";
import Editor from "@/components/Edit/Share/Editor.vue";

export default {
  components: {
    Editor,
  },
  props: {
    atomContent: Object,
  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    //console.log("EditAtomContent挂载了");
  },
  setup(props) {
    // initAtom仅用来初始化传值 切断响应式
    var atomContent = toRaw(props.atomContent);
    // config
    var config = [];
    var map = {
      simpleBar: "柱条",
      simpleLine: "折线",
      simplePie: "饼图",
      simpleFunnel: "漏斗图",
      simpleRadar: "雷达图",
      simpleSankey: "桑基图",
      simpleMap: "地图",
      simpleScatter: "散点图",
      wordCloud: "词云图",
      popPyramid: "人口金字塔",
      reg: "回归",
      dataZoom: "缩放条",
      timeline: "时间轴",
      visualMapC: "视觉映射",
      visualMapP: "视觉映射",
      palette: "调色板",
      title: "标题",
      grid: "网格",
      xAxis: "X轴",
      yAxis: "Y轴",
      yAxis1: "Y轴2",
      itemStyle: "样式",
      label: "标签",
      emphasis: "强调样式",
      legend: "图例",
      backgroundPalette: "背景色",
    };
    // push config
    var detail = atomContent.detail;
    Object.keys(detail).forEach((key) => {
      if (
        (typeof detail[key] == "object") &
        (Object.keys(map).indexOf(key) != -1)
      ) {
        config.push({
          name: "atomContent.detail." + key,
          tab: map[key],
          obj: detail[key],
        });
      }
    });
    return { config, atomContent };
  },
};
</script>

<style>
</style>
