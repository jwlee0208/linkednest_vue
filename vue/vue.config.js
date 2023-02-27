/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}) */

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  lintOnSave : false,
  outputDir:"./src/main/resources/static",
  indexPath:"./static/index.html",

  devServer: {
    proxy : process.env.VUE_APP_API_URL // 'http://localhost:9091'
  },

  chainWebpack: config => {
     const svgRule = config.module.rule("svg");
     svgRule.uses.clear();
//     svgRule.use("vue-svg-loader").loader("vue-svg-loader");
     svgRule.use("svg-vue3-loader").loader("svg-vue3-loader");
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
