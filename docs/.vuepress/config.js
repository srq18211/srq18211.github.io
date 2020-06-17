module.exports = {
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '前端开发环境与工具',
      description: 'Vue.js 服务端渲染指南'
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'Chrome Extends Guid',
    //   description: 'Vue.js Server-Side Rendering Guide'
    // }
  },
  serviceWorker: true,
  // theme: 'vue',
  themeConfig: {
    repo: 'vuejs/vue-ssr-docs',
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          // {
          //   text: 'Guide',
          //   link: '/guide/'
          // },
          // {
          //   text: 'API Reference',
          //   link: '/api/'
          // }
        ],
        sidebar: [
          ['/', '个人简介'],
          ['/docs/devenv','开发环境'],
          // ['/docs/web_basic','前端基础'],
          ['/docs/web_lib','前端开发'],
          ['/docs/server_dev','服务器开发'],
          ['/docs/web_toolkit','开发工具&调试工具'],
          ['/docs/computer_basic','计算机基础'],
        ]
      },
      // '/en/': {
      //   label: 'English',
      //   selectText: 'Languages',
      //   editLinkText: 'Edit this page on GitHub',
      //   nav: [],
      //   sidebar: [
      //     ['/en/', 'what'],
      //     '/en/guide/routing'
      //   ]
      // }
    }
  }
}
