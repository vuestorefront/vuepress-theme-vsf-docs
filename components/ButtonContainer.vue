<template>
  <div class="flex items-center">
    <component
      :to="to"
      :is="elType"
      :href="to"
      :target="target"
      class="inline-block px-4 py-2 no-underline !border-b-0 rounded bg-slate-200 dark:bg-zinc-800 hover:brightness-105 dark:hover:brightness-110"
    >
      <slot name="default" />
    </component>
  </div>
</template>

<script>
export default {
  props: {
    to: String
  },
  computed: {
    elType() {
      return this.to.includes('http') ? 'a' : 'RouterLink'
    },
    target() {
      return this.to.includes('http') &&
        !this.to.includes('docs.vuestorefront.io')
        ? '_blank'
        : '_self'
    }
  }
}
</script>
