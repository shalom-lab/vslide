<template>
  <div :style="`width:${width}px;height:${height}px`">
    <working-slide :slideContent="activeSlideContent" :rowHeight="Math.floor(height/18)" />
  </div>
</template>
<script>
import WorkingSlide from '@/components/WorkingSlide.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    WorkingSlide
  },
  computed: {
    ...mapState(['innerSize', 'workingAreaKey']),
    ...mapGetters(['activeSlide', 'activeAtom', 'indexActive', 'activeSlideContent']),
    height () {
      return Math.floor(Math.min((this.innerSize.height - 150), (this.innerSize.width - 280) * 9 / 16))
    },
    width () {
      return (Math.floor(this.height * 16 / 9))
    }
  }
}
</script>

<style scoped>
</style>
