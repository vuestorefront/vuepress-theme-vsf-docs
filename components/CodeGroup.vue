<template>
  <ClientOnly>
    <div class="custom-block">
      <div class="p-4 -mb-8 theme-code-group__nav">
        <div class="relative flex items-center">
          <div
            class="absolute top-0 left-0 transition-all duration-300 rounded bg-green"
            :style="{
              width: backgroundWidth,
              height: backgroundHeight,
              left: backgroundLeft
            }"
          />
          <button
            v-for="(tab, i) in codeTabs"
            :key="tab.title"
            class="z-10 w-auto px-4 py-2 m-0 mr-1 text-sm leading-none text-center text-white whitespace-normal rounded"
            :class="{
              ' text-white': i === activeCodeTabIndex,
              'opacity-80 hover:bg-white hover:bg-opacity-20':
                i !== activeCodeTabIndex
            }"
            @click="changeCodeTab(i)"
            ref="tabEls"
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
import Vue from 'vue'

export default {
  name: 'CodeGroup',
  data() {
    return {
      codeTabs: [],
      activeCodeTabIndex: -1,
      backgroundWidth: 0,
      backgroundHeight: 0,
      backgroundLeft: 0,
      tabEls: []
    }
  },
  watch: {
    activeCodeTabIndex(index) {
      this.activateCodeTab(index)
    }
  },
  mounted() {
    this.loadTabs()
    Vue.nextTick(() => {
      this.backgroundWidth = this.$refs.tabEls[0]?.clientWidth + 'px'
      this.backgroundHeight = this.$refs.tabEls[0]?.clientHeight + 'px'
      this.backgroundLeft = this.$refs.tabEls[0]?.clientLeft + 'px'
    })
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

      this.backgroundWidth = this.$refs.tabEls[index]?.clientWidth + 'px'
      this.backgroundHeight = this.$refs.tabEls[index]?.clientHeight + 'px'
      this.backgroundLeft = this.$refs.tabEls[index]?.offsetLeft + 'px'

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
</style>
