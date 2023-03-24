<template>
  <aside
    class="h-[calc(100vh-3.5em)] bg-inherit overflow-y-auto sidebar w-full border-r dark:border-r-zinc-700 pb-32"
    ref="sidebar"
  >
    <!-- <div class="integration-selector">Integration</div> -->
    <slot name="top" />
    <div class="pt-7 pr-4">
      <SidebarLinks
        :depth="0"
        :items="items"
        :key="$route.fullPath"
        class="hidden lg:block"
        ref="links"
      />
      <a
        href="/"
        class="hover:text-black dark:hover:text-white mb-4 block lg:hidden px-1"
      >
        {{ $site.themeConfig.title }}
      </a>
      <SidebarLinks
        :depth="0"
        :items="allLinks"
        class="block lg:hidden"
        ref="links"
      />

      <a
        v-for="link in navLinks"
        :href="link.path"
        class="flex items-center col-span-1 p-4 mt-2 border dark:border-zinc-700 rounded lg:hidden"
      >
        <iconify-icon :icon="link.icon" width="24" />
        <span class="ml-2 font-medium sm:text-sm">{{ link.title }}</span>
      </a>
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

  async mounted() {
    const activeLink = this.$refs.sidebar.querySelector('a.active')
    if (activeLink) {
      activeLink.scrollIntoView({ block: 'start', inline: 'nearest' })
    }
  },
  computed: {
    allLinks() {
      const { pages, themeConfig } = this.$site
      if (this.$themeConfig.mobileMenu) {
        return this.$themeConfig.mobileMenu.map((item) =>
          resolveItem(item, pages, '/')
        )
      }
      const b = Object.keys(this.$themeConfig.sidebar)
        .map((sidebarKey) => {
          return this.$themeConfig.sidebar[sidebarKey].map((item) =>
            resolveItem(item, pages, sidebarKey)
          )
        })
        .map((group) => {
          return group
        })
        .flat()
        .filter((a, index) => a.children && a.children[0]?.title !== 'TOP TILE')

      const allSidebarLinks = b.filter((value, index) => {
        const _value = JSON.stringify(value)
        return (
          index ===
          b.findIndex((obj) => {
            return JSON.stringify(obj) === _value
          })
        )
      })
      return allSidebarLinks

      if (this.$themeConfig.secondaryNav) {
        const groupedLinksByNav = this.$themeConfig.secondaryNav.map((item) => {
          return {
            title: item.text,
            collapsible: true,
            children: allSidebarLinks.filter(
              (sidebarItem) =>
                (sidebarItem.path && sidebarItem.path.startsWith(item.link)) ||
                (sidebarItem.children &&
                  sidebarItem.children[0].path &&
                  sidebarItem.children[0]?.path.startsWith(item.link)) ||
                (item.match && new RegExp(item.match).test(sidebarItem.path))
            ),
            type: 'group'
          }
        })
        return groupedLinksByNav.filter((item) => item.children.length > 0)
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
