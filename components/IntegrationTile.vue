<template>
  <div
    :class="{
      'opacity-50': status === $site.themeConfig.STATUS.WIP
    }"
    class="flex flex-col pb-0 whitespace-normal transition-colors bg-white border-2 border-transparent rounded dark:bg-charcoal-500"
  >
    <div class="flex items-center p-4">
      <div
        class="flex items-center justify-center w-12 h-12 p-1 mr-2 bg-gray-200 rounded"
      >
        <img
          :src="`/v2/integrations-logos/thumbnails/${name
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/\./g, '-')}.png`"
          class="object-contain w-full h-8 p-1"
          :alt="name"
        />
      </div>
      <div>
        <span class="font-medium text-charcoal dark:text-white">{{
          name
        }}</span>
      </div>
    </div>
    <div class="px-4 mb-16 tile-data">
      <div class="tile-info">
        <div class="flex gap-2 tile-badges items-top">
          <div
            v-if="license === $site.themeConfig.LICENSE.ENTERPRISE"
            class="px-2 py-1 text-xs text-white rounded"
            :class="{
              'bg-green-500': license === $site.themeConfig.LICENSE.ENTERPRISE,
              'bg-red-500': license === $site.themeConfig.LICENSE.COMMERCIAL,
              'bg-blue-500': license === $site.themeConfig.LICENSE.OPEN_SOURCE
            }"
          >
            {{ license }}
          </div>

          <div
            v-if="status === $site.themeConfig.STATUS.BETA"
            class="px-2 py-1 text-xs text-white rounded"
            :class="{
              'bg-purple-500': status === $site.themeConfig.STATUS.BETA,
              'bg-gray-500': status === $site.themeConfig.STATUS.WIP
            }"
          >
            {{ status }}
          </div>
        </div>
        <p class="mt-4 text-sm" v-if="typeof link !== 'string'">
          Compatible with {{ link.map((val) => val.name).join(' and ') }}
        </p>
      </div>
    </div>

    <div class="px-2 py-2 mt-auto border-t dark:border-charcoal-400">
      <p v-if="!link" class="inline-flex items-center py-1 text-sm">
        <Doc class="w-6 h-6 mr-1" />In Development
      </p>
      <a
        v-else-if="typeof link === 'string'"
        :href="link"
        class="inline-flex items-center p-2 text-sm rounded text-green hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
      >
        <Doc class="w-6 h-6 mr-1" /> DOCS</a
      >
      <template v-else>
        <a
          v-for="{ name, link: docs } in Object.values(link)"
          :key="name"
          :href="docs"
          class="inline-flex items-center p-2 text-sm rounded text-green hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5"
        >
          <Doc class="w-6 h-6 mr-1" />
          <span>DOCS</span>
          <span v-if="Object.values(link).length > 1" class="ml-1"
            >({{ name }})</span
          >
        </a></template
      >
    </div>
  </div>
</template>

<script>
import Doc from './icons/Doc.vue'
export default {
  name: 'IntegrationTile',
  components: {
    Doc
  },
  props: {
    minimized: {
      type: Boolean,
      required: false,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    link: {
      type: [String, Array],
      required: false
    },
    image: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    license: {
      type: String,
      required: true
    },
    maintainedBy: {
      type: Array,
      required: false
    },
    categories: {
      type: Array,
      required: false
    }
  },

  computed: {
    statusClass() {
      const [key] = Object.entries(this.$site.themeConfig.STATUS).find(
        ([_, value]) => value === this.status
      )

      return `tile-status-${key.toLowerCase()}`
    },

    licenseClass() {
      const [key] = Object.entries(this.$site.themeConfig.LICENSE).find(
        ([_, value]) => value === this.license
      )

      return `tile-license-${key.toLowerCase()}`
    }
  }
}
</script>
