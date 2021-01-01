module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/todo-vue/' : './',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
};
