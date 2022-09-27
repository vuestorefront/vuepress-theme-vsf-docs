<template>
  <section
    :class="{
      collapsable: true
    }"
    class="overflow-x-visible"
  >
    <div v-if="item.title === 'TOP TILE'">
      <RouterLink
        to="/integrations/"
        class="flex items-center p-2 -mx-2 bg-black rounded dark:bg-white dark:bg-opacity-5 bg-opacity-5 hover:underline"
        v-if="$site.base === '/v2/'"
      >
        <Integration class="w-auto h-4 mr-2" />
        Integrations
      </RouterLink>
      <a
        href="https://docs.vuestorefront.io/v2/getting-started/introduction.html"
        class="hover:text-neutral dark:hover:text-white"
        v-else
      >
        Getting Started
      </a>
      <RouterLink
        to="/general/enterprise"
        class="flex items-center p-2 mt-2 -mx-2 bg-black rounded dark:bg-white dark:bg-opacity-5 bg-opacity-5 hover:underline"
        v-if="$site.base === '/v2/'"
      >
        <Enterprise class="w-auto h-4 mr-2" />
        Enterprise
      </RouterLink>
      <a
        href="https://docs.vuestorefront.io/v2/general/enterprise.html"
        class="hover:text-neutral dark:hover:text-white"
        v-else
      >
        Getting Started
      </a>
    </div>

    <RouterLink
      v-else-if="item.path && !!item.title.length"
      class="sidebar-heading clickable"
      :class="{
        open,
        active: isActive($route, item)
      }"
      :to="item.path"
      @click.native="$emit('toggle')"
    >
      <span v-if="collapsable" class="arrow" :class="open ? 'down' : 'right'" />
      <span
        :class="{
          'uppercase text-xs font-medium text-neutral dark:text-white':
            depth === 0
        }"
        >{{ item.title }}</span
      >
    </RouterLink>
    <component
      v-else-if="!!item.title.length"
      :is="collapsable ? 'button' : 'div'"
      class="flex items-center w-full p-1 rounded sidebar-heading sidebar-dropdown"
      :class="{
        open: true,
        'cursor-pointer group hover:bg-slate-100 dark:hover:bg-neutral-700 ':
          collapsable
      }"
      @click="collapsable && $emit('toggle')"
    >
      <span
        class="text-base sm:text-sm"
        :class="{
          'text-neutral-900 dark:text-white font-medium': depth === 0
        }"
        >{{ item.title }}</span
      >
      <Icon
        icon="ic:outline-keyboard-arrow-right"
        class="ml-auto transition-transform duration-150"
        :class="{
          'rotate-90': open
        }"
        :height="16"
        v-if="collapsable"
      />
    </component>

    <Transition
      name="dropdown"
      @enter="setHeight"
      @after-enter="unsetHeight"
      @before-leave="setHeight"
    >
      <SidebarLinks
        v-if="open || !collapsable"
        class="px-1 sidebar-group-items"
        :class="{
          'mb-4': depth == 0
        }"
        :items="item.children"
        :sidebar-depth="item.sidebarDepth"
        :initial-open-group-index="item.initialOpenGroupIndex"
        :depth="depth + 1"
      />
    </Transition>
  </section>
</template>

<script>
import Integration from '../../icons/Integration.vue'
import Enterprise from '../../icons/Enterprise.vue'

export default {
  name: 'SidebarGroup',
  components: {
    Integration,
    Enterprise
  },
  props: ['item', 'open', 'collapsable', 'depth'],

  // ref: https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
  beforeCreate() {
    this.$options.components.SidebarLinks =
      require('./VsfSidebarLinks.vue').default
  },

  methods: {
    isActive(path, route) {
      return path === route.path
    },
    setHeight(items) {
      // explicitly set height so that it can be transitioned
      items.style.height = items.scrollHeight + 'px'
    },
    unsetHeight(items) {
      items.style.height = ''
    }
  }
}
</script>

<style>
.sidebar-heading.open,
.sidebar-heading:hover {
  color: inherit;
}

.sidebar-heading.clickable.active {
  font-weight: 600;
  color: var(--c-brand);
  border-left-color: var(--c-brand);
}
.sidebar-heading.clickable:hover {
  color: var(--c-brand);
}

.dropdown-enter,
.dropdown-leave-to {
  height: 3px !important;
}

.dropdown-enter-active,
.dropdown-leave-active {
  overflow: hidden;
  transition: height 0.1s linear;
}
</style>
