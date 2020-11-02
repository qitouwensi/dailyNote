const path = require("path");
const resolve = dir => path.join(__dirname,dir)
module.exports = {
  // 选项...
  chainWebpack:config=>{
    config.resolve.symlinks(true) // 修复热更新失效
    config.resolve.alias
    .set("@",resolve('src'))
    .set("assets",resolve('src/assets'))
    .set("_c",resolve('src/components'))
    .set("_v",resolve('src/views'))
    .set("_u",resolve('src/utils'))
  }
}