
<template>
  <n-drawer v-model:show="show" :mask-closable="true" width="348" placement="right" content-style="padding:0">
    <n-drawer-content header-style="margin:0 auto">
      <n-tabs type="card">

        <n-tab-pane name="bar" tab="柱状图">
          <n-space vertical :size="size">
            <div v-for="(atom,i) in bar" :key=i @dblclick="newItem(atom.atomContent.atomName)" class="new" :class={super:atom.super}>
              <atom :atomType="atom.atomType" :atomContent="atom.atomContent"></atom>
            </div>
          </n-space>
        </n-tab-pane>

        <n-tab-pane name="line" tab="折线图">
          <n-space vertical :size="size">
            <div v-for="(atom,i) in line" :key=i @dblclick="newItem(atom.atomContent.atomName)" class="new" :class={super:atom.super}>
              <atom :atomType="atom.atomType" :atomContent="atom.atomContent"></atom>
            </div>
          </n-space>
        </n-tab-pane>

        <n-tab-pane name="map" tab="地图">
          <n-space vertical :size="size">
            <div v-for="(atom,i) in map" :key=i @dblclick="newItem(atom.atomContent.atomName)" class="new" :class={super:atom.super}>
              <atom :atomType="atom.atomType" :atomContent="atom.atomContent"></atom>
            </div>
          </n-space>
        </n-tab-pane>

        <n-tab-pane name="other" tab="其他">
          <n-space vertical :size="size">
            <div v-for="(atom,i) in other" :key=i @dblclick="newItem(atom.atomContent.atomName)" class="new" :class={super:atom.super}>
              <atom :atomType="atom.atomType" :atomContent="atom.atomContent"></atom>
            </div>
          </n-space>
        </n-tab-pane>

        <n-tab-pane name="stat" tab="统计">
          <n-space vertical :size="size">
            <div v-for="(atom,i) in stat" :key=i @dblclick="newItem(atom.atomContent.atomName)" class="new" :class={super:atom.super}>
              <atom :atomType="atom.atomType" :atomContent="atom.atomContent"></atom>
            </div>
          </n-space>
        </n-tab-pane>

        <n-tab-pane name="myAtoms" tab="我的">
          <n-space vertical :size="size">
            <div v-for="(atom,i) in myAtomList" :key=i @dblclick="newMyItem(i)" class="new" :class={super:atom.super}>
              <atom :atomType="atom.atomType" :atomContent="atom.atomContent"></atom>
            </div>
          </n-space>
        </n-tab-pane>

      </n-tabs>
    </n-drawer-content>
    <div id="drawer-target"></div>
    <n-drawer v-model:show="showInner" :mask-closable="true" height="500" placement="bottom" to="#drawer-target">
      <n-drawer-content title="请选择" closable>
        <n-form :label-width="80" :model="form">
          <n-form-item v-if="form.atomName==='map-p'" label="视觉映射层数" path="phone">
            <n-input-number :min="1" v-model:value="form.pieces" placeholder="视觉映射层数" />
          </n-form-item>
          <n-form-item label="地图名称" path="form.mapName">
            <n-input v-model:value="form.mapName" :allow-input="onlyAlpha" placeholder="只允许字母" />
          </n-form-item>
          <n-form-item label="geoJSON地图文件">
            <n-input-group>
              <n-input-group-label :style="{ width: '215px' }">{{form.fileName}}</n-input-group-label>
              <n-button @click="this.$refs.upload.click()">选择文件</n-button>
            </n-input-group>
            <input ref="upload" @change="changeMap()" style="display: none" type="file" class="upload" accept=".json">
          </n-form-item>
          <n-button type="primary" @click="newItemMap()">确认</n-button>
        </n-form>
        <n-divider />
        地图下载:  <a target="_blank" href="http://datav.aliyun.com/portal/school/atlas/area_selector#&lat=35.31736632923788&lng=104.32617187499999&zoom=4">DATAV</a>
      </n-drawer-content>
    </n-drawer>
  </n-drawer>
