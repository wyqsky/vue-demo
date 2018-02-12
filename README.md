# vue-test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

这是一个补完babel支持es6的拓展包，配置步骤为3个
1.打开命令行键入 npm install --save-dev babel-polyfill 安装polyfill
2.在webpack.config.js中最上面写上var babelpolyfill = require("babel-polyfill");
3.在自己的项目js文件中最开头写上import "babel-polyfill";
