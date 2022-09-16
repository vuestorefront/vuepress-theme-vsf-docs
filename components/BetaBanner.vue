<template>
  <div class="w-full mt-4 mb-8 lg:p-0 custom-block">
    <div
      class="block p-4 px-6 mx-auto text-left bg-opacity-50 rounded bg-rose-500 text-neutral-900 dark:text-white"
    >
      <div class="flex items-center">
        <Icon icon="ph:warning-circle-fill" class="mr-4" width="30" />
        <div>
          <p class="text-sm font-medium">
            This integration is currently in Beta and not ready for production
            usage.
          </p>
          <p class="mt-1 text-sm opacity-80">
            You can help us to make the integration production-ready faster by
            reporting bugs and contributing to the code at the
            <a
              :href="`${$themeConfig.repo}/issues`"
              target="_blank"
              class="underline"
              >repository issues page</a
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
