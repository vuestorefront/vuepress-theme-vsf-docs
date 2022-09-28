import './styles/index.css'
import './styles/highlight.styl'

import IntegrationList from './components/IntegrationList.vue'
import CodeGroup from './components/CodeGroup.vue'
import CodeBlock from './components/CodeBlock.vue'
import NavCard from './components/NavCard.vue'
import BetaBanner from './components/BetaBanner.vue'
import ButtonContainer from './components/ButtonContainer.vue'
import CoreDocsList from './components/landing/CoreDocsList.vue'
import StorefrontUi from './components/landing/StorefrontUi.vue'
import VsfCloud from './components/landing/VsfCloud.vue'
import VsfEcosystem from './components/landing/VsfEcosystem.vue'

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
  Vue.component('BetaBanner', BetaBanner)
  Vue.component('ButtonContainer', ButtonContainer)
  Vue.component('NavCard', NavCard)
  Vue.component('CoreDocsList', CoreDocsList)
  Vue.component('StorefrontUi', StorefrontUi)
  Vue.component('VsfCloud', VsfCloud)
  Vue.component('VsfEcosystem', VsfEcosystem)
  Vue.component('Icon', Icon)
}
