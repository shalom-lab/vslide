<template>
  <div class="vslide" style="width: 100%; height: 100%">
    <grid-layout class="gridlayout" :layout="slideContent" :col-num="18" :row-height="Math.floor(height / 18)" :is-draggable="false" :is-resizable="false" :vertical-compact="false" :preventCollision="false" :margin="[5, 5]" :use-css-transforms="false" style="height: 100%">
      <grid-item v-for="atom in slideContent" class="insideGridItem" :x="atom.x" :y="atom.y" :w="atom.w" :h="atom.h" :i="atom.i" :key="atom.i" :static="atom.static">
        <div class="nodrag" v-bind:style="{
            'border-width': atom.atomBorder.width + 'px',
            'border-style': atom.atomBorder.type,
            'border-color': atom.atomBorder.color,
            'border-radius': atom.atomBorder.radius + 'px',
            'box-sizing': 'border-box',
          }">
          <atom :atomType="atom.atomType" :atomContent="atom.atomContent"></atom>
        </div>
      </grid-item>
    </grid-layout>
  </div>
</template>
<script>
import Atom from "@/components/Atom/Atom.vue";
import { GridLayout, GridItem } from "@/components/gridlayout.js";
import { slideContent } from "@/Template";

export default {
  name: "v-slide",
  components: {
    Atom,
    GridLayout,
    GridItem,
  },
  props: {
    slideContent: {
      type: Array,
      default: slideContent,
    },
    height: {
      type: Number,
      default: window.innerHeight || 600,
    },
  },
};
</script>

<style scoped>
.vslide {
  padding: 0;
  overflow: visible;
  display: block;
}
.gridlayout {
  width: 100%;
  height: 100%;
}
.insideGridItem {
  width: 100%;
  height: 100%;
}
.nodrag {
  height: 100%;
  overflow: hidden;
}
</style>


