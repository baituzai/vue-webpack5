## webpack 解决多个 js 依赖顺序问题

    当项目中index.js header.js content.js footer.js jquery 产生相互依赖的js文件时 我们就不得不在引入js的时候按依赖顺序加载这些js

## 首次在 index.js 中引入 css 文件

```
import "./assets/scss/style.css"
```

    You may need an appropriate loader to handle this file type,
    currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders

[css-loader](https://webpack.js.org/loaders/css-loader/#root)

```
npm install --save-dev css-loader
```

    解决了报错，但是css的内容并没有被引入进来

```
npm i -D style-loader
```

安装 style-loader 负责把 css-loader 解析后的 css 放到 html 文件中

```
import "./assets/img/rabbit.png"

```

    ERROR in ./src/assets/img/rabbit.png 1:0
    Module parse failed: Unexpected character '�' (1:0)
    You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
    (Source code omitted for this binary file)

```
npm i -D url-loader
```

```
import "./assets/less/index"
```

    ERROR in ./src/index.js 7:0-28
    Module not found: Error: Can't resolve './assets/less/index' in 'C:\Users\admin\Desktop\webpack-demo\src'

```
npm install less less-loader --save-dev
```

添加厂商前缀处理 loader

```
npm install --save-dev postcss-loader postcss
```

[参考地址](https://webpack.js.org/loaders/postcss-loader/#autoprefixer)

```
npm install --save-dev autoprefixer
```

问题
ERROR in ./src/assets/less/index.less
Module Error (from ./node_modules/postcss-loader/dist/cjs.js):
Loading PostCSS "postcss-preset-env" plugin failed: Cannot find module 'postcss-preset-env'

```
npm install postcss-preset-env --save-dev
```

在项目中使用 vue

```
npm i -S vue
```

.vue ファイルを読み込むために必須

```
npm i -D vue-loader vue-template-compiler
```

    ERROR in ./src/index.vue
    Module Error (from ./node_modules/vue-loader/lib/index.js):
    vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
    使用了vue-loader而没有相应的插件。确保在Webpack配置中包括VueLoaderPlugin。

[参考官方解决](https://vue-loader.vuejs.org/migrating.html#migrating-from-v14)

需要一起使用

```
const VueLoaderPlugin = require("vue-loader/lib/plugin")
new VueLoaderPlugin(),
 {
    test: /.vue$/i,
    use: ["vue-loader"],
 },

```

```
WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  bundle.js (252 KiB)
```

```
WARNING in webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
```
