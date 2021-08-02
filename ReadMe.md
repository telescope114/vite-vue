# 使用说明

## 基础

### 介绍

该框架是通过 <a href="https://cn.vitejs.dev/">vite</a> 构建工具，再基于 <a href="https://v3.cn.vuejs.org/">vue@3.0.5</a> 所整合的框架

### 安装依赖

```shell
npm i
```

或者

```shell
yarn
```

建议开发者**使用单一命令**

### 开发运行

```shell
npm run dev
```

默认端口： <a href="http://127.0.0.1:3000">3000</a>

该状态下的 <u>项目/组件</u> 能实时更新

### 预览运行

```
npm run serve
```

默认端口： <a href="http://127.0.0.1:5000">5000</a>

该状态下的 <u>项目/组件</u> 不能实时更新(以运行时的项目样子为主)

### 打包

```shell
npm run build
```

打包结束后会在项目内生成 `dist` 文件

### 内部预设

内部预设 <a href="https://next.router.vuejs.org/zh/index.html">vue-router@4.0.0</a> 、 <a href="https://next.vuex.vuejs.org/zh/index.html">vuex@4.0.0</a> 、 <a href="http://www.axios-js.com/">axios@0.21.1</a>

其中 `axios` 单独封装在 `.\utils\request.js` 内，建议开发者按业务需求再处理一下



## 环境依赖

### CSS 预处理器

直接通过命令行安装，无需配置其他内容 

```shell
# .scss and .sass
npm install -D sass

# .less
npm install -D less

# .styl and .stylus
npm install -D stylus
```

<a href="https://cn.vitejs.dev/guide/features.html#css-pre-processors">参考文献</a>

使用时只需要设置 `style` 的 `lang`属性即可



## 运行依赖

### UI组件库

#### PC端：推荐 element-plus

<a href="https://element-plus.gitee.io/#/zh-CN">element-plus</a> ：一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库

```shell
npm i -S element-plus
```

后续操作： <a href="https://element-plus.gitee.io/#/zh-CN/component/quickstart#yin-ru-element-plus">element-plus文档</a>

#### 移动端：推荐 vant

<a href="https://vant-contrib.gitee.io/vant/v3/#/zh-CN">vant</a>

```shell
# 整合项目使用的是Vue3，故命令不一样
npm i -S vant@next
```

后续操作： <a href="https://vant-contrib.gitee.io/vant/v3/#/zh-CN/quickstart#fang-shi-si.-dao-ru-suo-you-zu-jian">全部引入</a> 、 <a href="https://vant-contrib.gitee.io/vant/v3/#/zh-CN/quickstart#fang-shi-san.-shou-dong-an-xu-yin-ru-zu-jian">按需引入</a> 、 <a href="https://vant-contrib.gitee.io/vant/v3/#/zh-CN/quickstart#fang-shi-er.-zai-vite-xiang-mu-zhong-an-xu-yin-ru-zu-jian">vite中 按需引入</a>



更新时间：2021年8月2日

更新版本：0.0.1



# 更新日志

## 0.0.1

创建并书写了能想到的使用手册