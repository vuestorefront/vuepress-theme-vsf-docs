<template>
  <main class="relative text-base prose page">
    <slot name="top" />
    <BetaBanner v-if="$page.frontmatter.betaBanner" class="mt-4" />
    <Breadcrumbs
      v-if="
        !$page.frontmatter.hideBreadcrumbs &&
        $page.frontmatter.layout !== 'home'
      "
    />
    <div class="flex flex-wrap mb-2" v-if="$page.frontmatter.enterpriseTag">
      <p
        class="flex items-center gap-1 px-2 text-xs font-medium text-yellow-800 bg-yellow-500 rounded bg-opacity-20 dark:bg-yellow-500 dark:bg-opacity-20 dark:text-yellow-50"
      >
        <Icon icon="material-symbols:star" height="16" class="mb-[2px]" />
        <span> Enterprise </span>
      </p>
    </div>
    <h2
      v-if="$page.frontmatter.pretitle"
      class="!mt-0 mb-2 text-sm capitalize text-green dark:text-green"
    >
      {{ $page.frontmatter.pretitle }}
    </h2>
    <Content class="pb-8 mb-8 theme-default-content" :key="$route.fullPath" />
    <div
      class="flex items-center justify-end mb-4 text-sm"
      v-if="$themeConfig.docsRepoPath"
    >
      <a
        :href="`${$themeConfig.docsRepoPath}${$route.path.replace(
          '.html',
          '.md'
        )}`"
        target="_blank"
        class="!border-b-0 !text-inherit hover:!text-neutral-900 dark:hover:!text-white flex items-center"
      >
        <Icon
          class="mb-[3px] mr-1"
          icon="material-symbols:edit-square-outline-rounded"
        />
        <span> Edit this page </span>
      </a>
    </div>
    <PageNav v-if="!$page.frontmatter.hideNav" />
    <slot name="bottom" />
  </main>
</template>

<script>
import PageNav from './navigation/PageNav.vue'
import Edit from './icons/Edit.vue'
import BetaBanner from './BetaBanner.vue'
import Breadcrumbs from './navigation/Breadcrumbs.vue'

let observer

export default {
  props: ['sidebarItems'],
  components: {
    PageNav,
    Edit,
    BetaBanner,
    Breadcrumbs
  },
  mounted() {
    this.observeHeadings()
    const hash = this.$route.hash
    if (!!hash) {
      document.getElementById(hash.substring(1)).scrollIntoView()
    }
  },
  updated() {
    this.observeHeadings()
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.$nextTick(() => {
          const hash = this.$route.hash
          if (!!hash) {
            document.getElementById(hash.substring(1)).scrollIntoView()
          }
        })
      }
    }
  },
  methods: {
    observeHeadings() {
      if (observer) {
        observer.disconnect()
      }
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            let id = entry.target.getAttribute('id')
            if (!!id) {
              if (entry.isIntersecting) {
                this.$emit('update-heading', id)
              }
            }
          })
        },
        { threshold: 0.1, rootMargin: '-10% 0% -70% 0%' }
      )
      document.querySelectorAll('.prose h2, .prose h3').forEach((section) => {
        observer.observe(section)
      })
    }
  }
}
</script>