</template>
<script>
import Atom from "@/components/Atom/Atom.vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import mapDefault from "./shanghai.json";
import useMessage from "@/hooks/useMessage";
import { ref } from "vue";
import { useNotification } from "naive-ui";
export default {
  setup() {
    const message = useMessage();
    const notification = useNotification();
    return {
      ...message,
      onlyAlpha: (value) => /^[a-z]*$/.test(value),
      showInner: ref(false),
      show: ref(false),
      size: 12,
      notify() {
        notification.warning({
          content: "会员专享哟",
          meta: "想不出来",
          duration: 2500,
          keepAliveOnHover: true,
        });
      },
    };
  },
  data() {
    return {
      form: {
        mapName: "shanghai",
        mapObj: mapDefault,
        pieces: 5,
        atomName: "map-c",
        fileName: "默认为上海市地区",
      },
    };
  },
  computed: {
    ...mapState(["atom", "iMax", "localLayout", "account"]),
    ...mapGetters(["blankArea", "myAtomList"]),
    echart() {
      return this.atom.echart;
    },
    bar() {
      var arr = [
        "multi-bar",
        "bi-bar",
        "stack-bar",
        "hor-bar",
        "hor-stack",
        "bar-zoom",
        "bar-line",
        "tm-multi-bar",
      ];
      var obj = {};
      arr.forEach((item) => {
        obj[item] = this.echart[item];
      });
      return obj;
    },
    line() {
      var arr = ["simple-line", "line-zoom", "bar-line"];
      var obj = {};
      arr.forEach((item) => {
        obj[item] = this.echart[item];
      });
      return obj;
    },
    stat() {
      var arr = ["simple-scatter", "simple-bubble", "simple-box", "echart-reg"];
      var obj = {};
      arr.forEach((item) => {
        obj[item] = this.echart[item];
      });
      return obj;
    },
    map() {
      var arr = ["map-c", "map-p"];
      var obj = {};
      arr.forEach((item) => {
        obj[item] = this.echart[item];
      });
      return obj;
    },
    other() {
      var arr = [
        "simple-sankey",
        "simple-funnel",
        "simple-radar",
        "pop-pyramid",
        "simple-pie",
        "heat-map",
        "word-cloud",
      ];
      var obj = {};
      arr.forEach((item) => {
        obj[item] = this.echart[item];
      });
      return obj;
    },
  },
  components: {
    Atom,
  },
  methods: {
    ...mapMutations(["addAtom"]),
    newItem(name) {
      var newAtom = JSON.parse(
        JSON.stringify({
          ...this.echart[name],
          i: String(this.iMax.atom),
          ...this.blankArea,
        })
      );
      if (newAtom.super && this.account.role === "user") {
        this.warning("会员专享");
        return;
      }
      //this.form.atomName = name;
      if (["map-c", "map-p"].includes(name)) {
        this.showInner = true;
        this.form.atomName = name;
      } else {
        this.showInner = false;
        this.addAtom(newAtom);
        this.show = false;
      }
    },
    newMyItem(index) {
      var newAtom = JSON.parse(
        JSON.stringify({
          ...this.myAtomList[index],
          i: String(this.iMax.atom),
          ...this.blankArea,
        })
      );
      if (newAtom.super && this.account.role === "user") {
        this.warning("会员专享");
        return;
      }
      this.addAtom(newAtom);
      this.show = false;
    },
    newItemMap() {
      var arr = this.form.mapObj.features.map((item) => {
        ////console.log(item.properties.name)
        return [item.properties.name, 100];
      });
      // add Atom
      var newAtom = JSON.parse(
        JSON.stringify({
          ...this.echart[this.form.atomName],
          i: String(this.iMax.atom),
          ...this.blankArea,
        })
      );
      newAtom.atomContent.detail.mapName = this.form.mapName;
      newAtom.atomContent.detail.mapObj = this.form.mapObj;
      newAtom.atomContent.detail.sheetData = arr;
      newAtom.atomContent.detail.nr = arr.length - 1;
      ////console.log(newAtom)
      if (this.atomName == "map-p") {
        var obj = newAtom.atomContent.detail.visualMapP.pieces[0];
        newAtom.atomContent.detail.visualMapP.pieces = [];
        for (let i = 0; i < this.pieces; i++) {
          newAtom.atomContent.detail.visualMapP.pieces.push(
            JSON.parse(JSON.stringify(obj))
          );
        }
        ////console.log(newAtom.atomContent.detail.visualMapP.pieces)
      }
      // add map Atom
      this.addAtom(newAtom);
      this.showInner = false;
      this.show = false;
    },
    changeMap() {
      const file = this.$refs.upload.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.form.fileName = file.name;
        this.form.mapObj = JSON.parse(reader.result);
        this.success("上传成功");
      });
      if (file) {
        reader.readAsText(file);
      }
    },
  },
};
</script>

<style scoped>
.new {
  background-color: rgb(247, 248, 250);
  width: 100%;
  height: 200px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: -2px -2px 5px rgba(243, 245, 247, 0.863);
  box-shadow: 2px 2px 5px rgba(112, 128, 144, 0.493);
}
.new:hover {
  outline: 1px solid rgb(191, 141, 141);
}
.new:hover::before {
  content: "双击插入";
  font-size: 14;
  font-weight: 600;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.super::after {
  content: "会员专享";
  font-size: 12px;
  font-weight: 600;
  width: 100px;
  height: 25px;
  line-height: 25px;
  color: #fdfdfd;
  text-align: center;
  background-color: salmon;
  position: absolute;
  right: 0px;
  top: 0px;
  transform: rotate(45deg) translateX(25%) translateY(-50%);
  letter-spacing: 1px;
  cursor: pointer;
}
</style>
