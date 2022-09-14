<template>
  <section
    :class="{
      collapsable: true
    }"
    class="mb-2"
  >
    <div v-if="item.title === 'TOP TILE'">
      <RouterLink
        to="/integrations/"
        class="flex items-center p-2 bg-black rounded dark:bg-white dark:bg-opacity-5 bg-opacity-5 hover:underline"
        v-if="$site.base === '/v2/'"
      >
        <Integration class="w-auto h-4 mr-2" />
        Integrations
      </RouterLink>
      <a
        href="https://docs.vuestorefront.io/v2/getting-started/introduction.html"
        class="hover:text-charcoal dark:hover:text-white"
        v-else
      >
        Getting Started
      </a>
      <RouterLink
        to="/general/enterprise"
        class="flex items-center p-2 mt-2 bg-black rounded dark:bg-white dark:bg-opacity-5 bg-opacity-5 hover:underline"
        v-if="$site.base === '/v2/'"
      >
        <Enterprise class="w-auto h-4 mr-2" />
        Enterprise
      </RouterLink>
      <a
        href="https://docs.vuestorefront.io/v2/general/enterprise.html"
        class="hover:text-charcoal dark:hover:text-white"
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
        active: isActive($route, item.path)
      }"
      :to="item.path"
      @click.native="$emit('toggle')"
    >
      <span v-if="collapsable" class="arrow" :class="open ? 'down' : 'right'" />
      <span
        :class="{
          'uppercase text-xs font-medium text-charcoal dark:text-white':
            depth === 0
        }"
        >{{ item.title }}</span
      >
    </RouterLink>
    <p
      v-else-if="!!item.title.length"
      class="flex items-center p-1 rounded sidebar-heading sidebar-dropdown"
      :class="{
        open: true,
        'hover:bg-black dark:hover:bg-white hover:bg-opacity-5 dark:hover:bg-opacity-10 cursor-pointer':
          collapsable
      }"
      @click="$emit('toggle')"
    >
      <span
        :class="{
          'uppercase text-xs font-bold text-charcoal dark:text-white':
            depth === 0
        }"
        >{{ item.title }}</span
      >
      <span v-if="collapsable" class="arrow" :class="open ? 'down' : 'right'" />
    </p>

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

const isActive = () => {}

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
    isActive,
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
.sidebar-heading .arrow {
  position: relative;
  top: -0.1em;
  margin-left: auto;
  width: 0;
  height: 0;
  transition: transform 0.2s ease-out;
}

.arrow.right {
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;

  border-left: 4px solid #ccc;
}

.arrow.down {
  display: inline-block;
  left: 0.1em;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;

  border-left: 4px solid #ccc;
  transform: rotate(90deg) translateY(2px);
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
  height: 0 !important;
}

.dropdown-enter-active,
.dropdown-leave-active {
  overflow: hidden;
  transition: height 0.2s ease;
}
</style>
