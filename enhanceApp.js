import './styles/index.css'
import './styles/highlight.styl'

import IntegrationList from './components/IntegrationList.vue'
import CodeGroup from './components/CodeGroup.vue'
import CodeBlock from './components/CodeBlock.vue'
import NavigationalCard from './components/NavigationalCard.vue'
import { Icon } from '@iconify/vue2'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.component('IntegrationList', IntegrationList)
  Vue.component('CodeGroup', CodeGroup)
  Vue.component('CodeBlock', CodeBlock)
  Vue.component('NavigationalCard', NavigationalCard)
  Vue.component('Icon', Icon)
}
