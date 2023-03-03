<template>
  <n-data-table :columns="columns" :data="data" :pagination="pagination" size="small" />
</template>

<script>
import { NDataTable } from "naive-ui";
import { ref, reactive, toRaw } from "vue";

export default {
  name: "simple-table",
  props: {
    atomContent: Object,
  },
  components: {
    NDataTable,
  },
  setup(props) {
    var getDetail = reactive(props.atomContent.detail);
    return { getDetail };
  },
  computed: {
    columns() {
      return this.getDetail.sheetData[0].map((item, i) => {
        return { title: item, key: "column" + i };
      });
    },
    data() {
      return this.getDetail.sheetData.slice(1).map((item, i) => {
        var obj = {};
        item.forEach((ceil, j) => {
          obj["column" + j] = ceil;
        });
        obj.key = i;
        return obj;
      });
    },
    pagination() {
      return this.getDetail.pagination.show ? this.getDetail.pagination : false;
    },
  },
};
</script>

<style>
/* .n-data-table .n-data-table-th .n-data-table-td {
  padding: 5px;
} */
</style>
