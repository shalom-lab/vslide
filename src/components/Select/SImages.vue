
<template>
  <n-drawer v-model:show="show" :mask-closable="true" width="348" placement="right" content-style="padding:0">
    <n-drawer-content header-style="margin:0 auto">
      <n-tabs type="card">
        <n-tab-pane name="bar" tab="图片">
          <n-space vertical size="small">
            <div v-for="(atom,i) in images" :key=i @dblclick="newItem(atom.atomContent.atomName)" style="width:100%;height:200px" class="new">
              <atom :atomType="atom.atomType" :atomContent="atom.atomContent"></atom>
            </div>
          </n-space>
        </n-tab-pane>
      </n-tabs>
    </n-drawer-content>
    <div id="drawer-target"></div>
    <n-drawer v-model:show="showInner" :mask-closable="false" height="200" placement="bottom" to="#drawer-target">
      <n-drawer-content title="请选择" closable>
        <n-input-group>
          <n-input-group-label>张数</n-input-group-label>
          <n-input-number :min="1" v-model:value="n" :style="{ width: '50%' }" />
          <n-button type="primary" ghost @click="dynamicItem('image-group')">确认</n-button>
        </n-input-group>
      </n-drawer-content>
    </n-drawer>
  </n-drawer>
</template>
<script>
import Atom from "@/components/Atom/Atom.vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import { ref } from "vue";

export default {
  setup() {
    return {
      showInner: ref(false),
      show: ref(false),
    };
  },
  data() {
    return {
      n: 3,
    };
  },
  computed: {
    ...mapState(["atom", "iMax"]),
    ...mapGetters(["blankArea"]),
    images() {
      return this.atom.images;
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
          ...this.images[name],
          i: String(this.iMax.atom),
          ...this.blankArea,
        })
      );
      if (name == "image-group") {
        this.showInner = true;
      } else {
        this.showInner = false;
        this.addAtom(newAtom);
        this.show = false;
      }
    },
    dynamicItem(name) {
      var newAtom = JSON.parse(
        JSON.stringify({
          ...this.images[name],
          i: String(this.iMax.atom),
          ...this.blankArea,
        })
      );
      var obj = newAtom.atomContent.detail.src[0];
      newAtom.atomContent.detail.src = [];
      for (let i = 0; i < this.n; i++) {
        newAtom.atomContent.detail.src.push(obj);
      }
      this.addAtom(newAtom);
      this.showInner = false;
      this.show = false;
    },
  },
};
</script>

<style scoped>
.new {
  background-color: rgba(233, 230, 230, 0.945);
  transform: scale(1);
}
.new:hover {
  outline: 1px solid rgb(191, 141, 141);
}
</style>
