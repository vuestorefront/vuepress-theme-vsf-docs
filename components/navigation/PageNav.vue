<template>
  <div class="flex p-0 pt-8 m-0 border-t custom-block">
    <div v-if="prev" class="flex items-center">
      <RouterLink :to="prev.path" class="hover:text-green"
        >← {{ prev.title }}</RouterLink
      >
    </div>
    <div v-if="next" class="flex items-center ml-auto">
      <RouterLink :to="next.path" class="hover:text-green"
        >{{ next.title }} →</RouterLink
      >
    </div>
  </div>
</template>
<script>
import { resolveSidebarItems } from '../../util'

export default {
  computed: {
    sidebarItems() {
      return flatten(
        resolveSidebarItems(
          this.$page,
          this.$page.regularPath,
          this.$site,
          this.$localePath
        ),
        []
      )
    },
    currentIndex() {
      return this.sidebarItems.findIndex((i) => i.path === this.$route.path)
    },
    prev() {
      return this.currentIndex - 1 >= 0
        ? this.sidebarItems[this.currentIndex - 1]
        : undefined
    },
    next() {
      return this.currentIndex + 1 < this.sidebarItems.length
        ? this.sidebarItems[this.currentIndex + 1]
        : undefined
    }
  }
}

function flatten(items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
  return res
}
</script>
