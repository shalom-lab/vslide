<template>
  <n-carousel v-bind="props" v-model:current-index="currentIndex" ref="carousel" :style="{ width: '100%', height: '100%' }">
    <v-slide v-for="(slide, i) in slides" :key="i" :slideContent="slide.slideContent" :height="height" />
  </n-carousel>
  <span class="footer">{{this.currentIndex+1}}/{{this.slides.length}}</span>
</template>

<script>
import { slides } from "@/Template";

export default {
  name: "v-slides-view",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    slides: {
      type: Array,
      default: slides,
    },
    height: {
      type: Number,
      default: window.innerHeight || 600,
    },
    showPage: {
      type: Boolean,
      default: true,
    },
    props: {
      type: Object,
      default: {
        direction: "horizontal",
        "dot-type": "line",
        "dot-placement": "bottom",
        "show-arrow": true,
        trigger: "hover",
        loop: true,
        effect: "slide",
      },
    },
  },
  mounted() {
    document.onkeydown = (event) => {
      let key = window.event.keyCode;
      switch (key) {
        case 27: //Esc
        case 69: //E
          if (this.$router.hasRoute("edit")) {
            this.$router.push("/edit");
          }
          break;
        case 80: //P
          if (this.$router.hasRoute("play")) {
            this.$router.push("/play");
          }
          break;
        case 39: //→
        case 40: //↓
        case 32: //Space
        case 13: //Enter
        case 68: //D
        case 83: //S
          this.$refs.carousel.next();
          break;
        case 37: //←
        case 38: //↑
        case 65: //A
        case 87: //W
          this.$refs.carousel.prev();
          break;
      }
    };
  },
};
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 5px;
  color: silver;
}
</style>

