<template>
  <div class="toolbar">
    <ul class="menu">
      <li @click="this.$router.push({name:'chart'})">返回</li>
      <li @click="this.$refs.upload.click()">打开</li>
      <li @click="saveIndexDB()">保存</li>
      <li @click="downloadFile()">下载</li>
      <input ref="upload" @change="open" style="display: none" type="file" accept=".json" />
    </ul>
    <div style="-webkit-app-region: drag; text-align: center">
      {{ this.activeFile.fileName+'.json' }}
    </div>
    <ul class="win" v-if="isElectron">
      <li @click="beforeClose"><i class="iconfont icon-guanbi_o" /></li>
      <li @click="max"><i :class="maxIconClass" /></li>
      <li @click="min"><i class="iconfont icon-zuixiaohua1" /></li>
    </ul>
  </div>
</template>

<script>
import { saveAs } from "file-saver";
import { mapGetters, mapMutations, mapState } from "vuex";
import { ref, toRaw } from "vue";
import useMessage from "@/hooks/useMessage";
import { useDialog } from "naive-ui";
import { nanoid } from "nanoid";
import dayjs from "@/hooks/useDayjs";
import copy from "copy-to-clipboard";

export default {
  name: "Home",
  data() {
    return {
      maxIcon: "icon-wenben",
      saveCard: false,
      currentFile: "demo.json",
      isMax: false,
      author: "nobody",
      fileName: "无标题",
      isUpload: false,
      isPublic: false,
    };
  },
  setup() {
    const message = useMessage();
    const dialog = useDialog();
    const copyLink = (url) => {
      copy(url);
      copy(url);
      message.success("链接复制成功");
    };
    return {
      ...message,
      copyLink,
      beforeClose() {
        dialog.info({
          title: "温馨提示",
          content: "退出前请确认文件已保存",
          positiveText: "确认退出",
          negativeText: "取消",
          onPositiveClick: () => {
            window.ipcRenderer.send("close", "min");
          },
        });
      },
    };
  },
  computed: {
    ...mapState(["layout", "document", "background", "store"]),
    ...mapGetters([
      "sortLayout",
      "activeFile",
      "getBackground",
      "getLocalSlideContent",
      "getFileList",
      "user",
    ]),
    isElectron() {
      return RegExp("electron/").test(navigator.userAgent.toLowerCase());
    },
    maxIconClass() {
      return this.isMax
        ? "iconfont icon-simui-minmax"
        : "iconfont icon-window-maximize";
    },
    shared() {
      return this.activeFile.shared;
    },
  },
  mounted() {
    if (this.isElectron) {
      window.ipcRenderer.on("from-main", (event, arg) => {
        if (arg === "保存完毕") {
          this.saved();
        }
        if (arg === "保存失败") {
          this.unSaved();
        }
      });
    }
  },
  methods: {
    ...mapMutations([
      "changeLayout",
      "updateIActive",
      "changeDocumentFileList",
      "saveIndexDb",
      "changeAccount",
      "addSharedFileList",
      "removeSharedFileList",
    ]),
    open() {
      const file = this.$refs.upload.files[0];
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          var obj = JSON.parse(reader.result);
          //console.log(obj)
          if (obj.type === "v-slide") {
            // some woring working area area
            this.changeLayout(obj.layout);
            this.opened();
            this.currentFile = file.name;
          } else {
            this.unOpened();
          }
        },
        false
      );
      if (file) {
        reader.readAsText(file);
      }
    },
    save() {
      //this.isElectron ? this.electronSave() : this.browserSave();
    },
    browserSave() {
      var jsonFile = {
        fileType: "vslides",
        fileName: "文件名",
        id: nanoid(),
        date: Date.parse(Date()),
        author: this.author,
        tags: this.tags,
        background: this.background,
        getBackground: this.getBackground,
        slides: this.sortLayout,
      };
      var json = JSON.stringify(jsonFile, null, "\t");
      let blob = new Blob([json], { type: "text/plain;charset=utf-8" });
      saveAs(blob, this.fileName + ".json");
    },
    electronSave() {
      var jsonFile = {
        type: "v-slide",
        date: Date.parse(Date()),
        author: this.author,
        tags: this.tags,
        slides: this.sortLayout,
      };
      var json = JSON.stringify(jsonFile, null, "\t");
      window.ipcRenderer.send("saveFile", json);
    },
    min() {
      window.ipcRenderer.send("minimize", "min");
    },
    max() {
      this.isMax = !this.isMax;
      window.ipcRenderer.send("maximize", "max");
    },
    //webSave
    webSave() {
      this.document.allFiles[this.document.activeIndex].layout = JSON.parse(
        JSON.stringify(this.sortLayout)
      );
      this.success("保存成功");
    },
    saveIndexDB() {
      const fileList = JSON.parse(JSON.stringify(this.getFileList));
      fileList[this.document.activeIndex].slides = JSON.parse(
        JSON.stringify(this.sortLayout)
      );
      fileList[this.document.activeIndex].background = JSON.parse(
        JSON.stringify(this.background)
      );
      fileList[this.document.activeIndex].getBackground = JSON.parse(
        JSON.stringify(this.getBackground)
      );
      this.changeDocumentFileList({ fileList });
      //save
      const slideContent = JSON.parse(
        JSON.stringify(this.getLocalSlideContent)
      );
      this.store.set("slideContent", slideContent, (err) => {
        if (err) {
          this.error("保存slideContent出错");
          throw err;
        }
      });
      this.store.set("fileList", fileList, (err) => {
        if (err) {
          this.error("保存fileList出错");
          throw err;
        }
      });
      this.success("保存成功");
    },
    err(msg, err) {
      this.error(msg);
      console.log(msg, err);
    },
    downloadFile() {
      const activeFile = toRaw(this.activeFile);
      var json = JSON.stringify(activeFile, null, "\t");
      let blob = new Blob([json], { type: "text/plain;charset=utf-8" });
      saveAs(blob, activeFile.fileName + ".json");
    },
  },
};
</script>

<style scoped>
.toolbar {
  width: 100%;
  background: linear-gradient(to top, rgb(220, 209, 209), rgb(186, 172, 172));
  display: grid;
  grid-template-rows: 20px;
  grid-template-columns: 300px 1fr 200px;
}
.menu {
  list-style: none;
  padding-left: 0px;
}
.menu li {
  float: left;
  line-height: 20px;
  height: 20px;
  margin: 0px;
  padding: 0 3px;
  text-align: center;
}
.win {
  list-style: none;
  padding-left: 0px;
}
.win li {
  float: right;
  line-height: 20px;
  height: 20px;
  margin: 0px;
  padding: 0 10px;
  text-align: center;
}
li {
  font-family: Georgia, "Times New Roman", Times, serif;
  color: black;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
}

li:hover {
  background-color: rgb(176, 165, 154);
}
</style>
