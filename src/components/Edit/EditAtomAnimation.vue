<template>
  <n-drawer v-model:show="show" v-if="atomAnimation" :mask-closable="true" width="400" height="400" placement="right" show-mask="transparent">
    <n-drawer-content header-style="margin:0 auto">
      <n-tabs type="card">
        <n-tab-pane v-for="(item,i ) in config" :key="i" :name="item.name" :tab="item.tab" display-directive="show">
          <editor :obj="item.obj" :prefix='item.name' editorOptionKey="atomAnimation" />
        </n-tab-pane>
      </n-tabs>
      <n-divider>幻灯片动画</n-divider>
      <n-space vertical>
        <n-input-group>
          <n-input-group-label :style="{width:'120px'}">进入动画:</n-input-group-label>
          <n-select :default-value="slideAnimation.enter" :options="enterOptions" @update:value="change($event,'enter')" />
        </n-input-group>
        <!-- <n-input-group>
          <n-input-group-label :style="{width:'120px'}">离开动画:</n-input-group-label>
          <n-select :default-value="slideAnimation.leave" :options="leaveOptions" @update:value="change($event,'leave')" />
        </n-input-group> -->
        <n-card content-style="height:100px" :bordered="false">
          <transition :enter-active-class="enter" :duration="1000">
            <h1 v-show="enterFlag" class="animated">VSlide微思文稿</h1>
          </transition>
        </n-card>
        <!-- <n-card content-style="height:100px" :bordered="false">
          <transition :leave-active-class="leave" :duration="1000">
            <h1 v-show="leaveFlag" class="animated">VSlide微思文稿</h1>
          </transition>
        </n-card> -->
      </n-space>
    </n-drawer-content>
  </n-drawer>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { toRaw } from "vue";
import Editor from "@/components/Edit/Share/Editor.vue";

