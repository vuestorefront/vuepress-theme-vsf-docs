<template>
  <div class="w-full mt-4 mb-4 lg:p-0 custom-block">
    <div
      class="block p-4 px-6 mx-auto text-left bg-purple-500 rounded bg-opacity-20 dark:bg-purple-300 dark:bg-opacity-30 text-neutral-900 dark:text-white"
    >
      <div class="flex items-center">
        <Icon
          icon="ph:warning-circle-fill"
          class="mr-4 shrink-0"
          width="30px"
        />
        <div>
          <p class="text-sm font-medium">
            This integration is currently in Beta and not ready for production
            usage.
          </p>
          <p
            class="mt-1 text-sm text-neutral-700 dark:text-neutral-300"
            v-if="canContribute"
          >
            You can help us to make the integration production-ready faster by
            reporting bugs and contributing to the code at the
            <a
              :href="`${$themeConfig.repo}/issues`"
              target="_blank"
              class="underline hover:text-neutral-900 dark:hover:text-white"
              >repository issues page</a
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    canContribute: {
      type: Boolean,
      default: true
    }
  }
}
</script>
