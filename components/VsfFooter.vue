<template>
  <footer>
    <div
      class="container grid grid-cols-12 px-4 py-12 mx-auto text-sm gap-y-16"
    >
      <div
        class="flex col-span-12 mx-auto w-44 sm:col-span-6 md:col-span-3 md:w-auto"
      >
        <div>
          <Logo class="h-auto mb-4 w-44" />
          <h2 class="mb-2 text-sm font-medium">Stay connected:</h2>
          <div class="flex gap-1">
            <a
              href="https://github.com/DivanteLtd/vue-storefront"
              target="_blank"
              class="hover:text-zinc-900 hover:dark:text-white"
            >
              <iconify-icon icon="mdi:github" width="24" class="text-inherit" />
            </a>
            <a
              href="https://twitter.com/VueStorefront"
              target="_blank"
              class="hover:text-zinc-900 hover:dark:text-white"
            >
              <iconify-icon icon="mdi:twitter" width="24" />
            </a>
            <a
              href="https://www.youtube.com/vuestorefront"
              target="_blank"
              class="hover:text-zinc-900 hover:dark:text-white"
            >
              <iconify-icon icon="mdi:youtube" width="24" />
            </a>
            <a
              href="https://www.linkedin.com/company/vue-storefront/"
              target="_blank"
              class="hover:text-zinc-900 hover:dark:text-white"
            >
              <iconify-icon icon="mdi:linkedin" width="24" />
            </a>
            <a
              href="https://www.facebook.com/vuestorefront/"
              target="_blank"
              class="hover:text-zinc-900 hover:dark:text-white"
            >
              <iconify-icon icon="mdi:facebook" width="24" />
            </a>
          </div>

          <h2 class="mt-4 mb-4 text-sm font-medium">Backed by:</h2>
          <div class="flex">
            <a
              href="https://www.vuestorefront.io/blog/y-combinator-w21"
              target="_blank"
              ><img
                src="https://uploads-ssl.webflow.com/5e7cf661c23ac9df156d9c3d/6064de41e684e38698e14f6f_Y_Combinator_logo.svg"
                class="w-12 h-auto"
            /></a>
            <a href="https://machalliance.org/" target="_blank">
              <img
                src="https://uploads-ssl.webflow.com/5e7cf661c23ac9df156d9c3d/5f86e19996d75b70d45df8a1_certified-fc.svg"
                class="w-12 h-auto ml-4"
            /></a>
          </div>
        </div>
      </div>
      <div
        class="flex col-span-12 pt-3 mx-auto w-44 sm:col-span-6 md:col-span-3 md:w-auto"
      >
        <div>
          <h2 class="mb-4 text-sm font-medium">Guides</h2>
          <ul>
            <li class="mb-2">
              <a
                class="hover:text-zinc-900 dark:hover:text-white"
                href="https://docs.vuestorefront.io/v2/getting-started/introduction.html"
              >
                Getting Started
              </a>
            </li>
            <li class="mb-2">
              <a
                class="hover:text-zinc-900 dark:hover:text-white"
                href="https://docs.vuestorefront.io/v2/integrate/extending-vue-storefront.html"
              >
                Extending Vue Storefront
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex col-span-12 mx-auto w-44 sm:col-span-6 md:col-span-3 md:pt-3 md:w-auto"
      >
        <div>
          <h2 class="mb-4 text-sm font-medium">Documentation</h2>
          <ul>
            <li class="mb-2">
              <a
                class="hover:text-zinc-900 dark:hover:text-white"
                href="https://docs.vuestorefront.io/v2"
                >Docs Home</a
              >
            </li>
            <li class="mb-2">
              <a
                class="hover:text-zinc-900 dark:hover:text-white"
                href="https://docs.storefrontui.io/"
                >Storefront UI</a
              >
            </li>
            <li class="mb-2">
              <a
                class="hover:text-zinc-900 dark:hover:text-white"
                href="https://vuestorefront.io/cloud"
                >Vue Storefront Cloud</a
              >
            </li>
            <li class="mb-2">
              <a
                class="hover:text-zinc-900 dark:hover:text-white"
                href="https://docs.vuestorefront.io/v1/"
                >Vue Storefront 1</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex col-span-12 mx-auto w-44 sm:col-span-6 md:col-span-3 md:pt-3 md:w-auto"
      >
        <div>
          <h2 class="mb-4 text-sm font-medium">Company</h2>
          <ul class="">
            <li class="mb-2">
              <a
                class="hover:text-zinc-900 dark:hover:text-white"
                href="https://www.vuestorefront.io/about-us"
                >About us</a
              >
            </li>
            <li class="mb-2">
              <a
                class="hover:text-zinc-900 dark:hover:text-white"
                href="https://boards.greenhouse.io/vuestorefront"
                >Careers</a
              >
            </li>
            <li class="mb-2">
              <a
                class="hover:text-zinc-900 dark:hover:text-white"
                href="https://blog.vuestorefront.io/"
                >Blog</a
              >
            </li>
            <li class="mb-2">
              <a
                class="hover:text-zinc-900 dark:hover:text-white"
                href="https://vuestorefront.io/privacy-policy"
                >Privacy Policy</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from './icons/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
