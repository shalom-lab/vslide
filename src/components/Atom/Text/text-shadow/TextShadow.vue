 <template>
  <div class='text'>
    <p v-if="!editMode" :style="style">{{getDetail.text}}</p>
    <p v-if="editMode" contenteditable="true" @input="change" ref="edit" :style="style">{{getDetail.text}}</p>
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
    const menuValue = inject("menuValue", "layout");
    const editMode = inject("editMode", false);
    var getDetail = reactive(props.atomContent.detail);
    return { getDetail, editMode, menuValue };
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
  methods: {
    change($event) {
      //console.log("Enter Pressed", $event.target.innerText);
      this.$store.commit("changeAtom", {
        key: "atomContent.detail.text",
        value: $event.target.innerText,
        menuValue: this.menuValue,
      });
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