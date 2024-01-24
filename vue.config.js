const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
//prefetch는 항상 끄고 시작하기
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },

  pluginOptions: {
    vuetify: {}
  }
}