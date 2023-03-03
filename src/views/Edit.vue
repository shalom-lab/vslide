<template>
  <div class="home" v-bind:style="{ gridTemplateRows: '20px 80px '+ (innerSize.height-120) +'px 20px' }">
    <toolbar></toolbar>
    <top></top>
    <main>
      <div class="left">
        <left></left>
      </div>
      <div class="right">
        <right></right>
      </div>
    </main>
    <footer class="footer"><a href="vslide.cn">www.vslide.cn</a></footer>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import Top from "@/components/Top.vue";
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "Edit",
  components: {
    Toolbar,
    Top,
    Left,
    Right,
  },
  computed: {
    ...mapState(["innerSize", "workingAreaKey"]),
  },
};
</script>

<style scoped>
.home {
  display: grid;
  height: 100%;
  overflow-y: hidden;
}
main {
  box-sizing: border-box;
  background-color: white;
  border-top: solid 1px grey;
  display: grid;
  grid-template-columns: 250px 1fr;
}
.left {
  box-sizing: border-box;
  border-right: solid 1px rgba(198, 194, 194, 0.603);
  padding: 5px;
  background-color: #e6e6e6;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.right {
  box-sizing: border-box;
  background-color: rgba(233, 230, 230, 0.945);
  padding: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
  box-sizing: border-box;
  box-shadow: 1px 1px 2px #393838fb;
  background-color: rgba(233, 230, 230, 0.945);
}
</style>
