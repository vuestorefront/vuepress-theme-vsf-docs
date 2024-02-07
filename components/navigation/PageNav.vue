<template>
  <div
    class="flex p-0 py-8 m-0 border-t custom-block dark:border-t-zinc-700"
    :key="$route.path"
  >
    <div v-if="prev && prev.path" class="flex items-center text-sm">
      <RouterLink :to="prev.path" class="hover:text-green !no-underline"
        >← {{ prev.title }}</RouterLink
      >
    </div>
    <div v-if="next && next.path" class="flex items-center ml-auto text-sm">
      <RouterLink :to="next.path" class="hover:text-green !no-underline"
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
