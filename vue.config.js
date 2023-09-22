const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "development" ? "/" : "/cj/",
  outputDir: "dist",
  assetsDir: "cj-static",
  indexPath: "cj-index.html",
  transpileDependencies: true,
  configureWebpack: (config) => {
    config.externals = {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios: "axios",
    };
  },
});
