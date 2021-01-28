module.exports = {
  publicPath: "/",
  outputDir: "dist",// 当运行 build 时生成的生产环境构建文件的目录。
  css: {
    loaderOptions: {}
  },
  pluginOptions: {},
  devServer: {
    port: 10010,
    proxy: {
      '/rng': {
        target: 'http://45.105.124.130:8081',  // 后台接口域名
        ws: false,        //如果要代理 websockets，配置这个参数
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/rng': ''
        }
      },
    }
  },
}