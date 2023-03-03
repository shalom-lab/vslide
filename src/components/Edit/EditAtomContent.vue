<script>
import { h, resolveComponent, toRaw } from "vue";
import Echart from "./Echart.vue";
import Text from "./Text.vue";
import Images from "./Images.vue";

export default {
  name: "Atom",
  props: {
    initAtom: Object,
  },
  components: {
    Echart,
    Text,
    Images,
  },
  setup(props, { slots, attrs, emit }) {
    if (props.initAtom.atomType) {
      const com = resolveComponent(props.initAtom.atomType);
      return () => [h(com, { atomContent: toRaw(props.initAtom.atomContent) })];
    }
  },
};
</script>