export default {
  components: {
    Editor,
  },
  props: {
    initAtom: Object,
  },
  computed: {
    ...mapState(["layout", "iActive", "iMax"]),
    ...mapGetters([
      "activeSlide",
      "activeAtom",
      "indexActive",
      "activeSlideContent",
    ]),
    slideAnimation() {
      return this.activeSlide.slideAnimation;
    },
    atomAnimation() {
      return this.activeAtom ? this.activeAtom.atomAnimation : null;
    },
    showModel() {
      //展示编辑框
      return this.show && this.atomAnimation;
    },
  },
  watch: {
    "atomAnimation.enter"(val) {
      this.enter = "animate__animated animate__" + val;
      this.enterFlag = false;
      this.$nextTick(() => {
        this.enterFlag = true;
      });
      setTimeout(() => {
        this.enterFlag = false;
        this.enterFlag = true;
      }, 1500);
    },
    "slideAnimation.enter"(val) {
      this.enter = "animate__animated animate__" + val;
      this.enterFlag = false;
      this.$nextTick(() => {
        this.enterFlag = true;
      });
      setTimeout(() => {
        this.enterFlag = false;
        this.enterFlag = true;
      }, 1500);
    },
    "atomAnimation.leave"(val) {
      this.leave = "animate__animated animate__" + val;
      this.leaveFlag = true;
      this.$nextTick(() => {
        this.leaveFlag = false;
      });
      setTimeout(() => {
        this.leaveFlag = true;
      }, 1500);
    },
    "slideAnimation.leave"(val) {
      this.leave = "animate__animated animate__" + val;
      this.leaveFlag = true;
      this.$nextTick(() => {
        this.leaveFlag = false;
      });
      setTimeout(() => {
        this.leaveFlag = true;
      }, 1500);
    },
  },
  setup(props) {
    // initAtom仅用来初始化传值 切断响应式
    var newAtom = toRaw(props.initAtom);
    var atomAnimation = {
      order: newAtom.atomAnimation.order,
      enter: newAtom.atomAnimation.enter,
      //leave: newAtom.atomAnimation.leave
    };
    var config = [
      { name: "atomAnimation", tab: "组件动画", obj: atomAnimation },
    ];
    return {
      config,
    };
  },
  data() {
    return {
      show: true,
      enterFlag: true,
      leaveFlag: true,
      enter: "bounceIn",
      leave: "rollOut",
      enterOptions: [
        { label: "弹跳", value: "bounce" },
        { label: "闪光", value: "flash" },
        { label: "脉冲", value: "pulse" },
        { label: "橡皮筋", value: "rubberBand" },
        { label: "抖动", value: "shake" },
        { label: "摇摆", value: "swing" },
        { label: "tada", value: "tada" },
        { label: "摇晃", value: "wobble" },
        { label: "jello", value: "jello" },
        { label: "心跳", value: "heartBeat" },
        { label: "弹跳进入", value: "bounceIn" },
        { label: "左侧弹跳", value: "bounceInLeft" },
        { label: "右侧弹跳", value: "bounceInRight" },
        { label: "上方弹跳", value: "bounceInUp" },
        { label: "下方弹跳", value: "bounceInDown" },
        { label: "淡入", value: "fadeIn" },
        { label: "左侧淡入", value: "fadeInLeft" },
        { label: "右侧淡入", value: "fadeInRight" },
        { label: "上方淡入", value: "fadeInDown" },
        { label: "下方淡入", value: "fadeInUp" },
        { label: "翻转", value: "flip" },
        { label: "翻转-X", value: "flipInX" },
        { label: "翻转-Y", value: "flipInY" },
        { label: "光速", value: "lightSpeedIn" },
        { label: "旋转", value: "rotateIn" },
        { label: "左侧旋转", value: "rotateInDownLeft" },
        { label: "右侧旋转", value: "rotateInDownRight" },
        { label: "上方旋转", value: "rotateInUpLeft" },
        { label: "下方旋转", value: "rotateInDownRight" },
        { label: "左侧浮入", value: "slideInLeft" },
        { label: "右侧浮入", value: "slideInRight" },
        { label: "下方浮入", value: "slideInUp" },
        { label: "上方浮入", value: "slideInDown" },
        { label: "缩放", value: "zoomIn" },
        { label: "左-缩放", value: "zoomInLeft" },
        { label: "右-缩放", value: "zoomInRight" },
        { label: "上-缩放", value: "zoomInDown" },
        { label: "下-缩放", value: "zoomInUp" },
        { label: "转入", value: "rollIn" },
      ],
      leaveOptions: [
        { label: "弹出", value: "bounceOut" },
        { label: "弹出-左", value: "bounceOutLeft" },
        { label: "弹出-右", value: "bounceOutRight" },
        { label: "弹出-上", value: "bounceOutUp" },
        { label: "弹出-下", value: "bounceOutDown" },
        { label: "淡出", value: "fadeOut" },
        { label: "淡出-左", value: "fadeOutLeft" },
        { label: "淡出-右", value: "fadeOutRight" },
        { label: "淡出-上", value: "fadeOutUp" },
        { label: "淡出-下", value: "fadeOutDown" },
        { label: "翻转-X", value: "flipOutX" },
        { label: "翻转-Y", value: "flipOutY" },
        { label: "光速", value: "lightSpeedOut" },
        { label: "旋转", value: "rotateOut" },
        { label: "旋转-左下", value: "rotateOutDownLeft" },
        { label: "旋转-右下", value: "rotateOutDownRight" },
        { label: "旋转-左上", value: "rotateOutUpLeft" },
        { label: "旋转-右上", value: "rotateOutUpRight" },
        { label: "左侧浮出", value: "slideOutLeft" },
        { label: "右侧浮出", value: "slideOutRight" },
        { label: "上方浮出", value: "slideOutUp" },
        { label: "下方浮出", value: "slideOutDown" },
        { label: "缩放", value: "zoomOut" },
        { label: "缩放-左", value: "zoomOutLeft" },
        { label: "缩放-右", value: "zoomOutRight" },
        { label: "缩放-上", value: "zoomOutUp" },
        { label: "缩放-下", value: "zoomOutDown" },
        { label: "掉落", value: "hinge" },
        { label: "转出", value: "rollOut" },
      ],
    };
  },
  methods: {
    ...mapMutations(["changeSlideAnimation"]),
    change(value, key) {
      this.changeSlideAnimation({ key, value });
    },
    enterChange(val) {
      this.enter = val;
      this.enterFlag = false;
      this.$nextTick(() => {
        this.enterFlag = true;
      });
    },
    leaveChange(val) {
      this.leave = val;
      this.leaveFlag = true;
      this.$nextTick(() => {
        this.leaveFlag = false;
      });
      setTimeout(() => {
        this.leaveFlag = true;
      }, 1500);
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>

