// vue.config.js
const path = require("path");

module.exports = {
  publicPath: '/customer-view',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  devServer: {
    open: true,
    host: 'localhost',
    port: 2777
  },
  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("stylus").oneOf(type))
    );
  },
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/imports.styl")],
    });
}
