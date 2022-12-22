<template>
  <header
    class="sticky top-0 z-50 w-full border-b dark:bg-zinc-900 dark:border-b-zinc-700 bg-inherit"
  >
    <div
      class="flex items-center w-full px-4 py-3 mx-auto 2xl:container flex-nowrap 2xl:px-0"
    >
      <button class="block mr-auto lg:hidden" @click="$emit('toggle')">
        <Menu :open="sidebarOpen" />
      </button>
      <RouterLink to="/" v-if="$site.base === '/v2/'">
        <Logo class="w-auto h-6" :show-docs="true" />
      </RouterLink>
      <a href="https://docs.vuestorefront.io/v2" v-else>
        <Logo class="w-auto h-6" :show-docs="true" />
      </a>

      <nav
        class="hidden gap-4 ml-auto text-sm font-medium nav-links lg:flex text-zinc-900 dark:text-white"
      >
        <div class="nav-item">
          <RouterLink
            to="/getting-started/introduction"
            class="hover:underline"
            v-if="$site.base === '/v2/'"
          >
            Getting Started
          </RouterLink>
          <a
            href="https://docs.vuestorefront.io/v2/getting-started/introduction.html"
            class="hover:underline"
            v-else
          >
            Getting Started
          </a>
        </div>
        <div class="nav-item">
          <DropdownLink title="Integrations" type="integrations" />
        </div>
        <div class="nav-item">
          <DropdownLink title="Ecosystem" type="ecosystem" />
        </div>
      </nav>
      <SearchBox
        v-if="
          $site.themeConfig.search !== false &&
          $page.frontmatter.search !== false
        "
        class="pr-2 ml-auto lg:pr-0 lg:ml-8"
      />

      <div class="items-center hidden h-8 gap-4 lg:flex">
        <button @click="toggleDisplayMode" class="dark-mode-toggle">
          <DarkModeToggle
            :is-dark="isDark"
            class="w-4 h-auto opacity-50 fill-zinc-900 dark:fill-white hover:opacity-100"
          />
        </button>
        <a href="https://discord.vuestorefront.io/" target="_blank">
          <Discord
            class="w-auto h-4 opacity-50 fill-zinc-900 dark:fill-white hover:opacity-100"
          />
        </a>
        <a href="https://github.com/vuestorefront/" target="_blank">
          <Github
            class="w-auto h-4 opacity-50 fill-zinc-900 dark:fill-white hover:opacity-100"
          />
        </a>
      </div>
    </div>
    <div
      class="relative hidden w-full border-t dark:border-t-zinc-700 md:block bg-inherit"
      v-if="$themeConfig.secondaryNav"
    >
      <div
        class="relative flex items-center w-full px-4 mx-auto text-sm font-medium text-black bg-inherit 2xl:container flex-nowrap 2xl:px-0 dark:text-white"
      >
        <nav class="flex items-center w-full">
          <div class="pr-4 mr-2 border-r-2 dark:border-r-zinc-700">
            <RouterLink to="/">
              {{ $themeConfig.title }}
            </RouterLink>
          </div>
          <ul class="flex flex-1 gap-2 py-2">
            <li
              v-for="{ text, link, match } in secondaryLinks"
              :class="{
                'text-green bg-green bg-opacity-10 ': match
                  ? new RegExp(match).test($route.path)
                  : ($route.path.startsWith(link) && link !== '/') ||
                    ($route.path === '/' && link === '/'),
                'hover:bg-slate-100 dark:hover:bg-zinc-800': !(match
                  ? new RegExp(match).test($route.path)
                  : ($route.path.startsWith(link) && link !== '/') ||
                    ($route.path === '/' && link === '/'))
              }"
              class="relative px-2 py-1 rounded"
            >
              <RouterLink :to="link">
                {{ text }}
              </RouterLink>
            </li>
            <li class="py-1 ml-auto" v-if="$site.base !== '/v2/'">
              <a
                href="https://docs.vuestorefront.io/v2/"
                class="hover:underline"
              >
                Core Docs ->
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import SearchBox from '@SearchBox'
import DropdownLink from './DropdownLink.vue'
import Logo from '../icons/Logo.vue'
import DarkModeToggle from '../icons/DarkModeToggle.vue'
import Discord from '../icons/Discord.vue'
import Github from '../icons/Github.vue'
import Menu from '../icons/Menu.vue'

export default {
  name: 'Navbar',

  components: {
    DropdownLink,
    SearchBox,
    DarkModeToggle,
    Discord,
    Github,
    Logo,
    Menu
  },
  props: {
    sidebarOpen: Boolean
  },

  data() {
    return {
      linksWrapMaxWidth: null,
      isDark: false
    }
  },

  mounted() {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      this.isDark = true
    }
  },
  methods: {
    toggleDisplayMode() {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (!document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
        this.isDark = true
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
        this.isDark = false
      }
    }
  },
  computed: {
    secondaryLinks() {
      const links = this.$themeConfig.secondaryNav

      if (Array.isArray(links)) {
        return links
      }

      return links[
        Object.keys(links).find((key) => {
          return this.$route.path.startsWith(key)
        })
      ]
    }
  }
}
</script>

<style>
.search-box {
  flex: 0 0 auto;
  vertical-align: top;
}

.search-box input {
  background-color: #eee;
  background-size: 1em;
  border: none;
  border-radius: 0.25em;

  font-size: 0.9em;
}

.search-box * {
  word-break: break-word;
}

.search-box .suggestions {
  right: 0;
  z-index: 50 !important;
}

.suggestion .focused {
  background-color: inherit !important;
}

.suggestions li:hover {
  background-color: #eee !important;
}

html.dark .suggestions * {
  color: #a2a8b0 !important;
}
</style>
