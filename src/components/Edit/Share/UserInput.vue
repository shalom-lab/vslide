<template>
  <n-grid :cols="7" style="height:34px">
    <n-grid-item span="3" style="background-color:rgb(250, 250, 250);font-weight: bold;width:100%;height:100%;box-sizing:border-box;border:1px solid #eaeaee;text-align:center;line-height:34px;height:34px;margin:0 auto">
      {{info.label}}:
    </n-grid-item>
    <n-grid-item span="4" style="height:34px">
      <n-input v-if="info.type==='text'" :default-value="info.value" placeholder="请输入" @update:value="change($event,info.id)" />

      <n-input-number v-if="info.type==='number'" :default-value="info.value" placeholder="请输入" @update:value="change($event,info.id)" />

      <div v-if="info.type==='switch'" style="width:100%;height:100%;box-sizing:border-box;border:1px solid #eaeaee;text-align:left;line-height:34px;height:34px;margin:0 auto">
        <n-switch :default-value="info.value" style="height:100%;padding: 0px 10px" @update:value="change($event,info.id)" />
      </div>

      <n-color-picker v-if="info.type==='color'" :default-value="info.value" @update:value="change($event,info.id)" />

      <n-select v-if="info.type==='select'" :default-value="info.value" :options="info.options" @update:value="change($event,info.id)" />

      <template v-if="info.type==='image'">
        <n-input-group>
          <n-input :style="{ width: '80%' }" :default-value="info.value" @update:value="change($event,info.id)" />
          <n-button @click="this.$refs.upload.click()">本地图片</n-button>
        </n-input-group>
        <input ref="upload" style="display: none" type="file" @change="changeImage(info.id)" class="upload" accept=".jpeg,.jpg,.png">
      </template>

    </n-grid-item>
  </n-grid>
</template>

<script>
import { mapMutations } from "vuex";
import { inject } from "vue";

export default {
  setup() {
    const menuValue = inject("menuValue", "layout");
    return {
      menuValue,
    };
  },
  props: {
    info: Object,
  },
  components: {
    //MdEditor
  },
  methods: {
    ...mapMutations(["changeAtom"]),
    change(value, key) {
      //console.log(key, value, this.menuValue);
      this.changeAtom({ key, value, menuValue: this.menuValue });
    },
    changeImage(key) {
      const file = this.$refs.upload.files[0];
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
      }
      reader.addEventListener(
        "load",
        () => {
          // convert image file to base64 string
          var value = reader.result;
          this.changeAtom({ key, value, menuValue: this.menuValue });
        },
        false
      );
    },
  },
};
</script>

<style scoped>
</style>
