<template>
  <ul v-if="items.length" class="text-sm text-inherit sidebar-links">
    <li
      v-for="(item, i) in items"
      :key="depth + ' ' + i + ' ' + item.title"
      :class="{
        'mb-2': depth < 1,
        'pl-3   ': depth >= 1,
        'border-l pl-4 pt-2 border-gray-200 dark:border-zinc-700 ml-1 mr-1':
          depth > 1
      }"
      class="py-1 text-base sm:py-0 sm:text-sm"
    >
      <SidebarGroup
        v-if="item.type === 'group'"
        :item="item"
        :open="openGroups.indexOf(i) !== -1"
        :collapsable="item.collapsable || item.collapsible"
        :depth="depth"
        :class="{
          '-mx-1': depth >= 1
        }"
        @toggle="toggleGroup(i)"
      />
      <a
        v-else-if="item.path && item.path.indexOf('http') === 0"
        :href="item.path"
        class="inline-block py-1 transition-colors hover:text-black dark:hover:text-white"
        :class="{
          'px-1': depth === 0
        }"
      >
        {{ item.title }}
      </a>
      <RouterLink
        v-else-if="item.path"
        :to="item.path"
        class="inline-block py-1 transition-colors hover:text-black dark:hover:text-white"
        :class="{
          'px-1': depth === 0,
          active: isActive(item.path)
        }"
      >
        {{ item.title }}
      </RouterLink>
    </li>
  </ul>
</template>

<script>
import { isActive } from '../../../util'
import SidebarGroup from './VsfSidebarGroup.vue'
import SidebarLink from './VsfSidebarLink.vue'

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
      openGroups:
        this.depth < 1
          ? this.items.map((item, i) => i)
          : this.items
              .filter((item) => this.descendantIsActive(this.$route, item))
              .map((item, i) => i)
    }
  },
  created() {
    this.openGroups =
      this.depth < 1
        ? this.items.map((item, i) => i)
        : this.items
            .map((item, i) => i)
            .filter((index) =>
              this.descendantIsActive(this.$route, this.items[index])
            )
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
      return this.$route.path === page
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
    }
  }
}
</script>

<style>
.sidebar-links .active {
  color: #03bb4e !important;
}
</style>
