const path = require('path')

module.exports = {
  plugins: [
    '@vuepress/search',
    '@vuepress/plugin-nprogress',
    [
      'container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示'
        }
      }
    ],
    [
      'container',
      {
        type: 'warning',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '注意'
        }
      }
    ],
    [
      'container',
      {
        type: 'danger',
        defaultTitle: {
          '/': 'DANGER',
          '/zh/': '警告'
        }
      }
    ]
  ]
}
