<template>
  <div
    class="min-h-screen bg-white dark:bg-charcoal-500 text-charcoal-200 dark:text-charcoal-50"
  >
    <VsfNav
      class="h-12"
      @toggle="sidebarOpen = !sidebarOpen"
      :sidebar-open="sidebarOpen"
    />

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
    <!-- End Google Tag Manager (noscript) -->
    <Landing v-if="$page.frontmatter.layout === 'Landing'" />

    <div
      v-else
      class="flex gap-4 px-4 mx-auto 2xl:container flex-nowrap 2xl:px-0"
    >
      <div
        class="fixed top-0 left-0 z-10 block w-screen h-screen lg:hidden"
        @click="sidebarOpen = false"
        v-if="sidebarOpen"
      ></div>
      <div
        class="z-20 w-full bg-white sm:w-64 shrink-0 grow-0 lg:block lg:relative dark:bg-charcoal"
        :class="{
          'fixed left-0 pl-4': sidebarOpen,
          hidden: !sidebarOpen
        }"
      >
        <VsfSidebar
          :items="sidebarItems"
          class="sticky max-w-full overflow-hidden top-14"
        />
      </div>
      <VsfPage
        class="flex-1 min-w-0"
        @update-heading="currentSection = $event"
        @click="sidebarOpen = false"
      >
        <template #top>
          <slot name="page-top" />
        </template>
        <template #bottom> </template>
      </VsfPage>
      <div
        v-if="!$page.frontmatter.hideToc"
        class="hidden w-64 shrink-0 grow-0 flex-0 lg:block"
      >
        <div class="sticky pt-8 top-14">
          <p
            class="mb-2 text-xs font-bold uppercase text-charcoal dark:text-white"
          >
            On this page
          </p>

          <nav>
            <ul>
              <li v-for="header in tocHeaders" :key="header.slug" class="pb-1">
                <a
                  :href="`#${header.slug}`"
                  class="text-sm toc-link"
                  :class="{
                    'text-green-500':
                      currentSection == header.slug ||
                      (!currentSection &&
                        $route.hash.substring(1) === header.slug),
                    'hover:text-charcoal dark:hover:text-white': !(
                      currentSection == header.slug ||
                      (!currentSection &&
                        $route.hash.substring(1) === header.slug)
                    )
                  }"
                  :style="{
                    'padding-left': (header.level - 2) * 1 + 'em'
                  }"
                  >{{ header.title }}</a
                >
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
html.dark {
  background-color: rgb(29 31 34);
}

html.dark {
  color-scheme: dark;
}

body.overflow-hidden {
  overflow: auto;
}

@media (max-width: 640px) {
  body.overflow-hidden {
    overflow: hidden;
  }
}
</style>
