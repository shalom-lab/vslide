<template>
  <div class="top">
    <icon-button @click="newSlide()" name="#icon-add" label="新建幻灯片"></icon-button>
    <div class="mode">
      <icon-button @click="this.$router.push({path:'/play'})" name="#icon-play" label="放映"></icon-button>
      <icon-button @click="this.$router.push({path:'/view'})" name="#icon-view" label="浏览"></icon-button>
      <icon-button @click="this.$router.push({path:'/doc'})" name="#icon-doc" label="文稿"></icon-button>
    </div>
    <div class="atom">
      <icon-button @click="select('echart')" name="#icon-echart" label="图表"></icon-button>
      <icon-button @click="select('text')" name="#icon-text" label="文本"></icon-button>
      <icon-button @click="select('tables')" name="#icon-biaoge" label="表格"></icon-button>
      <icon-button @click="select('images')" name="#icon-tupian" label="图片"></icon-button>
      <icon-button @click="editBg()" name="#icon-set" label="背景"></icon-button>
      <input ref="upload" style="display: none" type="file" @change="changeImage" class="upload" accept=".jpeg,.jpg,.png">
    </div>
    <s-echart ref='echart' />
    <s-text ref='text' />
    <s-images ref='images' />
    <s-tables ref='tables' />
    <edit-background ref="background"></edit-background>
  </div>
</template>
<script>
import IconButton from "@/components/IconButton.vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import { useRouter } from "vue-router";
//background
import EditBackground from "@/components/Edit/EditBackground.vue";

//selector
const path = require("path");
const files = require.context("@/components/Select", false, /\.vue$/);
const modules = {};
files.keys().forEach((key) => {
  const name = path.basename(key, ".vue");
  modules[name] = files(key).default || files(key);
});

export default {
  components: {
    IconButton,
    ...modules,
    EditBackground,
  },
  computed: {
    ...mapState(["layout", "iActive", "iMax"]),
    ...mapGetters(["activeSlide", "activeAtom", "activeFile"]),
  },
  methods: {
    ...mapMutations(["updateIActive", "addSlide"]),
    editBg() {
      this.$refs.background.key++;
      this.$refs.background.show = true;
    },
    newSlide() {
      var blankSlide = {
        ...JSON.parse(JSON.stringify(this.activeSlide)),
        slideContent: [],
        i: String(this.iMax.slide),
        y: this.activeSlide.y + 0.5,
      };
      this.addSlide(blankSlide);
    },
    select(ref) {
      this.$refs[ref].show = true;
    },
    addItem(itemName) {
      this.$store.commit("addItem", { itemName });
    },
    addImage() {
      this.$refs.upload.click();
    },
    changeImage() {
      const file = this.$refs.upload.files[0];
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          // convert image file to base64 string
          this.$store.commit("addItem", {
            itemName: "BASEIMAGE",
            src: reader.result,
          });
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>
.top {
  background-color: rgb(230, 230, 230);
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 250px 300px 1fr;
  justify-items: center;
  align-items: center;
}
.atom,
.share {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  background-color: red;
  width: 100px;
  height: 100%;
}
.mode {
  display: flex;
}
</style>

<style>
.el-drawer /deep/ #el-drawer__title {
  margin-bottom: 0px;
  padding: 0px;
}
</style>
