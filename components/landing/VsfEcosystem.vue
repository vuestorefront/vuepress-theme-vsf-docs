<template>
  <section class="mt-36 custom-block">
    <header class="text-center">
      <h2 class="text-4xl font-extrabold">
        Explore the Rest of the Vue Storefront Ecosystem
      </h2>
      <div class="!mt-4 text-xl custom-block subheader">
        <p>
          We offer different tools to help you create better customer
          experiences.
        </p>
      </div>
    </header>
    <StorefrontUi v-if="!hideSfui"/>
    <VsfCloud v-if="!hideCloud"/>
  </section>
</template>

<script>
export default {
  props: {
    hideSfui: {
      type: Boolean,
      default: false
    },
    hideCloud: {
      type: Boolean,
      default: false
    }
  }
}
</script>
