<script>
import { h, resolveComponent, toRaw } from "vue";

import Echart from "./Echart.vue";
import Text from "./Text.vue";
import Images from "./Images.vue";
import Tables from "./Tables.vue";

export default {
  name: "Atom",
  props: {
    atomType: String,
    atomContent: Object,
  },
  components: {
    Echart,
    Text,
    Images,
    Tables,
  },
  setup(props, { slots, attrs, emit }) {
    const com = resolveComponent(props.atomType);
    return () => [h(com, { atomContent: toRaw(props.atomContent) })];
  },
};
</script>
