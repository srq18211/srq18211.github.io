module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Vue SSR 指南',
      description: 'Vue.js 服务端渲染指南'
    }
  },
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'vuejs/vue-ssr-docs',
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/guide/'
          },
          {
            text: 'API 参考',
            link: '/api/'
          }
        ],
        sidebar: [
          ['/', '介绍'],
          '/guide/',
          '/guide/universal',
          '/guide/structure',
          '/guide/routing',
          '/guide/data',
          '/guide/hydration',
          '/guide/bundle-renderer',
          '/guide/build-config',
          '/guide/css',
          '/guide/head',
          '/guide/caching',
          '/guide/streaming',
          '/guide/non-node'
        ]
      }
    }
  }
}
