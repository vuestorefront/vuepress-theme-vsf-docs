const activeLinks = require('./plugins/markdown-active-links')

module.exports = {
  plugins: [
    activeLinks,
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
        defaultTitle: ''
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
        type: 'callout',
        defaultTitle: ''
      }
    ],
    [
      'container',
      {
        type: 'read-more',
        defaultTitle: ''
      }
    ],
    [
      'container',
      {
        type: 'warning',
        defaultTitle: ''
      }
    ],
    [
      'container',
      {
        type: 'danger',
        defaultTitle: ''
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
