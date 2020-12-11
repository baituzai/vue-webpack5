const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"), //之前这么写的"dist/js" 之前热跟新没有启动是这里路径的问题 和cleanwebpackplugin没关系 但是为为什么暂时不清楚
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist/index.html"), // 会在这里自动生成一个html并且把打包文件自动引入
      template: path.resolve(__dirname, "public/index.html"), // 将这个html作为模板 会包含这里的内容
    }),
    new CleanWebpackPlugin(), // 默认对应output中输出的文件
    new VueLoaderPlugin(),
  ],
  devServer: {
    port: 9000,
    hot: true,
    open: true,
    compress: false,
    contentBase: path.join(__dirname, "dist"), // 从那个目录读取静态资源 每次会默认打开这个 监听不到文件的改变 这是时候引入HRM 但是如果使用了webpack-dev-serve 只需要设置hot：true即可
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"], // 注意顺序 less、sass放在postcss后面
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: ["url-loader"],
        // 使用下面的方法会报错 Error: Cannot find module 'file-loader'
        // use: [
        //   {
        //     loader: "url-loader",
        //     options: {
        //       limit: 8192,
        //     },
        //   },
        // ],
      },
      {
        test: /.vue$/i,
        use: ["vue-loader"],
      },
    ],
  },
}
