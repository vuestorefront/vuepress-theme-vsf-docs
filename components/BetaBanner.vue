<template>
  <div class="w-full mt-4 text-sm lg:p-0">
    <div
      class="block w-full max-w-xl p-4 px-8 mx-auto text-left bg-orange-500 bg-opacity-50 rounded text-neutral-900 dark:text-white"
    >
      <div class="flex items-center">
        <Icon icon="ph:warning-circle-fill" class="mr-4" width="24" />
        <span>
          This integration is currently in
          <strong class="text-neutral-900 dark:text-white">Beta</strong> and not
          ready for production usage.
        </span>
      </div>
    </div>
    <p class="w-full max-w-xl mx-auto text-left">
      You can help us to make the integration production-ready faster by
      reporting bugs and contributing to the code at the
      <a :href="`${$themeConfig.repo}/issues`" target="_blank"
        >repository issues page</a
      >.
    </p>
  </div>
</template>

<script></script>
