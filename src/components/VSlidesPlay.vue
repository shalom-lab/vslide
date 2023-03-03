<template>
  <div :style="{width:'100%',height: height+ 'px',background:background,overflow:'hidden'}">
    <animated-transition :enter="slideAnimation.enter" :leave="slideAnimation.leave">
      <div v-if="show" :style="{width:'100%',height: height+ 'px'}" class="vslidesplay">
        <grid-layout class="gridlayout" :layout="slideContent" :col-num="18" :row-height="Math.floor(height/18)" :is-draggable="false" :is-resizable="false" :vertical-compact="false" :preventCollision="false" :margin="[5, 5]" :use-css-transforms="false" style="height:100%">
          <grid-item v-for="atom in slideContent" class="insideGridItem" :x="atom.x" :y="atom.y" :w="atom.w" :h="atom.h" :i="atom.i" :key="atom.i" :static="atom.static">
            <div class="nodrag" v-bind:style="{ 'border-width': atom.atomBorder.width  + 'px', 'border-style': atom.atomBorder.type, 'border-color': atom.atomBorder.color, 'border-radius': atom.atomBorder.radius + 'px', 'box-sizing': 'border-box' }">
              <animated-transition :enter="atom.atomAnimation.enter" :leave="atom.atomAnimation.leave">
                <div v-show="step >= atom.atomAnimation.order" style="width:100%;height:100%">
                  <atom :atomType="atom.atomType" :atomContent="atom.atomContent"></atom>
                </div>
              </animated-transition>
            </div>
          </grid-item>
        </grid-layout>
        <span v-if="showPage" class="footer">{{this.slideIndex+1}}/{{this.slides.length}}</span>
      </div>
    </animated-transition>
  </div>
</template>

<script>
import Atom from "@/components/Atom/Atom.vue";
import AnimatedTransition from "@/components/AnimatedTransition.vue";
import { GridLayout, GridItem } from "@/components/gridlayout.js";
import { slides } from "@/Template";

export default {
  name: "v-slides-play",
  props: {
    slides: {
      type: Array,
      default: slides,
    },
    height: {
      type: Number,
      default: window.innerHeight,
    },
    background: String,
    showPage: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      show: true,
      slideIndex: 0,
      step: 1,
    };
  },
  computed: {
    currentSlide() {
      return this.slides[this.slideIndex];
    },
    slideContent() {
      return this.currentSlide.slideContent;
    },
    slideAnimation() {
      return this.currentSlide.slideAnimation;
    },
    steps() {
      return this.slideAnimation.steps;
    },
  },
  components: {
    Atom,
    AnimatedTransition,
    GridLayout,
    GridItem,
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
        case 86: //V
          if (this.$router.hasRoute("view")) {
            this.$router.push("/view");
          }
          break;
        case 39: //→
        case 40: //↓
        case 32: //Space
        case 13: //Enter
        case 68: //D
        case 83: //S
          ////console.log("下一项", this.slides);
          if (this.step === this.steps) {
            if (this.slideIndex == this.slides.length - 1) {
              this.slideIndex = 0;
            } else {
              this.slideIndex++;
            }
            this.step = 1;
            //slide Animation
            this.show = false;
            this.$nextTick(() => {
              this.show = true;
            });
          } else {
            this.step++;
          }
          break;
        case 37: //←
        case 38: //↑
        case 65: //A
        case 87: //W
          ////console.log('上一页')
          if (this.slideIndex === 0) {
            this.slideIndex = this.slides.length - 1;
          } else {
            this.slideIndex--;
          }
          this.step = 1;
          this.show = false;
          this.$nextTick(() => {
            this.show = true;
          });
      }
    };
  },
};
</script>

<style scoped>
.nodrag {
  height: 100%;
  overflow: hidden;
}

.footer {
  position: absolute;
  bottom: 5px;
  color: silver;
}
</style>


