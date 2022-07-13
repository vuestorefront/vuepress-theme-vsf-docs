<template>
  <ul v-if="items.length" class="text-sm sidebar-links">
    <li
      v-for="(item, i) in items"
      :key="depth + ' ' + i + ' ' + item.title"
      :class="{ 'mt-2': depth === 1 }"
      class="py-1 text-base sm:py-0 sm:text-sm"
    >
      <SidebarGroup
        v-if="item.type === 'group'"
        :item="item"
        :open="openGroups.indexOf(i) !== -1"
        :collapsable="item.collapsable || item.collapsible"
        :depth="depth"
        @toggle="toggleGroup(i)"
      />
      <a
        v-else-if="item.path && item.path.indexOf('http') === 0"
        :href="item.path"
        class="block transition-colors hover:text-charcoal dark:hover:text-white"
        :class="{
          'border-l pl-4 pt-2 border-gray-200 dark:border-charcoal-400':
            depth >= 2
        }"
      >
        {{ item.title }}
      </a>
      <RouterLink
        v-else-if="item.path"
        :to="item.path"
        class="block transition-colors hover:text-charcoal dark:hover:text-white"
        :class="{
          'border-l pl-4 pt-2 border-gray-200 dark:border-charcoal-400':
            depth >= 2
        }"
      >
        {{ item.title }}
      </RouterLink>
    </li>
  </ul>
</template>

<script>
import SidebarGroup from './VsfSidebarGroup.vue'
import SidebarLink from './VsfSidebarLink.vue'

const isActive = () => {}

export default {
  name: 'SidebarLinks',

  components: { SidebarGroup, SidebarLink },

  props: [
    'items',
    'depth', // depth of current sidebar links
    'sidebarDepth', // depth of headers to be extracted
    'initialOpenGroupIndex'
  ],

  data() {
    return {
      openGroups: this.depth < 1 ? this.items.map((item, i) => i) : []
    }
  },
  created() {
    this.openGroups = this.depth < 1 ? this.items.map((item, i) => i) : []
  },

  methods: {
    toggleGroup(index) {
      if (this.openGroups.indexOf(index) === -1) {
        this.openGroups.push(index)
      } else {
        this.openGroups.splice(this.openGroups.indexOf(index), 1)
      }
    },

    isActive(page) {
      return isActive(this.$route, page.regularPath)
    }
  }
}

function descendantIsActive(route, item) {
  if (item.type === 'group') {
    const childIsActive = item.path && isActive(route, item.path)
    const grandChildIsActive = item.children.some((child) => {
      if (child.type === 'group') {
        return descendantIsActive(route, child)
      } else {
        return child.type === 'page' && isActive(route, child.path)
      }
    })

    return childIsActive || grandChildIsActive
  }
  return false
}
</script>

<style>
.sidebar-links .router-link-exact-active {
  color: #00c652 !important;
}
</style>
