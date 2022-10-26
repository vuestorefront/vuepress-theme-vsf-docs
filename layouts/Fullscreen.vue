<template>
  <div
    class="w-full min-h-screen text-base bg-white dark:bg-zinc-900 text-slate-500 dark:text-zinc-400 home"
    :class="{
      enterprise: $themeConfig.enterprise
    }"
  >
    <VsfNav @toggle="sidebarOpen = !sidebarOpen" :sidebar-open="sidebarOpen" />
    <div class="gap-4 mx-auto 2xl:container flex-nowrap 2xl:px-0 bg-inherit">
      <div
        class="fixed top-0 left-0 z-10 block w-screen h-screen lg:hidden"
        @click="sidebarOpen = false"
        v-if="sidebarOpen"
      ></div>
      <div
        class="z-30 block w-full bg-inherit sm:w-64 shrink-0 grow-0 lg:hidden"
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
      <slot />
    </div>
    <VsfFooter />
  </div>
</template>

<script>
import VsfNav from '../components/navigation/VsfNav.vue'
import VsfPage from '../components/VsfPage.vue'
import VsfFooter from '../components/VsfFooter.vue'
import VsfSidebar from '../components/navigation/sidebar/VsfSidebar.vue'

export default {
  components: {
    VsfNav,
    VsfPage,
    VsfFooter,
    VsfSidebar
  },
  data() {
    return {
      sidebarOpen: false
    }
  }
}
</script>

<style>
html.dark {
  color-scheme: dark;
}

.home .header-anchor {
  display: none;
}

.home h1:hover,
.home h2:hover,
.home h3:hover,
.home h4:hover {
  text-decoration: none !important;
}
</style>
