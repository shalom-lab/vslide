<template>
  <n-drawer :key="key" v-model:show="show" :mask-closable="true" width="400" height="400" placement="right" show-mask="transparent">
    <n-drawer-content header-style="margin:0 auto">
      <n-tabs type="card" v-model:value="editBg.mode">
        <n-tab-pane name="pure" tab="纯色">
          <n-space vertical size="small">
            <n-color-picker v-model:value="editBg.pure" />
            <div class="template" :style="{background:editBg.pure}" />
            <div class="preset">
              <div v-for="(item,i) in pures" :key="i" :style="{background:item}" @click="this.editBg.pure = item" />
            </div>
          </n-space>
        </n-tab-pane>

        <n-tab-pane name="linear" tab="线性渐变">
          <n-space vertical size="small">
            <n-input-group>
              <n-input-group-label :style="{ width: '30%' }">角度:</n-input-group-label>
              <n-input-number :style="{ width: '70%' }" v-model:value="editBg.linear.angle" />
            </n-input-group>
            <n-input-group>
              <n-input-group-label :style="{ width: '30%' }">起始色</n-input-group-label>
              <n-color-picker :style="{ width: '70%' }" v-model:value="editBg.linear.start" />
            </n-input-group>
            <n-input-group>
              <n-input-group-label :style="{ width: '30%' }">终止色</n-input-group-label>
              <n-color-picker :style="{ width: '70%' }" v-model:value="editBg.linear.end" />
            </n-input-group>
            <div class="template" :style="{background:linear(editBg.linear)}" />
            <div class="preset">
              <div v-for="(item,i) in linears" :key="i" :style="{background:linear(item)}" @click="this.editBg.linear = JSON.parse(JSON.stringify(item))" />
            </div>
          </n-space>
        </n-tab-pane>

        <n-tab-pane name="radial" tab="径向渐变">
          <n-space vertical size="small">
            <n-input-group>
              <n-input-group-label :style="{ width: '30%' }">形状</n-input-group-label>
              <n-select :style="{ width: '70%' }" v-model:value="editBg.radial.shape" :options="options" />
            </n-input-group>
            <n-input-group>
              <n-input-group-label :style="{ width: '30%' }">起始色</n-input-group-label>
              <n-color-picker :style="{ width: '70%' }" v-model:value="editBg.radial.start" />
            </n-input-group>
            <n-input-group>
              <n-input-group-label :style="{ width: '30%' }">终止色</n-input-group-label>
              <n-color-picker :style="{ width: '70%' }" v-model:value="editBg.radial.end" />
            </n-input-group>
            <div class="template" :style="{background:radial(editBg.radial)}" />
            <div class="preset">
              <div class="template" v-for="(item,i) in radials" :key="i" :style="{background:radial(item)}" @click="this.editBg.radial = JSON.parse(JSON.stringify(item))" />
            </div>
          </n-space>
        </n-tab-pane>

        <n-tab-pane name="texture" tab="纹理">
          <n-space vertical size="small">
            <n-button :style="{ width: '100%' }" @click="this.$refs.texture.click()">纹理图片</n-button>
            <input ref="texture" @change="inputTexture" style="display: none" type="file" accept=".jpeg,.jpg,.png">
            <div class="template" :style="{background:texture(editBg.texture)}" />
            <div class="preset">
              <div class="template" v-for="(item,i) in textures" :key="i" :style="{background:texture(item)}" @click="this.editBg.texture = JSON.parse(JSON.stringify(item))" />
            </div>
          </n-space>
        </n-tab-pane>

        <n-tab-pane name="image" tab="图片">
          <n-space vertical size="small">
            <n-button :style="{ width: '100%' }" @click="this.$refs.image.click()">背景图片</n-button>
            <input ref="image" @change="inputImage" style="display: none" type="file" accept=".jpeg,.jpg,.png">
            <div class="template" :style="{background:image(editBg.image)}" />
          </n-space>
        </n-tab-pane>

        <n-tab-pane name="custom" tab="自定义">
          <n-space vertical size="small">
            <n-input v-model:value="editBg.custom" />
            <div class="template" :style="{background:editBg.custom}" />
          </n-space>
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
  data() {
    return {
      key: 1,
      show: false,
      editBg: null,
      options: [
        { label: "椭圆", value: "ellipse" },
        { label: "圆", value: "circle" },
      ],
      pures: ["#fcfcfc"],
      radials: [
        {
          shape: "ellipse",
          start: "#B1C5CBFF",
          end: "#4F5355FF",
        },
        {
          shape: "ellipse",
          start: "rgba(58,153,178,0.5)",
          end: "rgba(13,56,112,0.5)",
        },
        {
          shape: "ellipse",
          start: "rgba(119,52,106,0.5)",
          end: "rgba(58,36,80,0.5)",
        },
        {
          shape: "ellipse",
          start: "rgba(231,75,30,0.5)",
          end: "rgba(147,29,9,0.5)",
        },
      ],
      linears: [
        { angle: 34, start: "rgba(66,127,115,1)", end: "rgba(2,0,36,1)" },
        { angle: 34, start: "rgba(58,153,178,1)", end: "rgba(13,56,112,1)" },
        { angle: 34, start: "rgba(119,52,106,1)", end: "rgba(58,36,80,1)" },
        { angle: 34, start: "rgba(231,75,30,1)", end: "rgba(147,29,9,1)" },
      ],
      textures: [],
    };
  },
  computed: {
    ...mapState(["background"]),
    linear() {
      return (obj) => {
        return `linear-gradient(${obj.angle}deg, ${obj.start}, ${obj.end})`;
      };
    },
    radial() {
      return (obj) => {
        return `radial-gradient(${obj.shape}, ${obj.start}, ${obj.end})`;
      };
    },
    image() {
      return (obj) => {
        return `url(${obj.src}) no-repeat ${obj.x} ${obj.y} /  ${obj.width} ${obj.height}`;
      };
    },
    texture() {
      return (obj) => {
        return `url(${obj.src}) repeat`;
      };
    },
  },
  mounted() {
    //console.log("Editbg mounted");
    this.editBg = JSON.parse(JSON.stringify(this.background));
  },
  watch: {
    editBg: {
      deep: true,
      handler(val) {
        const background = JSON.parse(JSON.stringify(val));
        this.changeBackground({ background });
      },
    },
  },
  methods: {
    ...mapMutations(["changeBackground"]),
    changeMode(val) {
      //console.log(val);
    },
    inputImage(key) {
      const file = this.$refs.image.files[0];
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          var value = reader.result;
          this.editBg.image.src = reader.result;
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
    },
    inputTexture() {
      const file = this.$refs.texture.files[0];
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          // convert image file to base64 string
          //console.log("texture");
          this.editBg.texture.src = reader.result;
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

<style scouped>
.template {
  width: 100%;
  height: 200px;
}
.template:hover {
  outline: 1px solid rgb(191, 141, 141);
  box-shadow: 1px 1px 0px rgba(178, 199, 199, 0.575);
}
.preset {
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: space-between;
  /* grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 100px); */
}
.preset div {
  width: 49.5%;
  height: 100px;
  margin: 1px 0;
}
.preset div:hover {
  outline: 1px solid rgb(191, 141, 141);
}
</style>
