<template>
  <n-card :bordered="false" content-style="padding:5px 0px">
    <n-space vertical size="small">
      <template v-for="(item,i) in plain" :key="i">
        <user-input :info="item" />
      </template>
    </n-space>
  </n-card>
  <n-card :bordered="false" content-style="padding:0px 0px" v-if="complex">
    <template v-for="(item,i) in complex" :key="i">
      <n-blockquote>
        <h3 style="width:100%;text-align:center;background-color:#fafafa">{{item.label}}</h3>
        <editor :obj="item.obj" :prefix="item.prefix" :editorOptionKey="editorOptionKey" />
      </n-blockquote>
    </template>
  </n-card>
</template>

<script>
import { h, resolveComponent } from 'vue';
import { mapState, mapGetters, mapMutations } from 'vuex'
import UserInput from './UserInput.vue'

export default {
  name: 'Editor',
  props: {
    obj: Object,
    prefix: String,
    editorOptionKey: String
  },
  components: {
    UserInput
  },
  computed: {
    ...mapState(['editorOption']),
    labels () {
      return this.editorOption[this.editorOptionKey].labels || {}
    },
    specialLabels () {
      return this.editorOption[this.editorOptionKey].specialLabels || []
    },
    selectOptions () {
      return this.editorOption[this.editorOptionKey].selectOptions || {}
    },
    special () {
      return this.editorOption[this.editorOptionKey].special || []
    },
    plain () {
      var plain = []
      Object.keys(this.obj).forEach((key) => {
        if (typeof (this.obj[key]) != 'object') {
          var id = (/^\d/.test(key)) ? (this.prefix + '[' + key + ']') : (this.prefix + '.' + key);
          var type = '';
          var options = null;
          var label = (this.labels[key]) ? this.labels[key] : key;
          var tip = '';
          //special labels
          if (Object.keys(this.specialLabels).length != 0) {
            Object.keys(this.specialLabels).forEach((key) => {
              var regStr = '/' + key + '/'
              var reg = eval(regStr)
              if (id.search(reg) != -1) {
                label = this.specialLabels[key]
              }
            })
          }
          switch (typeof (this.obj[key])) {
            case 'boolean':
              type = 'switch';
              break;
            case 'number':
              type = 'number';
              break;
            case 'string':
              type = 'text';
              //color
              if (id.search(/color/i) != -1) {
                type = 'color';
              };
              //select
              if (Object.keys(this.selectOptions).indexOf(key) != -1) {
                type = 'select'
                options = this.selectOptions[key]
              }
              break;
          };
          // special and conflict
          if (Object.keys(this.special).length != 0) {
            Object.keys(this.special).forEach((key) => {
              var regStr = '/' + key + '/'
              var reg = eval(regStr)
              if (id.search(reg) != -1) {
                type = this.special[key].type
                options = this.special[key].options || []
                tip = this.special[key].tip || ''
              }
            })
          }
          plain.push({ id, type, options, value: this.obj[key], label, tip })
        }
      })
      return plain
    },
    complex () {
      var complex = []
      Object.keys(this.obj).forEach((key) => {
        if (typeof (this.obj[key]) === 'object') {
          var prefix = (/^\d/.test(key)) ? (this.prefix + '[' + key + ']') : (this.prefix + '.' + key);
          var label = (this.labels[key]) ? this.labels[key] : key;
          if (Object.keys(this.specialLabels).length != 0) {
            Object.keys(this.specialLabels).forEach((key) => {
              var regStr = '/' + key + '/'
              var reg = eval(regStr)
              if (prefix.search(reg) != -1) {
                label = this.specialLabels[key]
              }
            })
          }
          complex.push({ prefix, label, obj: this.obj[key] })
        }
      })
      return complex
    }
  }
}
</script>
<style scoped>
</style>