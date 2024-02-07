module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/simple-vuejs-app/'
    : '/',
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {},
            mangle: true, // Note `mangle.properties` is `false` by default.
            module: false,
            output: null,
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_fnames: false,
          },
        }),
      ],
    },
  },
};
