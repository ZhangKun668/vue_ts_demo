const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/",
  outputDir: "dist",// 当运行 build 时生成的生产环境构建文件的目录。
  assetsDir: "static",// 静态资源存放路径
  lintOnSave: false,
  devServer: {
    inline: true,
    overlay: {
      warning: false,
      errors: false
    },
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
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 37.5,// 设置一倍方案
          })
        ]
      },
    }
  },
  pluginOptions: {},
  chainWebpack: (config) => {
    // 设置路径别名
    config.resolve.alias
      .set("@", resolve("src"))
  },
  configureWebpack: {}
}