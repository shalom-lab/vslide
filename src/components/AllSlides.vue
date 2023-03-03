<template>
  <div class="root" :style="{height:innerSize.height-64+'px'}">
    <div style="display: flex; flex-direction: row-reverse; padding-right: 10px;">
      <n-button quaternary circle type="primary" size="small" @click="this.listMode = !this.listMode">
        <template #icon>
          <n-icon>
            <GridOutline v-if="!listMode" />
            <ListSharp v-if="listMode" />
          </n-icon>
        </template>
      </n-button>
    </div>
    <n-card v-if="listMode" :bordered="false">
      <n-space vertical>
        <n-data-table :bordered="false" size="small" :columns="columns" :data="fileList">
          <template #empty>
            <n-empty description="无数据">
            </n-empty>
          </template>
        </n-data-table>
        <n-button-group>
          <n-popover trigger="hover">
            <template #trigger>
              <n-button round @click="newFile()"> 新建 </n-button>
            </template>
            <span>创建新文件</span>
          </n-popover>
          <n-popover trigger="hover">
            <template #trigger>
              <n-button round @click="this.$refs.upload.click()">
                上传
              </n-button>
            </template>
            <span>上传本地文件</span>
          </n-popover>
        </n-button-group>
      </n-space>
    </n-card>
    <input ref="upload" @change="uploadFile()" style="display: none" type="file" accept=".json" />
    <div class="workingslide" v-if="!listMode">
      <n-card class="layout" hoverable v-contextmenu:contextmenu-atom v-for="(vslide, i) in fileList" :key="i" header-style="padding:5px 10px" content-style="padding:5px 10px" footer-style="padding:5px 10px" @click="fileActive(i)" @contextmenu="fileActive(i)">
        <template #header>
          <n-input autosize size="small" maxlength="10" v-model:value="vslide.fileName" style="border: 0px"></n-input>
        </template>
        <template #header-extra>
          {{ `${dayjs(vslide.date).format("YYYY-MM-DD HH:mm:ss ")}` }}
          <n-button v-if="vslide.shared" text style="padding-left: 10px" @click="showShare(i)">
            <template #icon>
              <n-icon>
                <CloudDoneOutline />
              </n-icon>
            </template>
          </n-button>
        </template>
        <div class="cover" :style="{ background: vslide.getBackground }">
          <v-slide :slideContent="
              JSON.parse(JSON.stringify(vslide.slides[0].slideContent))
            " :height="720" />
        </div>
        <template #footer>
          <n-dynamic-tags v-model:value="vslide.tags" :max="5" />
        </template>
      </n-card>
      <n-card class="new" hoverable>
        <n-button-group>
          <n-popover trigger="hover">
            <template #trigger>
              <n-button round @click="newFile()"> 新建 </n-button>
            </template>
            <span>创建新文件</span>
          </n-popover>
          <n-popover trigger="hover">
            <template #trigger>
              <n-button round @click="this.$refs.upload.click()">
                上传
              </n-button>
            </template>
            <span>上传本地文件</span>
          </n-popover>
        </n-button-group>
      </n-card>
      <n-card class="hide"></n-card>
      <n-card class="hide"></n-card>
    </div>
    <v-contextmenu ref="contextmenu-atom">
      <v-contextmenu-item @click="push('edit')"><i class="iconfont icon-edit" /> 编辑</v-contextmenu-item>
      <v-contextmenu-divider />
      <v-contextmenu-item @click="push('play')"><i class="iconfont icon-play" /> 放映</v-contextmenu-item>
      <v-contextmenu-divider />
      <v-contextmenu-item @click="push('view')"><i class="iconfont icon-view" /> 浏览</v-contextmenu-item>
      <v-contextmenu-divider />
      <v-contextmenu-item @click="push('doc')"><i class="iconfont icon-doc" /> 文稿</v-contextmenu-item>
      <v-contextmenu-divider />
      <v-contextmenu-item @click="copyFile()"><i class="iconfont icon-copy" /> 复制</v-contextmenu-item>
      <v-contextmenu-divider />
      <v-contextmenu-item @click="deleteFile()"><i class="iconfont icon-delete" /> 删除
      </v-contextmenu-item>
      <v-contextmenu-divider />
      <v-contextmenu-item @click="downloadFile(this.document.activeIndex)"><i class="iconfont icon-download" /> 下载
      </v-contextmenu-item>
    </v-contextmenu>
    <n-modal v-model:show="showModalCloud">
      <n-card style="width: 500px; border-radius: 5px" role="dialog" aria-modal="true" content-style="padding:0px 20px 24px 24px" :bordered="false" title="公开分享">
        <template #header-extra>
          <n-switch v-model:value="sharedRef" />
        </template>
        <n-space vertical>
          <template v-if="!this.activeFile.shared">
            开启后，所有获得链接的人皆可访问。分享内容需符合国家法律法规。
          </template>
          <template v-if="this.activeFile.shared">
            已公开，所有获得链接的人皆可访问。分享内容需符合国家法律法规。
            <n-input-group>
              <n-input :style="{ width: '500px' }" disabled :value="activeFileLink" />
              <n-button type="primary" @click="copyLink(activeFileLink)">
                复制链接
              </n-button>
            </n-input-group>
          </template>
        </n-space>
      </n-card>
    </n-modal>
  </div>
