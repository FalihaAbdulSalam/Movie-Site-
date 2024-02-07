const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/simple-vuejs-app/'
    : '/',
  configureWebpack: {
    optimization: {
      minimizer: [],
    },
  },
};
