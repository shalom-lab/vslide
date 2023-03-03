<template>
  <div style="width:100%;height:100%">
    <component :is="atomContent.atomName" :atomContent="atomContent"></component>
  </div>
</template>

<script>
import { ref, defineComponent, toRaw } from "vue";

const path = require("path");
const files = require.context("./Echart", true, /\.vue$/);
const modules = {};
files.keys().forEach((key) => {
  const name = path.basename(key, ".vue");
  modules[name] = files(key).default || files(key);
});

export default defineComponent({
  name: "Echart",
  components: {
    ...modules,
  },
  props: {
    atomContent: Object,
  },
});
</script>