</template>

<script>
import { ref, toRaw, h, computed, markRaw } from "vue";
import { mapState, mapGetters, mapMutations, useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import useMessage from "@/hooks/useMessage";
import dayjs from "@/hooks/useDayjs";
import { nanoid } from "nanoid";
import { saveAs } from "file-saver";
import {
  NTag,
  NButton,
  NInput,
  NDynamicTags,
  NPopselect,
  NIcon,
} from "naive-ui";
import {
  GridOutline,
  ListSharp,
  CloudDoneOutline,
  EllipsisHorizontalSharp,
} from "@vicons/ionicons5";
import copy from "copy-to-clipboard";

export default {
  components: {
    GridOutline,
    ListSharp,
    CloudDoneOutline,
  },
  name: "all-slides",
  setup() {
    const message = useMessage();
    const store = useStore();
    const fileList = computed(() => store.state.document.fileList);
    const options = [
      { label: "编辑", value: "edit" },
      { label: "放映", value: "play" },
      { label: "浏览", value: "view" },
      { label: "文稿", value: "doc" },
      { label: "复制", value: "copy" },
      { label: "删除", value: "remove" },
      { label: "下载", value: "download" },
    ];
    const createColumns = () => {
      return [
        {
          title: "文件名",
          key: "fileName",
          //defaultSortOrder: 'ascend',
          //sorter: 'default',
          render(row, index) {
            return h(NInput, {
              maxlength: 10,
              autosize: false,
              placeholder: "文件名",
              value: row.fileName,
              //size: "small",
              onUpdateValue(v) {
                const idList = toRaw(fileList.value).map((file) => file.id);
                const index = idList.indexOf(row.id); // addfile
                fileList.value[index].fileName = v;
              },
            });
          },
        },
        {
          title: "创建时间",
          key: "date",
          render(row) {
            return dayjs(row.date).format("YYYY-MM-DD HH:mm:ss");
          },
          sorter: (row1, row2) => row1.date - row2.date,
        },
        {
          title: "标签",
          key: "tags",
          //defaultSortOrder: 'ascend',
          //sorter: 'default',
          render(row, index) {
            const tags = h(NDynamicTags, {
              style: {
                marginRight: "6px",
              },
              //size: "small",
              //type: "info",
              bordered: false,
              max: 5,
              value: row.tags,
              onUpdateValue(v) {
                const idList = toRaw(fileList.value).map((file) => file.id);
                const index = idList.indexOf(row.id); // addfile
                fileList.value[index].tags = v;
              },
            });
            return tags;
          },
        },
        {
          title: "分享中",
          key: "shared",
          render(row) {
            return row.shared
              ? h(NIcon, { size: 20, color: "#FD803FF0" }, h(CloudDoneOutline))
              : "";
          },
        },
        {
          title: "操作",
          key: "fileType",
          render(row, index) {
            return h(
              NPopselect,
              {
                options: options,
                onUpdateValue(v) {
                  const idList = toRaw(fileList.value).map((file) => file.id);
                  const activeIndex = idList.indexOf(row.id); // addfile
                  const index = activeIndex; //removefile
                  changeDocumentActiveIndex({ activeIndex });
                  switch (v) {
                    case "edit":
                    case "play":
                    case "view":
                    case "doc":
                      push(v);
                      break;
                    case "copy":
                      const file = getFile(index);
                      addFile({ file });
                      break;
                    case "remove":
                      if (row.shared === true) {
                        message.info("文稿公开分享中,请取消分享后再删除");
                      } else {
                        removeFile({ index });
                        //console.log("row.id", row.id);
                        removeSharedFileList({ _id: row.id });
                      }
                      break;
                    case "download":
                      downloadFile(index);
                      break;
                  }
                },
              },
              h(
                NButton,
                { text: true, style: { fontSize: "24px" }, size: "small" },
                h(NIcon, h(EllipsisHorizontalSharp))
              )
            );
          },
        },
      ];
    };
    //copylink
    const copyLink = (url) => {
      copy(url);
      copy(url);
      message.success("复制成功");
    };
    const columns = createColumns();
    //file
    const getFile = (index) => {
      const file = toRaw(fileList.value)[index];
      return {
        ...file,
        id: nanoid(),
        date: Date.parse(new Date()),
        shared: false,
      };
    };
    //mutation File
    const addFile = (file) => store.commit("addFile", file);
    const removeFile = (index) => store.commit("removeFile", index);
    const changeDocumentActiveIndex = (activeIndex) => {
      store.commit("changeDocumentActiveIndex", activeIndex);
    };
    const removeSharedFileList = (payload) =>
      store.commit("removeSharedFileList", payload);
    const downloadFile = (index) => {
      const activeFile = toRaw(fileList.value)[index];
      var json = JSON.stringify(activeFile, null, "\t");
      let blob = new Blob([json], { type: "text/plain;charset=utf-8" });
      saveAs(blob, activeFile.fileName + ".json");
    };
    //router
    const router = useRouter();
    const route = useRoute();
    const push = (name) => {
      router.push({ name });
    };
    return {
      ...message,
      dayjs,
      columns,
      changeDocumentActiveIndex,
      fileList,
      getFile,
      addFile,
      removeFile,
      downloadFile,
      copyLink,
      //router
      push,
      listMode: ref(false),
      key: ref(1),
      showModalCloud: ref(false),
      sharedRef: ref(true),
      basePath:
        "cloud://cloud1-6gje6dbjbdbca85f.636c-cloud1-6gje6dbjbdbca85f-1312763637/vslide-file/",
    };
  },
  computed: {
    ...mapState(["document", "store", "layout", "template", "innerSize"]),
    ...mapGetters(["activeFile", "user"]),
    activeFileLink() {
      return `https://vslide.cn/slides?showPage=false&id=${this.activeFile.id}`;
    },
  },
  methods: {
    ...mapMutations([
      "changeAccount",
      "addSharedFileList",
      "removeSharedFileList",
    ]),
    fileActive(i) {
      const activeIndex = i;
      this.changeDocumentActiveIndex({ activeIndex });
    },
    newFile() {
      var vslides = JSON.parse(JSON.stringify(this.template.vslides));
      vslides.slides[0].slideContent = [];
      vslides.slides = [vslides.slides[0]];
      var file = {
        ...vslides,
        id: nanoid(),
        date: Date.parse(new Date()),
        shared: false,
      };
      this.addFile({ file });
      this.saveIndexDb()
    },
    copyFile() {
      var file = this.getFile(this.document.activeIndex);
      this.addFile({ file });
      this.saveIndexDb()
    },
    deleteFile() {
      const shared = this.activeFile.shared;
      if (shared) {
        this.info("文稿公开分享中,请取消分享后再删除");
        return;
      }
      const index = this.document.activeIndex;
      this.removeFile({ index });
      this.saveIndexDb()
    },
    uploadFile() {
      const file = this.$refs.upload.files[0];
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          var obj = JSON.parse(reader.result);
          console.log('上传了',obj)
          if (obj.fileType === "vslideFile") {
            let file = {
              ...obj,
              id: nanoid(),
              date: Date.parse(new Date()),
              shared: false,
            };
            this.addFile({ file });
            this.success("上传成功");
            this.saveIndexDb();
          } else {
            this.error("格式错误,请打开vslide文件");
          }
        },
        false
      );
      if (file) {
        reader.readAsText(file);
      }
    },
    saveIndexDb() {
      const fileList = JSON.parse(JSON.stringify(this.fileList));
      this.store.set("fileList", fileList, (err) => {
        if (err) {
          this.error("保存到IndexDB出错");
          throw err;
        }
      });
    },
    //shared
    showShare(i) {
      const activeIndex = i;
      this.changeDocumentActiveIndex({ activeIndex });
      this.showModalCloud = true;
      this.sharedRef = this.activeFile.shared;
    },
    err(msg, err) {
      this.error(msg);
      //console.log(msg, err);
    }
  },
  unmounted() {
    this.saveIndexDb();
  },
  watch: {
    sharedRef(val) {
      if (val === true) {
        this.pushFile();
      } else {
        this.unpushFile();
      }
    },
  },
};
</script>

<style scoped>
.root {
  width: 100%;
  overflow-y: scroll;
}
.workingslide {
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: left;
}

::-webkit-scrollbar {
  display: none;
}

.layout,
.new,
.hide {
  margin: 20px;
  width: 30%;
  min-width: 300px;
  height: 300px;
  border-radius: 10px;
}

.new {
  text-align: center;
  padding-top: 100px;
}

.hide {
  visibility: hidden;
}

.cover {
  width: 400%;
  height: 400%;
  transform: scale(0.25);
  transform-origin: 0 0;
  cursor: pointer;
}
</style>
