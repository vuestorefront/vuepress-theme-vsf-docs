<template>
  <div class="flex flex-wrap items-center gap-2 mb-4 text-sm">
    <template v-for="(section, index) in sections">
      <span v-if="index > 0"> &gt; </span>

      <RouterLink :to="section.path" class="!border-b-0 hover:underline">
        {{ section.title }}
      </RouterLink>
    </template>
  </div>
</template>

<script>
import { match } from 'assert'
import { isActive } from '../../util'
import { resolveSidebarItems } from '../../util'

export default {
  methods: {
    isActive(item) {
      return this.$route.path === item.path
    },
    descendantIsActive(route, item) {
      if (item.type === 'group') {
        const childIsActive = route.path === item.path
        const grandChildIsActive = item.children.some((child) => {
          if (child.type === 'group') {
            return this.descendantIsActive(route, child)
          } else {
            return child.type === 'page' && route.path === child.path
          }
        })

        return childIsActive || grandChildIsActive
      }
      return false
    },
    flattenSidebar(sidebar) {
      return sidebar
        .map((item) => {
          if (item.type === 'group') {
            return [item, ...this.flattenSidebar(item.children)]
          } else {
            return item
          }
        })
        .flat()
    }
  },
  computed: {
    sections() {
      let sidebar = resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
      const flattenedSidebar = this.flattenSidebar(sidebar)
      const links = this.$themeConfig.secondaryNav
      let navItem
      if (Array.isArray(links)) {
        navItem = links?.find((item) =>
          item.link === '/'
            ? this.$route.path === '/'
            : this.$route.path.includes(item.link) ||
              (item.match && new RegExp(item.match).test(this.$route.path))
        )
      } else {
        const linksArray =
          links[
            Object.keys(links).find((key) => {
              if (this.$route.path.startsWith(key)) {
                return links[key]
              }
            })
          ]
        navItem = linksArray?.find((item) =>
          item.link === '/'
            ? this.$route.path === '/'
            : this.$route.path.includes(item.link) ||
              (item.match && new RegExp(item.match).test(this.$route.path))
        )
      }
      if (!navItem) {
        return []
      }
      const list = [
        {
          title: this.$themeConfig.title,
          path: '/'
        },
        {
          title: navItem.text,
          path: navItem.link
        },
        ...flattenedSidebar
          .filter((item) => this.descendantIsActive(this.$route, item))
          .map((item) => {
            if (item.type === 'group') {
              item.path = item.children[0].path
            }
            return item
          })
      ]

      return list.filter(
        (item, index) => list.findIndex((i) => i.path === item.path) === index
      )
    }
  }
}
</script>
