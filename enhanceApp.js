import './styles/index.css'
import './styles/highlight.styl'

import IntegrationList from './components/IntegrationList.vue'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.component('IntegrationList', IntegrationList)
}
