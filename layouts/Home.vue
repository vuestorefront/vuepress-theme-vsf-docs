<template>
  <div
    class="w-full min-h-screen text-base bg-white dark:bg-neutral-900 text-slate-500 dark:text-slate-400 home"
  >
    <VsfNav @toggle="sidebarOpen = !sidebarOpen" :sidebar-open="sidebarOpen" />

    <div class="container relative mx-auto max-w-7xl gap-y-16">
      <div
        class="fixed top-0 left-0 z-10 block w-screen h-screen lg:hidden"
        @click="sidebarOpen = false"
        v-if="sidebarOpen"
      ></div>
      <div
        class="z-50 block w-full bg-white sm:w-64 shrink-0 grow-0 lg:hidden"
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
      <VsfPage />
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
  background-color: rgb(29 31 34);
}

html.dark {
  color-scheme: dark;
}

.home .header-anchor {
  display: none;
}
</style>
