<script>
import DefaultTheme from "vitepress/theme";
import screenfull from "screenfull";

const { Layout } = DefaultTheme;
export default {
  components: { Layout },
  data() {
    return {};
  },
  methods: {
    fullScreen() {
      const element = document.getElementById("demo");
      if (screenfull.isEnabled) {
        screenfull.request(element);
      }
    },
  },
};
</script>
<template>
  <Layout>
    <template #aside-outline-after>
      <img src="./rlearner.jpg" />
      <img src="./epi-stats.png" />
    </template>
    <template #home-features-after>
      <div class="box">
        <div class="tool" @click="fullScreen()">
          <svg t="1661826994548" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3230" width="20" height="20">
            <path d="M639.328 416c8.032 0 16.096-3.008 22.304-9.056l202.624-197.184-0.8 143.808c-0.096 17.696 14.144 32.096 31.808 32.192 0.064 0 0.128 0 0.192 0 17.6 0 31.904-14.208 32-31.808l1.248-222.208c0-0.672-0.352-1.248-0.384-1.92 0.032-0.512 0.288-0.896 0.288-1.408 0.032-17.664-14.272-32-31.968-32.032L671.552 96l-0.032 0c-17.664 0-31.968 14.304-32 31.968C639.488 145.632 653.824 160 671.488 160l151.872 0.224-206.368 200.8c-12.672 12.32-12.928 32.608-0.64 45.248C622.656 412.736 630.976 416 639.328 416z" p-id="3231" fill="#bfbfbf"></path>
            <path d="M896.032 639.552 896.032 639.552c-17.696 0-32 14.304-32.032 31.968l-0.224 151.872-200.832-206.4c-12.32-12.64-32.576-12.96-45.248-0.64-12.672 12.352-12.928 32.608-0.64 45.248l197.184 202.624-143.808-0.8c-0.064 0-0.128 0-0.192 0-17.6 0-31.904 14.208-32 31.808-0.096 17.696 14.144 32.096 31.808 32.192l222.24 1.248c0.064 0 0.128 0 0.192 0 0.64 0 1.12-0.32 1.76-0.352 0.512 0.032 0.896 0.288 1.408 0.288l0.032 0c17.664 0 31.968-14.304 32-31.968L928 671.584C928.032 653.952 913.728 639.584 896.032 639.552z" p-id="3232" fill="#bfbfbf"></path>
            <path d="M209.76 159.744l143.808 0.8c0.064 0 0.128 0 0.192 0 17.6 0 31.904-14.208 32-31.808 0.096-17.696-14.144-32.096-31.808-32.192L131.68 95.328c-0.064 0-0.128 0-0.192 0-0.672 0-1.248 0.352-1.888 0.384-0.448 0-0.8-0.256-1.248-0.256 0 0-0.032 0-0.032 0-17.664 0-31.968 14.304-32 31.968L96 352.448c-0.032 17.664 14.272 32 31.968 32.032 0 0 0.032 0 0.032 0 17.664 0 31.968-14.304 32-31.968l0.224-151.936 200.832 206.4c6.272 6.464 14.624 9.696 22.944 9.696 8.032 0 16.096-3.008 22.304-9.056 12.672-12.32 12.96-32.608 0.64-45.248L209.76 159.744z" p-id="3233" fill="#bfbfbf"></path>
            <path d="M362.368 617.056l-202.624 197.184 0.8-143.808c0.096-17.696-14.144-32.096-31.808-32.192-0.064 0-0.128 0-0.192 0-17.6 0-31.904 14.208-32 31.808l-1.248 222.24c0 0.704 0.352 1.312 0.384 2.016 0 0.448-0.256 0.832-0.256 1.312-0.032 17.664 14.272 32 31.968 32.032L352.448 928c0 0 0.032 0 0.032 0 17.664 0 31.968-14.304 32-31.968s-14.272-32-31.968-32.032l-151.936-0.224 206.4-200.832c12.672-12.352 12.96-32.608 0.64-45.248S375.008 604.704 362.368 617.056z" p-id="3234" fill="#bfbfbf"></path>
          </svg>
        </div>
        <iframe id="demo" height=100% width=100% src="https://cloud1-6gje6dbjbdbca85f-1312763637.ap-shanghai.app.tcloudbase.com/slides?mode=view" frameborder=0 allowfullscreen>
        </iframe>
      </div>
    </template>
    <template #doc-after>
      <div class="footer">
        <p class="vslide"><a href="https://vslide.cn">微思文稿(vslide.cn)</a>-免费好用的数据可视化工具</p>
        <p><a href='https://beian.miit.gov.cn' target='_blank'>豫ICP备2022018163号-2</a> 友情链接: <a target='_blank' href='https://rlearner.com'>R语言学习</a> <a target='_blank' href='https://blog.rlearner.com'>博客</a></p>
      </div>
    </template>
    <template #layout-top>
    </template>
  </Layout>
</template>

<style scoped>
.box {
  width: 85%;
  aspect-ratio: 16/9;
  margin: 80px auto 20px auto;
  position: relative;
}
.tool {
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  opacity: 0.3;
}
.tool:hover {
  opacity: 1;
}
#iframe {
  border-radius: 2px;
}
img {
  width: 150px;
  height: 150px;
}
.footer {
  padding-top: 20px;
  text-align: center;
  color: #d6d6d6;
  font-size: 14px;
}
p.vslide {
  color: #ffaa87;
}
</style>