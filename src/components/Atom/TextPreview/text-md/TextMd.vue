<template>
  <div>
    <md-editor v-model="getDetail.markdown" :previewOnly="true" />
  </div>
</template>

<script>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { inject, ref, reactive } from "vue";

export default {
  name: "text-md",
  props: {
    atomContent: Object,
  },
  setup(props) {
    const getDetail = reactive(props.atomContent.detail);
    return { getDetail };
  },
  components: {
    MdEditor,
  },
};
</script>

<style>
.md-content .md-preview,
.md-content .md-html {
  text-align: left;
  background-color: transparent;
}
.md {
  background-color: transparent;
  border: 0px solid #e6e6e6;
}
.md-toolbar-wrapper .md-toolbar {
  height: 12px;
  min-width: 300px;
}
</style>
