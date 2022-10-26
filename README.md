# 马文卿个人博客前端项目文档


### 项目简介
> [个人博客]项目前端项目
> 地址：blog.mawenqing.net

### 项目前端依赖

* 主技术栈：React生态(React18 + React Router)
* 构建工具：[vite](https://vitejs.cn/)
* UI组件库：[antd](https://ant.design/index-cn)
* Ajax：[Axios](http://www.axios-js.com/)

### 项目依赖的插件/包
```shell
npm install antd --save  //安装antd版本
npm i vite-plugin-imp  //安装按需加载antd组件的方法 将根据组件自动加载样式文件
npm install bytemd //markdown编辑器组件
```

### 启动项目
```shell
npm install
npm run dev
```

### 项目目录
```shell
.
.
├── README.md
├── dist
│?? ├── assets
│?? ├── favicon.ico
│?? └── index.html
├── index.html
├── package.json
├── public
│?? └── favicon.ico
├── src
│?? ├── App.tsx
│?? ├── assets
│?? ├── components
│?? ├── main.tsx
│?? ├── pages
│?? ├── router
│?? └── utils
│?? └── types
├── tsconfig.json
└── vite.config.ts
```
### 打包项目
```shell
npm run build
```