 <template>
  <div class='text'>
    <n-image :src="src" :preview-disabled="previewdisabled" />
  </div>
</template>
     
<script>
import { ref, reactive, toRaw, inject } from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import { NImage } from "naive-ui";

export default {
  components: {
    NImage,
  },
  props: {
    atomContent: Object,
  },
  setup(props) {
    var getDetail = reactive(props.atomContent.detail);
    const previewdisabled = inject("previewdisabled", false);
    return { getDetail, previewdisabled };
  },
  computed: {
    src() {
      return this.getDetail.src;
    },
  },
  methods: {},
};
</script>

<style scoped>
.text {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  align-items: stretch;
  user-select: none;
}
</style>