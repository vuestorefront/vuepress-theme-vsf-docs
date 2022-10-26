<template>
  <section class="mt-24 custom-block">
    <header
      class="flex flex-col justify-between gap-4 md:items-center md:flex-row"
    >
      <div>
        <h2>New to Vue Storefront?</h2>
        <div class="custom-block subheader">
          <p>
            Our core documentation has everything you need to get started with
            Vue Storefront.
          </p>
        </div>
      </div>
      <div class="flex items-center shrink-0">
        <a
          href="https://docs.vuestorefront.io/v2/"
          class="inline-block px-4 py-2 text-sm font-medium text-left no-underline !border-b-0 rounded indent-0 group-hover:underline bg-slate-200 text-slate-800 dark:bg-zinc-800 dark:text-slate-200"
        >
          View Core Docs
        </a>
      </div>
    </header>

    <div class="grid grid-cols-12 gap-8 mt-8 custom-block">
      <div class="col-span-12 md:col-span-4">
        <NavCard
          to="/guide"
          title="What is Vue Storefront?"
          description="An introduction to Vue Storefront and how it can help you build better storefronts."
          :isCard="true"
          :readMore="true"
          :border="true"
        />
      </div>
      <div class="col-span-12 md:col-span-4">
        <NavCard
          to="/guide"
          title="Vue Storefront Architecture"
          description="Composable commerce lets you freely shape your customer experience."
          :isCard="true"
          :readMore="true"
          :border="true"
        />
      </div>
      <div class="col-span-12 md:col-span-4">
        <NavCard
          to="/guide"
          title="Extending Vue Storefront"
          description="Customize your Vue Storefront project to meet your needs."
          :isCard="true"
          :readMore="true"
          :border="true"
        />
      </div>
    </div>
  </section>
</template>

<script>
import NavCard from '../NavCard.vue'
export default {
  components: {
    NavCard
  }
}
</script>
