const path = require('path')

module.exports = {
  plugins: [
    '@vuepress/search',
    '@vuepress/medium-zoom',
    '@vuepress/plugin-nprogress',
    [
      'container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP'
        }
      }
    ],
    [
      'container',
      {
        type: 'subheader',
        defaultTitle: ''
      }
    ],
    [
      'container',
      {
        type: 'warning',
        defaultTitle: {
          '/': 'WARNING'
        }
      }
    ],
    [
      'container',
      {
        type: 'danger',
        defaultTitle: {
          '/': 'DANGER'
        }
      }
    ]
  ]
}
