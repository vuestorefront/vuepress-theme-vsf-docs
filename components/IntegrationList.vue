<template>
  <div
    class="py-4 bg-gray-100 rounded dark:bg-charcoal-600 custom-block"
    :class="{
      'px-4': !fullscreen
    }"
  >
    <div v-if="type === 'other'" class="integrations">
      <div
        v-for="integration in availableIntegrations"
        :key="integration.category"
      >
        <h3
          :id="integration.category.toLowerCase()"
          class="relative whitespace-normal"
        >
          <a
            :href="`#${integration.category.toLowerCase()}`"
            class="header-anchor"
            >#</a
          >
          {{ integration.category }}
        </h3>
        <div class="grid grid-cols-12 gap-4 mb-16 list">
          <IntegrationTile
            v-for="integration in integration.integrations"
            :key="integration.key"
            v-bind="integration"
            :class="{
              'col-span-6 md:col-span-4 lg:col-span-3': fullscreen,
              'col-span-12 lg:col-span-6': !fullscreen
            }"
          />
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-12 gap-4 list"
      :class="{ minimized: minimized }"
      v-else
    >
      <IntegrationTile
        v-for="integration in sortedIntegrations"
        :key="integration.key"
        v-bind="integration"
        :minimized="minimized"
        :class="{
          'col-span-6 md:col-span-4 lg:col-span-3': fullscreen,
          'col-span-12 lg:col-span-6': !fullscreen
        }"
      />
    </div>
  </div>
</template>

<script>
import IntegrationTile from './IntegrationTile.vue'

export default {
  name: 'IntegrationList',

  props: {
    type: {
      type: String,
      required: true
    },

    filterable: {
      type: Boolean,
      required: false,
      default: false
    },
    minimized: {
      type: Boolean,
      required: false,
      default: false
    },
    fullscreen: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  components: {
    IntegrationTile
  },

  data() {
    return {
      selected: null
    }
  },

  computed: {
    categories() {
      return this.$site.themeConfig.CATEGORY
    },

    options() {
      if (!this.filterable) {
        return []
      }

      const integrationNames =
        this.$site.themeConfig.INTEGRATIONS.eCommerce.map(({ name }) => ({
          name,
          value: name
        }))

      integrationNames.unshift({
        name: 'Show integrations for all platforms',
        value: ''
      })

      return integrationNames
    },

    availableIntegrations() {
      const allIntegrations = this.$site.themeConfig.INTEGRATIONS[this.type]

      // if (this.selected?.value) {
      //   allIntegrations.filter(({ link }) => {
      //     // If link is a string, the integration can be used for all e-commerce platforms
      //     if (typeof link === 'string') {
      //       return true
      //     }

      //     // If link is an array, it only works with specified e-commerce platforms
      //     return link.map(({ name }) => name).includes(this.selected.value)
      //   })
      // }

      if (this.type !== 'other') {
        return allIntegrations
      }

      // Group by category
      return allIntegrations.reduce((ret, integration) => {
        integration.categories.forEach((category) => {
          let list = ret.find((a) => a.category === category)
          if (list) {
            list.integrations.push(integration)
            list.integrations.sort((a, b) => {
              const getStatusIndex = (s) =>
                s !== this.$site.themeConfig.STATUS.WIP

              /**
               * Order integrations by:
               *   - status (WIP integrations at the end)
               *   - name
               */
              return (
                getStatusIndex(b.status) - getStatusIndex(a.status) ||
                a.name.localeCompare(b.name)
              )
            })
          } else {
            ret.push({
              category,
              integrations: [integration]
            })
          }
        })
        return ret
      }, [])
    },

    sortedIntegrations() {
      return this.availableIntegrations.sort((a, b) => {
        const getStatusIndex = (s) => s !== this.$site.themeConfig.STATUS.WIP

        /**
         * Order integrations by:
         *   - status (WIP integrations at the end)
         *   - name
         */
        return (
          getStatusIndex(b.status) - getStatusIndex(a.status) ||
          a.name.localeCompare(b.name)
        )
      })
    }
  }
}
</script>
