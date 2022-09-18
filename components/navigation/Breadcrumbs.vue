<template>
  <div class="flex-wrap items-center hidden gap-2 mb-4 text-sm md:flex">
    <template v-for="(section, index) in sections">
      <span v-if="index > 0"> &gt; </span>

      <RouterLink :to="section.path" class="!border-b-0 hover:underline">
        {{ section.title }}
      </RouterLink>
    </template>
  </div>
</template>

<script>
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
      let navItem = this.$themeConfig.secondaryNav.find((item) =>
        this.$route.path.includes(item.link)
      )
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
