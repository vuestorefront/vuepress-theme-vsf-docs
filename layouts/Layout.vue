<template>
  <div
    class="w-full min-h-screen text-base bg-white dark:bg-zinc-900 text-slate-500 dark:text-zinc-400"
  >
    <VsfNav @toggle="sidebarOpen = !sidebarOpen" :sidebar-open="sidebarOpen" />

    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe
        :src="`https://www.googletagmanager.com/ns.html?id=${$site.themeConfig.GTM_TAG}`"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      >
      </iframe>
    </noscript>

    <div
      class="flex gap-4 px-4 mx-auto 2xl:container flex-nowrap 2xl:px-0 bg-inherit"
    >
      <div
        class="fixed top-0 left-0 z-10 block w-screen h-screen lg:hidden"
        @click="sidebarOpen = false"
        v-if="sidebarOpen"
      ></div>
      <div
        class="z-20 w-full sm:w-64 shrink-0 grow-0 lg:block lg:relative bg-inherit"
        :class="{
          'fixed left-0 pl-4': sidebarOpen,
          hidden: !sidebarOpen
        }"
      >
        <VsfSidebar
          :items="sidebarItems"
          class="sticky max-w-full overflow-x-visible"
          :class="{
            'top-24': $themeConfig.secondaryNav,
            'top-14': !$themeConfig.secondaryNav
          }"
        >
          <template #top>
            <slot name="sidebar-top" />
          </template>
        </VsfSidebar>
      </div>

      <VsfPage
        class="flex-1 min-w-0 mt-6 md:px-6"
        @update-heading="currentSection = $event"
        @click="sidebarOpen = false"
        :hideBreadcrumbs="hideBreadcrumbs"
      >
        <template #top>
          <slot name="page-top" />
        </template>
        <template #before-content>
          <slot name="before-content" />
        </template>
        <template #after-content>
          <slot name="after-content" />
        </template>
        <template #bottom>
          <slot name="page-bottom" />
        </template>
      </VsfPage>
      <div
        v-if="!$page.frontmatter.hideToc"
        class="hidden w-64 shrink-0 grow-0 flex-0 lg:block"
      >
        <div
          class="sticky pt-8 h-[calc(100vh-5.5em)] overflow-y-auto pb-32"
          :class="{
            'top-24': $themeConfig.secondaryNav,
            'top-14': !$themeConfig.secondaryNav
          }"
          v-if="tocHeaders && tocHeaders.length > 0"
        >
          <p
            class="mb-2 text-xs font-bold uppercase text-black dark:text-white"
          >
            On this page
          </p>

          <nav>
            <ul>
              <li v-for="header in tocHeaders" :key="header.slug" class="pb-1">
                <a
                  :href="`#${header.slug}`"
                  class="inline-flex items-center text-sm text-gray-500 toc-link dark:text-gray-400"
                  :class="{
                    '!text-green-500':
                      currentSection == header.slug ||
                      (!currentSection &&
                        $route.hash.substring(1) === header.slug),
                    'hover:text-black dark:hover:text-white': !(
                      currentSection == header.slug ||
                      (!currentSection &&
                        $route.hash.substring(1) === header.slug)
                    )
                  }"
                  :style="{
                    'padding-left': (header.level - 2) * 1 + 'em'
                  }"
                >
                  <template
                    v-if="
                      $page.frontmatter.fileDirToc &&
                      /The(.*)(Directory|File)/.test(header.title)
                    "
                  >
                    <iconify-icon
                      icon="ion:document-sharp"
                      v-if="header.title.includes('File')"
                      width="18"
                      class="mr-1"
                    />
                    <iconify-icon
                      icon="material-symbols:folder"
                      v-if="header.title.includes('Directory')"
                      width="18"
                      class="mr-1"
                    />
                    {{ /The(.*)(Directory|File)/.exec(header.title)[1] }}
                  </template>
                  <template v-else>
                    {{ header.title }}
                  </template>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <VsfFooter />
  </div>
</template>
<script>
import VsfSidebar from '../components/navigation/sidebar/VsfSidebar.vue'
import VsfNav from '../components/navigation/VsfNav.vue'
import VsfPage from '../components/VsfPage.vue'
import VsfFooter from '../components/VsfFooter.vue'

import { resolveSidebarItems } from '../util'
export default {
  props: {
    hideBreadcrumbs: {
      type: Boolean,
      default: false
    }
  },
  components: { VsfNav, VsfPage, VsfSidebar, VsfFooter },
  name: 'Layout',
  data() {
    return {
      currentSection: '',
      sidebarOpen: false
    }
  },
  computed: {
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
    tocHeaders() {
      if (this.$route.path === '/integrations/') {
        let integrations = this.$site.themeConfig.INTEGRATIONS['other']
          .map((i) => i.categories)
          .flat()
          .filter((val, index, arr) => arr.indexOf(val) === index)
          .map((val) => ({
            level: 3,
            slug: val.toLowerCase(),
            title: val
          }))
        return [...this.$page.headers, ...integrations]
      }

      return this.$page.headers
    }
  },
  watch: {
    $route() {
      this.sidebarOpen = false
    },
    sidebarOpen(val) {
      if (val) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    }
  }
}
</script>

<style>
body.overflow-hidden {
  overflow: auto;
}

@media (max-width: 640px) {
  body.overflow-hidden {
    overflow: hidden;
  }
}
</style>
