<template>
  <n-drawer v-model:show="show" :mask-closable="true" width="600" height="400" placement="right">
    <n-drawer-content header-style="margin:0 auto">
      <json-editor-vue class="editor" v-model="data" />
    </n-drawer-content>
  </n-drawer>
</template>

<script>
import JsonEditorVue from "json-editor-vue3";
import { mapState, mapGetters, mapMutations } from "vuex";
import { inject } from "vue";

export default {
  setup() {
    const menuValue = inject("menuValue", "vslide");
    return {
      menuValue,
    };
  },
  props: {
    initAtom: Object,
  },
  components: {
    JsonEditorVue,
  },
  data() {
    return {
      show: true,
      data: null,
    };
  },
  computed: {
    ...mapState(["gallery"]),
  },
  methods: {
    ...mapMutations(["changeJsonData"]),
  },
  watch: {
    data: {
      deep: true,
      handle(val) {
        const jsonData = JSON.parse(JSON.stringify(val));
        this.changeJsonData({ jsonData });
      },
    },
  },
  mounted() {
    let data;
    //console.log("menuValue", this.menuValue);
    switch (this.menuValue) {
      case "template-layout":
        data =
          this.gallery.templateLayout[0].slideContent[this.gallery.activeIndex]
            .atomContent.detail.jsonData;
        break;
      case "local-layout":
        data =
          this.gallery.localLayout[0].slideContent[this.gallery.activeIndex]
            .atomContent.detail.jsonData;
        break;
      default:
        data = this.initAtom.atomContent.detail.jsonData;
    }
    this.data = JSON.parse(JSON.stringify(data));
  },
};
</script>
