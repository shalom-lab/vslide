<template>
  <div>
    <md-editor v-if="!editMode" v-model="getDetail.markdown" :previewOnly="true" />
    <md-editor v-if="editMode" v-model="text" :previewOnly="false" :editorId="'id'+getDetail.editorId" :preview="false" :toolbars="toolbars" @onSave="save" />
  </div>
</template>

<script>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { inject, ref, reactive } from "vue";
import useMessage from "@/hooks/useMessage";
export default {
  name: "text-md",
  props: {
    atomContent: Object,
  },
  setup(props) {
    const message = useMessage();
    const editMode = inject("editMode", false);
    const menuValue = inject("menuValue", "layout");
    const getDetail = reactive(props.atomContent.detail);
    return { editMode, getDetail, menuValue, ...message };
  },
  components: {
    MdEditor,
  },
  methods: {
    save(value) {
      ////console.log("saved", value);
      this.$store.commit("changeAtom", {
        key: "atomContent.detail.markdown",
        value,
        menuValue: this.menuValue,
      });
      this.success("保存成功");
    },
  },
  data() {
    return {
      text: ref(this.atomContent.detail.markdown),
      toolbars: [
        "bold",
        "sub",
        "sup",
        "quote",
        "unorderedList",
        "orderedList",
        "codeRow",
        "code",
        "link",
        "table",
        "mermaid",
        "katex",
        "save",
        "preview",
      ],
      alltoolbars: [
        "bold",
        "underline",
        "italic",
        "strikeThrough",
        "sub",
        "sup",
        "quote",
        "unorderedList",
        "orderedList",
        "codeRow",
        "code",
        "link",
        "image",
        "table",
        "revoke",
        "next",
        "save",
        "pageFullscreen",
        "fullscreen",
        "preview",
        "htmlPreview",
        "github",
      ],
    };
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
