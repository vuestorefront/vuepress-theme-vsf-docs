const path = require('path')

module.exports = {
  plugins: [
    '@vuepress/search',
    [
      '@vuepress/medium-zoom',
      {
        selector: '.prose img:not(.custom-block img)'
      }
    ],
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
    ],
    [
      'container',
      {
        type: 'col-wrapper',
        defaultTitle: ''
      }
    ],
    [
      'container',
      {
        type: 'col-wrapper-gap',
        defaultTitle: ''
      }
    ],
    [
      'container',
      {
        type: 'col-wrapper-hero',
        defaultTitle: ''
      }
    ],
    [
      'container',
      {
        type: 'col-full',
        defaultTitle: ''
      }
    ],
    [
      'container',
      {
        type: 'col-1/2',
        defaultTitle: ''
      }
    ],
    [
      'container',
      {
        type: 'col-1/3',
        defaultTitle: ''
      }
    ],
    [
      'container',
      {
        type: 'col-2/3',
        defaultTitle: ''
      }
    ]
  ]
}
