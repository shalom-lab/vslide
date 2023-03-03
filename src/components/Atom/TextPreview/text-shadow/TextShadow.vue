 <template>
  <div class='text'>
    <p :style="style">{{getDetail.text}}</p>
  </div>
</template>
     
<script>
import { ref, reactive, inject } from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  props: {
    atomContent: Object,
  },
  setup(props) {
    var getDetail = reactive(props.atomContent.detail);
    return { getDetail };
  },
  computed: {
    style() {
      return {
        fontSize: this.getDetail.fontSize + "px",
        fontFamily: this.getDetail.fontFamily,
        fontWeight: this.getDetail.fontWeight,
        textShadow: this.textShadow,
        color: this.getDetail.color,
      };
    },
    text() {
      return this.getDetail.text;
    },
    shadow() {
      return this.getDetail.shadow;
    },
    textShadow() {
      return `${this.shadow.h}px ${this.shadow.v}px ${this.shadow.blur}px ${this.shadow.color}`;
    },
  },
};
</script>

<style scoped>
.text {
  width: 100%;
  height: 100%;
  display: flex;
  /*实现垂直居中*/
  align-items: center;
  /*实现水平居中*/
  justify-content: center;
}
.text p {
  padding: 5px 10px;
  outline: none;
}
</style>