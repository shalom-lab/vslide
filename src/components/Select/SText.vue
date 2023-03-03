
<template>
  <n-drawer v-model:show="show" :mask-closable="true" width="348" placement="right" content-style="padding:0">
    <n-drawer-content header-style="margin:0 auto">
      <n-tabs type="card">
        <n-tab-pane name="bar" tab="文本">
          <n-space vertical size="small">
            <div v-for="(atom,i) in text" :key=i @dblclick="newItem(atom.atomContent.atomName)" style="width:100%;height:200px" class="new">
              <atom :atomType="atom.atomType" :atomContent="atom.atomContent"></atom>
            </div>
          </n-space>
        </n-tab-pane>
      </n-tabs>
    </n-drawer-content>
  </n-drawer>
</template>
<script>
import Atom from "@/components/Atom/Atom.vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import { provide } from "vue";
import { nanoid } from "nanoid";
export default {
  setup() {
    //provide("editMode", true);
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapState(["atom", "iMax"]),
    ...mapGetters(["blankArea"]),
    text() {
      return this.atom.text;
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
          ...this.text[name],
          i: String(this.iMax.atom),
          ...this.blankArea,
        })
      );
      if (newAtom.atomContent.atomName === "text-md") {
        newAtom.atomContent.detail.editorId = nanoid(10);
      }
      ////console.log(newAtom)
      this.addAtom(newAtom);
      this.show = false;
      //this.$store.commit('addItem', { itemName })
    },
  },
};
</script>

<style scoped>
.new {
  background-color: rgba(233, 230, 230, 0.945);
}
.new:hover {
  outline: 1px solid rgb(191, 141, 141);
}
</style>

