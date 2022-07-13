<template>
  <aside
    class="h-[calc(100vh-3.5rem)] pt-8 pr-4 overflow-y-auto sidebar w-full"
  >
    <!-- <div class="integration-selector">Integration</div> -->
    <SidebarLinks
      :depth="0"
      :items="navLinks"
      class="block mb-8 border-b lg:hidden dark:border-charcoal-400"
    />
    <slot name="top" />

    <SidebarLinks :depth="0" :items="items" :key="$route.fullPath" />
    <slot name="bottom" />
  </aside>
</template>

<script>
import SidebarLinks from './VsfSidebarLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks },

  props: ['items'],

  data() {
    return {
      navLinks: [
        {
          title: '',
          collapsable: false,
          type: 'group',
          children: [
            {
              title: 'Home',
              path: 'https://docs.vuestorefront.io/v2/'
            }
          ]
        },
        {
          title: '',
          collapsable: false,
          type: 'group',
          children: [
            {
              title: 'Getting Started',
              path: 'https://docs.vuestorefront.io/v2/getting-started/introduction.html'
            }
          ]
        },
        {
          title: '',
          collapsable: false,
          type: 'group',
          children: [
            {
              title: 'Concepts',
              path: 'https://docs.vuestorefront.io/v2/getting-started/project-structure.html'
            }
          ]
        },
        {
          title: 'Integrations',
          collapsible: true,
          type: 'group',
          children: [
            {
              title: 'BigCommerce',
              path: 'https://docs.vuestorefront.io/bigcommerce'
            },
            {
              title: 'commercetools',
              path: 'https://docs.vuestorefront.io/commercetools/'
            },
            {
              title: 'Magento',
              path: 'https://docs.vuestorefront.io/magento'
            },
            {
              title: 'SAP Commerce Cloud',
              path: 'https://docs.vuestorefront.io/sfcc'
            },
            {
              title: 'Shopify',
              path: 'https://docs.vuestorefront.io/shopify'
            },

            {
              title: 'Sylius',
              path: 'https://vsf-sylius-docs.herokuapp.com/'
            },
            {
              title: 'Vendure',
              path: 'https://docs.vuestorefront.io/vendure'
            },
            {
              title: 'Odoo',
              path: 'https://docs.vuestorefront.io/odoo/'
            },
            {
              title: 'PrestaShop',
              path: 'https://docs.vuestorefront.io/prestashop/'
            },
            {
              title: 'Spree',
              path: 'https://docs.vuestorefront.io/spree/'
            }
          ]
        },
        {
          title: 'Ecosystem',
          collapsible: true,
          type: 'group',
          children: [
            {
              title: 'Storefront UI',
              path: 'https://docs.storefrontui.io/'
            },
            {
              title: 'Vue Storefront Cloud',
              path: 'https://docs.vuestorefront.io/cloud/'
            },
            {
              title: 'Vue Storefront 1',
              path: 'https://docs.vuestorefront.io/v1/'
            }
          ]
        }
      ]
    }
  }
}
</script>
