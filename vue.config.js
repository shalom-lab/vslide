const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:"/dataviz/",
  outputDir:'dataviz',
  productionSourceMap: false,
  css: { extract: false },
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      vue: "Vue",
      axios: "axios",
      /* vuex: "Vuex", */
      "naive-ui": "naive",
    },
    resolve: {
      alias: {
        path: require.resolve("path-browserify"),
      },
    },
  },
});
