<template>
  <main class="relative break-words whitespace-pre-wrap md:px-8 doc page">
    <slot name="top" />

    <Content class="pb-8 mb-8 theme-default-content" :key="$route.fullPath" />
    <div class="text-sm" v-if="$themeConfig.docsRepoPath">
      <a
        :href="`${$themeConfig.docsRepoPath}${$route.path.replace(
          '.html',
          '.md'
        )}`"
        target="_blank"
        class="hover:!underline !no-underline !text-charcoal-200 dark:!text-charcoal-50"
        >Edit this page</a
      >
    </div>
    <PageNav />
    <slot name="bottom" />
  </main>
</template>

<script>
import PageNav from './navigation/PageNav.vue'
let observer

export default {
  props: ['sidebarItems'],
  components: {
    PageNav
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
      document.querySelectorAll('.doc h2, .doc h3').forEach((section) => {
        observer.observe(section)
      })
    }
  }
}
</script>

<style>
main .header-anchor {
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  padding-right: 4px;
  font-weight: 400;
  opacity: 0;
  text-decoration: none !important;
}

main .header-anchor:hover {
  text-decoration: underline !important;
}

main *:hover > .header-anchor {
  opacity: 1;
}

.doc {
  padding: 0 16px;
}

.doc pre {
  white-space: auto;
  margin-bottom: 2rem;
}

.doc code:not(pre code) {
  white-space: nowrap;
}

main p:not(.custom-block p) {
  line-height: 32px;
}

h1:not(.custom-block *),
h2:not(.custom-block *),
h3:not(.custom-block *),
h4:not(.custom-block *),
h5:not(.custom-block *),
h6:not(.custom-block *),
strong:not(.custom-block *) {
  font-weight: 500;
  color: #1d1f22;
  position: relative;
  white-space: normal;
}

html.dark h1:not(.custom-block *),
html.dark h2:not(.custom-block *),
html.dark h3:not(.custom-block *),
html.dark h4:not(.custom-block *),
html.dark h5:not(.custom-block *),
html.dark h6:not(.custom-block *),
html.dark strong:not(.custom-block *) {
  font-weight: 500;
  white-space: normal;
  color: white;
}

pre {
  background-color: #393d43;
  padding: 1rem;
  border-radius: 0.5rem;
}

.doc ul:not(.custom-block ul) {
  list-style-type: disc;
  margin: 0 0 0 2rem;
  line-height: 32px;
}

.doc > div > ul li:not(:last-child) {
  margin-bottom: -32px;
}

.doc a:not(.custom-block a) {
  color: #00c652;
  text-decoration: underline;
  white-space: normal;
}

.doc a:not(.custom-block a) > span {
  display: none;
}

.doc h1:not(.custom-block h1) {
  font-size: 2em;
  font-weight: 700;
}

.doc h2:not(.custom-block h2) {
  font-size: 1.75em;
}

.doc h1:not(.custom-block h1),
.doc h2:not(.custom-block h2),
.doc h3:not(.custom-block h3),
.doc h4:not(.custom-block h4),
.doc h5:not(.custom-block h5),
.doc h6:not(.custom-block h6) {
  scroll-margin-top: 4em;
  scroll-padding-top: 4em;
  white-space: normal;
}

.doc iframe {
  max-width: 32rem;
  margin: 0 auto;
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  border-radius: 0.5rem;
}

.doc table {
  border-collapse: collapse;
  border-radius: 5px;
  width: 100%;
  table-layout: fixed;
  line-height: 1.25rem;
  font-size: 0.875rem;
}

.doc table td code {
  white-space: pre-wrap;
}

.doc img {
  margin-left: auto;
  margin-right: auto;
}

.doc th {
  font-weight: 600;
  color: black;
}
.doc th code {
  background-color: rgba(0, 0, 0, 0.5) !important;
  border: 1px solid #333 !important;
}

.doc td,
.doc th {
  text-align: left;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.doc tr {
  width: 100%;
}

.doc th:first-of-type {
  border-top-left-radius: 5px;
}

.doc th:last-of-type {
  border-top-right-radius: 5px;
}

.doc ol {
  list-style-type: decimal;
  padding-left: 2rem;
}

.doc code:not(pre code) {
  background-color: #eee;
  border-radius: 0.25rem;
  margin-top: -0.125rem;
  padding: 0.2rem 0.5rem;
  color: inherit;
}

html.dark .doc code:not(pre code) {
  background-color: #393d43;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  color: inherit;
  border: 1px solid #555b64;
}

.doc blockquote {
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #eee;
}

html.dark .doc blockquote {
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #393d43;
  color: white;
}
</style>
