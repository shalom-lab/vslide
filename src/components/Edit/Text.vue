<template>
  <n-drawer v-model:show="show" :mask-closable="true" width="400" height="400" placement="right" show-mask="transparent">
    <n-drawer-content header-style="margin:0 auto">
      <n-tabs type="card">
        <n-tab-pane v-for="(item,i ) in config" :key="i" :name="item.name" :tab="item.tab" display-directive="show">
          <editor :obj="item.obj" :prefix='item.name' :editorOptionKey="atomContent.atomName" />
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
    atomContent: Object,
  },
  data () {
    return {
      show: true,
    }
  },
  mounted () {
  },
  setup (props) {
    // initAtom仅用来初始化传值 切断响应式
    var atomContent = toRaw(props.atomContent)
    var detail = atomContent.detail
    // config
    var config = []
    config.push({
      name: 'atomContent.detail',
      tab: '样式',
      obj: detail
    })
    return { config }
  }
}
</script>

<style>
</style>

