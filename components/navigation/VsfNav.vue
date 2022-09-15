<template>
  <header
    class="sticky top-0 z-50 w-full border-b bg-gray-50 dark:bg-neutral-900 dark:border-b-neutral-500"
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

      <nav class="hidden gap-4 ml-auto text-sm font-medium nav-links lg:flex">
        <div class="nav-item">
          <RouterLink
            to="/getting-started/introduction"
            class="hover:text-neutral dark:hover:text-white"
            v-if="$site.base === '/v2/'"
          >
            Getting Started
          </RouterLink>
          <a
            href="https://docs.vuestorefront.io/v2/getting-started/introduction.html"
            class="hover:text-neutral dark:hover:text-white"
            v-else
          >
            Getting Started
          </a>
        </div>
        <!-- <div class="nav-item">
          <RouterLink
            to="/getting-started/project-structure"
            class="hover:text-neutral dark:hover:text-white"
            v-if="$site.base === '/v2/'"
          >
            Concepts
          </RouterLink>
          <a
            href="https://docs.vuestorefront.io/v2/getting-started/project-structure.html"
            class="hover:text-neutral dark:hover:text-white"
            v-else
          >
            Concepts
          </a>
        </div> -->
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
            class="w-4 h-auto opacity-50 fill-neutral dark:fill-white hover:opacity-100"
          />
        </button>
        <a href="https://discord.vuestorefront.io/" target="_blank">
          <Discord
            class="w-auto h-4 opacity-50 fill-neutral dark:fill-white hover:opacity-100"
          />
        </a>
        <a href="https://github.com/vuestorefront/" target="_blank">
          <Github
            class="w-auto h-4 opacity-50 fill-neutral dark:fill-white hover:opacity-100"
          />
        </a>
      </div>
    </div>
    <div
      class="flex items-center w-full px-4 py-3 mx-auto text-sm font-medium text-black border-t dark:border-t-neutral-300 bg-inherit 2xl:container flex-nowrap 2xl:px-0 dark:text-white"
      v-if="$themeConfig.secondaryNav"
    >
      <nav class="w-full">
        <ul class="flex w-full gap-8">
          <li v-for="{ text, link } in $themeConfig.secondaryNav">
            <RouterLink
              :to="link"
              class="hover:text-neutral dark:hover:text-white"
            >
              {{ text }}
            </RouterLink>
          </li>
          <li class="ml-auto">
            <RouterLink
              to="/getting-started/project-structure"
              class="hover:text-neutral dark:hover:text-white"
              v-if="$site.base === '/v2/'"
            >
              Core Docs ->
            </RouterLink>
            <a
              href="https://docs.vuestorefront.io/v2/getting-started/project-structure.html"
              class="hover:text-neutral dark:hover:text-white"
              v-else
            >
              Core Docs ->
            </a>
          </li>
        </ul>
      </nav>
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

html.dark .search-box input {
  background-color: #404040;
  color: white;
}

.search-box .suggestions {
  right: 0;
}

.suggestions * {
  color: #393d43 !important;
  background-color: inherit !important;
}

html.dark .suggestions {
  background-color: #1d1f22;
  border-color: #555b64;
}

.suggestion .focused {
  background-color: inherit !important;
}

html.dark .suggestions li:hover {
  background-color: #393d43 !important;
}

.suggestions li:hover {
  background-color: #eee !important;
}

html.dark .suggestions * {
  color: #a2a8b0 !important;
}
</style>
