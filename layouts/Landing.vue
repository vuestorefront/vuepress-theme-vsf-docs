<template>
  <div
    class="min-h-screen pb-64 bg-white dark:bg-charcoal-500 text-charcoal-400 dark:text-charcoal-50"
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
    <!-- End Google Tag Manager (noscript) -->
    <main
      class="relative custom-block"
      :aria-labelledby="data.heroText !== null ? 'main-title' : null"
    >
      <div
        class="fixed top-0 left-0 z-10 block w-screen h-screen lg:hidden"
        @click="sidebarOpen = false"
        v-if="sidebarOpen"
      ></div>
      <div
        class="z-20 block w-full bg-white sm:w-64 shrink-0 grow-0 lg:hidden"
        :class="{
          'fixed left-0 pl-4 top-14': sidebarOpen,
          hidden: !sidebarOpen
        }"
      >
        <VsfSidebar
          :items="[]"
          class="sticky max-w-full overflow-hidden top-14"
        />
      </div>
      <header class="container grid grid-cols-2 mx-auto mt-8 gap-y-8">
        <div class="flex flex-col justify-center col-span-2 md:col-span-1">
          <img
            v-if="data.heroImage"
            :src="$withBase(data.heroImage)"
            :alt="data.heroAlt || 'hero'"
          />

          <h1
            v-if="data.heroText !== null"
            id="main-title"
            class="text-5xl font-black text-black md:text-4xl lg:text-5xl dark:text-white"
          >
            {{ data.heroText || $title || 'Hello' }}
          </h1>

          <p v-if="data.tagline !== null" class="mt-8 text-lg">
            {{
              data.tagline || $description || 'Welcome to your VuePress site'
            }}
          </p>

          <p v-if="data.actionText && data.actionLink" class="flex mt-8">
            <RouterLink
              :to="data.actionLink"
              class="px-4 py-2 mr-2 text-white rounded bg-green hover:brightness-105"
            >
              {{ data.actionText }}
            </RouterLink>
            <a
              href="https://github.com/vuestorefront/"
              target="_blank"
              class="px-4 py-2 mr-2 bg-black rounded bg-opacity-10 dark:bg-white dark:bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-20"
            >
              Star on Github
            </a>
          </p>
        </div>
        <div class="col-span-2 md:col-span-1">
          <iframe
            src="https://www.youtube-nocookie.com/embed/MCN1rRwuIGs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full rounded aspect-video"
          ></iframe>
        </div>
      </header>
      <h2
        class="container mx-auto mt-32 mb-8 text-xl font-bold text-charcoal dark:text-white"
      >
        Learn about Vue Storefront
      </h2>

      <div
        v-if="data.features && data.features.length"
        class="container grid grid-cols-3 gap-8 mx-auto mb-32"
      >
        <div
          v-for="(feature, index) in data.features"
          :key="index"
          class="flex flex-col col-span-3 md:col-span-1"
        >
          <h2 class="mb-2 font-medium text-black dark:text-white">
            {{ feature.title }}
          </h2>
          <p class="mb-4">{{ feature.details }}</p>
          <div class="mt-auto">
            <RouterLink
              :to="feature.link"
              class="mt-8 underline hover:text-green-500"
            >
              {{ feature.linkText }}
            </RouterLink>
          </div>
        </div>
      </div>
      <section
        class="py-16 bg-gray-100 landing-ecommerce-list dark:bg-charcoal-600"
      >
        <h2
          class="container mx-auto text-3xl font-bold text-charcoal dark:text-white"
        >
          E-commerce Integrations
        </h2>

        <p class="container mx-auto mt-2">
          Vue Storefront's integrations with e-commerce platforms are the
          backbone of every project.
        </p>

        <IntegrationList
          :filterable="false"
          type="eCommerce"
          :fullscreen="true"
          :minimized="true"
          class="container mx-auto"
        >
        </IntegrationList>
        <p class="container mx-auto mt-8">
          Don't see your e-commerce platform?
          <RouterLink
            to="/integrate/integration-guide.html"
            class="text-green hover:underline"
          >
            Learn how to build your own integration.
          </RouterLink>
        </p>
      </section>
      <Content class="custom" />

      <div v-if="data.footer" class="footer">
        {{ data.footer }}
      </div>
      <section></section>
    </main>
    <VsfFooter />
  </div>
</template>

<script>
import VsfFooter from '../components/VsfFooter.vue'
import VsfSidebar from '../components/navigation/sidebar/VsfSidebar.vue'

import VsfNav from '../components/navigation/VsfNav.vue'
import IntegrationList from '../components/IntegrationList.vue'
export default {
  name: 'Home',

  components: { VsfNav, IntegrationList, VsfFooter, VsfSidebar },
  data() {
    return {
      sidebarOpen: false
    }
  },
  computed: {
    data() {
      return this.$page.frontmatter
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
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
</style>
