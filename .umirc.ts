import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'umi-max',
  },
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    lodash: 'window._',
  },
  headScripts: [
    ...(process.env.NODE_ENV === 'production'
      ? [
          '//npm.cdn-go.cn/react/18.2.0/umd/react.production.min.js',
          '//npm.cdn-go.cn/react-dom/18.2.0/umd/react-dom.production.min.js',
        ]
      : [
          '//npm.cdn-go.cn/react/18.2.0/umd/react.development.js',
          '//npm.cdn-go.cn/react-dom/18.2.0/umd/react-dom.development.js',
        ]),
    '//npm.cdn-go.cn/lodash/4.17.21/lodash.min.js',
  ],
  publicPath: process.env.NODE_ENV === 'production' ? process.env.cdnUrl : '/',
  // 当需要在不同部署环境配置不同值时，可以采用define的形式，且在“.umirc.[env].ts”文件中配置不同的值
  // 请以“REACT_APP_”作为前缀用以标识为前端配置，且在“typings.d.ts”中声明
  define: {
    REACT_APP_ENV: 'production',
  },
  styles: [
    // `@font-face {
    //   font-family: 'Arial';
    //   src: url('xxx.woff2'),
    //     url('xxx.woff'),
    //     url('xxx.ttf');
    // }`,
  ],
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  proxy: {
    '/server': {
      target: 'https://127.0.0.1:7001',
      changeOrigin: true,
    },
  },
  lessLoader: {
    modifyVars: {
      '@primary-color': '#FDBB56',
      '@success-color': '#37BA30',
      '@warning-color': '#FAAD14',
      '@error-color': '#F76060',
      '@info-color': '#47A3E6',
      '@processing-color': '#47A3E6',
      '@heading-color': '#1A1A1A', // 标题色
      '@text-color': '#464B4D', // 主文本色
      '@text-color-secondary': '#838C8F', // 次文本色
      '@disabled-color': '#BFC5C7', // 失效色

      '@s-content-shadow': '0 0 5px 0 rgba(0,21,41,0.12)', // 内容区块阴影
      '@s-header-height': '64px',
    },
  },
  extraPostCSSPlugins: [
    // require('postcss-import'), // 如果要在css中使用@layer指令则需要
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  npmClient: 'yarn',
});
