<template>
  <n-drawer v-model:show="show" :mask-closable="true" width="400" height="400" placement="right" show-mask="transparent">
    <n-drawer-content header-style="margin:0 auto">
      <n-tabs type="card">
        <n-tab-pane v-for="(item,i ) in config" :key="i" :name="item.name" :tab="item.tab" display-directive="show">
          <editor :obj="item.obj" :prefix='item.name' editorOptionKey="atomBorder" />
        </n-tab-pane>
      </n-tabs>
    </n-drawer-content>
  </n-drawer>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { toRaw, markRaw, computed, isRef, unref, isReactive, watch, reactive, } from 'vue'
import Editor from '@/components/Edit/Share/Editor.vue'

export default {
  components: {
    Editor
  },
  props: {
    initAtom: Object,
  },
  data () {
    return {
      show: true,
    }
  },
  setup (props) {
    var newAtom = toRaw(props.initAtom)
    var atomBorder = newAtom.atomBorder
    var config = [{ name: 'atomBorder', tab: '边框', obj: atomBorder }]
    return {
      config
    }
  }
}
</script>

<style>
</style>
