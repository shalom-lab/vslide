 <template>
  <div class='text'>
    <n-image-group>
      <n-space :size="getDetail.gap">
        <n-image v-for="(src,i) in srcs" :key="i" :height="getDetail.height" :src="src" object-fit="contain" />
      </n-space>
    </n-image-group>
  </div>
</template>
     
<script>
import { ref, reactive, toRaw, inject } from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import { NImage, NImageGroup, NSpace } from "naive-ui";

export default {
  components: {
    NImage,
    NImageGroup,
    NSpace,
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
    srcs() {
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
  user-select: none;
}
</style>