const px2rem = require('postcss-px2rem')
// 配置postcss -px2rem
const postcss = px2rem({
  remUnit: 75   // 设计稿10等分之后的值
})
module.exports = {
  runtimeCompiler:true,
  lintOnSave:false,//关闭enlint语法检查,
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      } ,
        '/foo': {
          target: 'https://m.you.163.com',
          ws: true,
          changeOrigin: true,
          pathRewrite:{
            '^/foo':''
          }
        }
    }
  }
}