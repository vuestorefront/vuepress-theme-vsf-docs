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

<style>
/*

pre {
  background-color: #393d43;
  padding: 1em;
  border-radius: 0.5em;
}

.prose ul:not(.custom-block ul) {
  list-style-type: disc;
  margin: 0 0 0 2em;
  line-height: 32px;
}

.prose > div > ul li:not(:last-child) {
  margin-bottom: -32px;
}

.prose a:not(.custom-block a) {
  color: black;
  white-space: normal;
  border-bottom: 1px solid var(--vsf-green);
  transition: border-bottom 0.1s ease-out;
}

html.dark .prose a:not(.custom-block a) {
  color: white;
  white-space: normal;
  border-bottom: 1px solid var(--vsf-green);
}

.prose a:not(.custom-block a):hover {
  border-bottom: 2px solid var(--vsf-green);
}

.prose a:not(.custom-block a) > span {
  display: none;
}

.prose h1:not(.custom-block h1) {
  font-size: 2.125em;
  font-weight: 700;
}

.prose h2:not(.custom-block h2) {
  font-size: 1.5em;
  font-weight: 600;
}

.prose h1:not(.custom-block h1),
.prose h2:not(.custom-block h2),
.prose h3:not(.custom-block h3),
.prose h4:not(.custom-block h4),
.prose h5:not(.custom-block h5),
.prose h6:not(.custom-block h6) {
  scroll-margin-top: 4em;
  scroll-padding-top: 4em;
  white-space: normal;
}

.prose iframe {
  max-width: 32em;
  margin: 0 auto;
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  border-radius: 0.5em;
}

.prose table {
  border-collapse: collapse;
  border-radius: 5px;
  width: 100%;
  table-layout: fixed;
  line-height: 1.25em;
  font-size: 0.875em;
}

.prose table td code {
  white-space: pre-wrap;
}

.prose img {
  margin-left: auto;
  margin-right: auto;
}

.prose th {
  font-weight: 600;
  color: black;
}

html.dark th {
  color: white;
}
.prose th code {
  background-color: rgba(0, 0, 0, 0.5) !important;
  border: 1px solid #333 !important;
}

.prose td,
.prose th {
  text-align: left;
  padding: 0.5em 0;
  border-bottom: 1px solid #eee;
}

html.dark .prose td,
html.dark .prose th {
  border-bottom: 1px solid #3a363e;
}
.prose tr {
  width: 100%;
}

.prose th:first-of-type {
  border-top-left-radius: 5px;
}

.prose th:last-of-type {
  border-top-right-radius: 5px;
}

.prose ol {
  list-style-type: decimal;
  padding-left: 2em;
}

.prose code:not(pre code) {
  background-color: #eee;
  border-radius: 0.25em;
  margin-top: -0.125em;
  padding: 0.2em 0.5em;
  color: inherit;
}

html.dark .prose code:not(pre code) {
  background-color: #393d43;

  color: inherit;
}

.prose blockquote {
  padding: 2em;
  border-radius: 0.5em;
  background-color: #eee;
}

html.dark .prose blockquote {
  padding: 2em;
  border-radius: 0.5em;
  background-color: #393d43;
  color: white;
} */
</style>
