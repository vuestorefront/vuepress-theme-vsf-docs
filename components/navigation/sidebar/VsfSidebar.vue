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

    <a
      v-for="link in navLinks"
      :href="link.path"
      class="flex items-center col-span-1 p-4 mt-2 border rounded lg:hidden text-green"
    >
      <Icon :icon="link.icon" width="24" />
      <span class="ml-2 font-medium sm:text-sm">{{ link.title }}</span>
    </a>

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
          title: 'Docs Home',
          path: 'https://docs.vuestorefront.io/v2/',
          icon: 'ic:round-home'
        },
        {
          title: 'Concepts',
          path: 'https://docs.vuestorefront.io/v2/getting-started/project-structure.html',
          icon: 'ic:sharp-menu-book'
        },
        {
          title: 'All Integrations',
          path: 'https://docs.vuestorefront.io/v2/getting-started/project-structure.html',
          icon: 'material-symbols:format-list-bulleted-rounded'
        },
        {
          title: 'Storefront UI',
          path: 'ph:paint-brush-fill',
          icon: 'ic:round-home'
        },
        {
          title: 'Vue Storefront Cloud',
          path: 'https://docs.vuestorefront.io/cloud/',
          icon: 'material-symbols:cloud'
        },
        {
          title: 'Vue Storefront 1',
          path: 'https://docs.vuestorefront.io/v1/',
          icon: 'ic:sharp-history-toggle-off'
        }
      ]
    }
  }
}
</script>
