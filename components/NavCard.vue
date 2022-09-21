<template>
  <component
    :to="to"
    :is="elType"
    :href="to"
    :target="target"
    class="flex flex-col w-full h-full text-left no-underline rounded-lg indent-0 group"
    :class="{
      'p-4 border ': border,
      'dark:border-neutral-700': border && !green,
      'border-green dark:border-green': border && green,
      ' hover:-translate-y-1 hover:shadow-md transition-all': isCard,
      'bg-green text-white': green
    }"
  >
    <div>
      <div
        v-if="$slots.default"
        class="inline-block rounded"
        :class="{
          'bg-green p-2': !green
        }"
      >
        <slot />
      </div>
    </div>
    <h2
      class="flex items-center gap-2 mt-2 text-lg font-bold"
      :class="{
        'text-white': green
      }"
    >
      {{ title }}
    </h2>
    <p
      class="mt-2 whitespace-normal indent-0"
      :class="{
        'opacity-80': !green,
        'opacity-100': green
      }"
    >
      {{ description }}
    </p>
    <div class="pt-8 mt-auto" v-if="readMore">
      <span
        class="inline-block px-4 py-2 text-sm text-left no-underline rounded indent-0 group-hover:underline bg-slate-200 text-slate-800 dark:bg-neutral-800 dark:text-slate-200"
      >
        Read More
      </span>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    to: String,
    title: String,
    description: String,
    isCard: {
      type: Boolean,
      default: true
    },
    readMore: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    green: {
      type: Boolean,
      default: false
    }
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
