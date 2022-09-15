<template>
  <RouterLink
    :to="to"
    class="flex-col block w-full my-8 text-left no-underline rounded indent-0 group"
  >
    <div>
      <div v-if="$slots.default" class="inline-block p-2 rounded bg-green">
        <slot />
      </div>

      <h2
        class="flex items-center gap-2 mt-2 text-lg font-bold group-hover:underline"
      >
        {{ title }}
      </h2>
      <p class="mt-2 whitespace-normal indent-0 opacity-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <RouterLink
        :to="to"
        class="flex-col block w-full my-8 text-sm text-left no-underline rounded indent-0 group"
      >
        Read More
      </RouterLink>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    to: String,
    title: String,
    readMore: {
      type: Boolean,
      default: false
    }
  }
}
</script>
