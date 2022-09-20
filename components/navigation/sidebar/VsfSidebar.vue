<template>
  <aside
    class="h-[calc(100vh-3.5em)] pt-7 pr-4 overflow-y-auto sidebar w-full border-r dark:border-r-neutral-700 pb-32"
  >
    <!-- <div class="integration-selector">Integration</div> -->
    <slot name="top" />

    <SidebarLinks
      :depth="0"
      :items="items"
      :key="$route.fullPath"
      class="hidden lg:block"
    />
    <SidebarLinks :depth="0" :items="allLinks" class="block lg:hidden" />

    <div
      class="flex items-center col-span-1 p-4 mt-2 border rounded text-green"
    >
      <Icon icon="ic:round-home" width="24" />
      <span class="ml-1 font-medium">Docs Home</span>
    </div>
    <div
      class="flex items-center col-span-1 p-4 mt-2 border rounded text-green"
    >
      <Icon icon="ic:round-home" width="24" />
      <span class="ml-1 font-medium">Docs Home</span>
    </div>
    <div
      class="flex items-center col-span-1 p-4 mt-2 border rounded text-green"
    >
      <Icon icon="ic:round-home" width="24" />
      <span class="ml-1 font-medium">Docs Home</span>
    </div>
    <div
      class="flex items-center col-span-1 p-4 mt-2 border rounded text-green"
    >
      <Icon icon="ic:round-home" width="24" />
      <span class="ml-1 font-medium">Docs Home</span>
    </div>

    <slot name="bottom" />
  </aside>
</template>

<script>
import SidebarLinks from './VsfSidebarLinks.vue'
import { resolveItem, resolveMatchingConfig } from '../../../util/'
export default {
  name: 'Sidebar',

  components: { SidebarLinks },

  props: ['items'],
  computed: {
    allLinks() {
      const { pages, themeConfig } = this.$site

      const b = Object.keys(this.$themeConfig.sidebar)
        .map((sidebarKey) => {
          const { base, config } = resolveMatchingConfig(
            this.$page.regularPath,
            this.$themeConfig.sidebar[b]
          )

          return this.$themeConfig.sidebar[sidebarKey].map((item) =>
            resolveItem(item, pages, sidebarKey)
          )
        })
        .map((group) => {
          console.log(group)
          return group
        })
      const allSidebarLinks = b.flat()
      console.log(allSidebarLinks)
      if (this.$themeConfig.secondaryNav) {
        const groupedLinksByNav = this.$themeConfig.secondaryNav.map((item) => {
          return {
            title: item.text,
            collapsible: true,
            children: allSidebarLinks.filter(
              (sidebarItem) =>
                (sidebarItem.path && sidebarItem.path.startsWith(item.link)) ||
                (sidebarItem.children[0].path &&
                  sidebarItem.children[0]?.path.startsWith(item.link))
            ),
            type: 'group'
          }
        })
        return groupedLinksByNav
      } else {
        return allSidebarLinks
      }
    }
  },
  data() {
    return {
      navLinks: [
        {
          title: 'Home',
          path: 'https://docs.vuestorefront.io/v2/'
        },
        {
          title: 'Getting Started',
          path: 'https://docs.vuestorefront.io/v2/getting-started/introduction.html'
        },

        {
          title: 'Concepts',
          path: 'https://docs.vuestorefront.io/v2/getting-started/project-structure.html'
        },
        {
          title: 'See All Integrations',
          path: 'https://docs.vuestorefront.io/v2/getting-started/project-structure.html'
        },
        {
          title: 'Ecosystem',
          collapsible: true,
          type: 'group',
          children: [
            ['https://docs.storefrontui.io/', 'Storefront UI'],
            ['https://docs.vuestorefront.io/cloud/', 'Vue Storefront Cloud'],
            ['https://docs.vuestorefront.io/v1/', 'Vue Storefront 1']
          ]
        }
      ]
    }
  }
}
</script>
