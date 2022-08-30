<template>
  <ClientOnly>
    <div class="custom-block">
      <div class="p-4 -mb-8 theme-code-group__nav">
        <div class="flex items-center">
          <button
            v-for="(tab, i) in codeTabs"
            :key="tab.title"
            class="w-auto px-4 py-2 m-0 mr-1 text-sm leading-none text-center text-white whitespace-normal rounded"
            :class="{
              'bg-green bg-opacity-50 text-white': i === activeCodeTabIndex,
              'opacity-50 hover:bg-white hover:bg-opacity-20':
                i !== activeCodeTabIndex
            }"
            @click="changeCodeTab(i)"
          >
            {{ tab.title }}
          </button>
        </div>
      </div>
      <slot />
      <pre v-if="codeTabs.length < 1" class="pre-blank">
// Make sure to add code blocks to your code group</pre
      >
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'CodeGroup',
  data() {
    return {
      codeTabs: [],
      activeCodeTabIndex: -1
    }
  },
  watch: {
    activeCodeTabIndex(index) {
      this.activateCodeTab(index)
    }
  },
  mounted() {
    this.loadTabs()
  },
  methods: {
    changeCodeTab(index) {
      this.activeCodeTabIndex = index
    },
    loadTabs() {
      this.codeTabs = (this.$slots.default || [])
        .filter((slot) => Boolean(slot.componentOptions))
        .map((slot, index) => {
          if (slot.componentOptions.propsData.active === '') {
            this.activeCodeTabIndex = index
          }

          return {
            title: slot.componentOptions.propsData.title,
            elm: slot.elm
          }
        })

      if (this.activeCodeTabIndex === -1 && this.codeTabs.length > 0) {
        this.activeCodeTabIndex = 0
      }

      this.activateCodeTab(0)
    },
    activateCodeTab(index) {
      this.codeTabs.forEach((tab) => {
        if (tab.elm) {
          tab.elm.classList.remove('theme-code-block__active')
        }
      })

      if (this.codeTabs[index].elm) {
        this.codeTabs[index].elm.classList.add('theme-code-block__active')
      }
    }
  }
}
</script>

<style scoped>
.theme-code-group {
}

.theme-code-group__nav {
  background-color: #282c34;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.pre-blank {
  color: #42b983;
}
</style>
