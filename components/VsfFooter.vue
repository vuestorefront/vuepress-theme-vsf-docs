<template>
  <footer class="border-t">
    <div
      class="container grid grid-cols-12 px-4 py-12 mx-auto text-sm gap-y-16"
    >
      <div class="flex justify-start col-span-6 md:col-span-3">
        <div>
          <Logo class="w-48 h-auto mb-4" />
          <h2 class="mb-2">Stay connected:</h2>
          <div class="flex">
            <a
              href="https://github.com/DivanteLtd/vue-storefront"
              target="_blank"
              ><img
                src="https://uploads-ssl.webflow.com/5e7cf661c23ac9df156d9c3d/5ed776f6432bf510fc0a18e2_github%202.svg"
                class="w-auto h-5"
            /></a>
            <a href="https://twitter.com/VueStorefront" target="_blank"
              ><img
                src="https://uploads-ssl.webflow.com/5e7cf661c23ac9df156d9c3d/5ed7770740bbe258e8da79d0_twitter.svg"
                class="w-auto h-5 ml-3"
            /></a>
            <a href="https://www.youtube.com/vuestorefront" target="_blank"
              ><img
                src="https://uploads-ssl.webflow.com/5e7cf661c23ac9df156d9c3d/5ed77728bc0f1e2446a140ee_youtube.svg"
                class="w-auto h-5 ml-3"
            /></a>
            <a
              href="https://www.linkedin.com/company/vue-storefront/"
              target="_blank"
              ><img
                src="https://uploads-ssl.webflow.com/5e7cf661c23ac9df156d9c3d/5ed777169d856257c7216ca4_linkedin.svg"
                class="w-auto h-5 ml-3"
            /></a>
            <a href="https://www.facebook.com/vuestorefront/" target="_blank"
              ><img
                src="https://uploads-ssl.webflow.com/5e7cf661c23ac9df156d9c3d/5ed7773c6e51067075010d81_facebook.svg"
                class="w-auto h-5 ml-1"
            /></a>
          </div>

          <h2 class="mt-4 mb-4">Backed by:</h2>
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
        class="flex justify-start col-span-6 pt-3 md:justify-center md:col-span-3"
      >
        <div>
          <h2 class="mb-4 font-bold">Guides</h2>
          <ul>
            <li class="mb-2">
              <a
                href="https://docs.vuestorefront.io/v2/getting-started/introduction.html"
                >Getting Started</a
              >
            </li>
            <li class="mb-2">
              <a
                href="https://docs.vuestorefront.io/v2/integrate/extending-vue-storefront.html"
                >Extending Vue Storefront</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex justify-start col-span-6 md:justify-center md:col-span-3 md:pt-3"
      >
        <div>
          <h2 class="mb-4 font-bold">Documentation</h2>
          <ul>
            <li class="mb-2">
              <a href="https://docs.vuestorefront.io/v2">Docs Home</a>
            </li>
            <li class="mb-2">
              <a href="https://docs.storefrontui.io/">Storefront UI</a>
            </li>
            <li class="mb-2">
              <a href="https://vuestorefront.io/cloud">Vue Storefront Cloud</a>
            </li>
            <li class="mb-2">
              <a href="https://docs.vuestorefront.io/v1/">Vue Storefront 1</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex justify-start col-span-6 md:justify-center md:col-span-3 md:pt-3"
      >
        <div>
          <h2 class="mb-4 font-bold">Company</h2>
          <ul class="">
            <li class="mb-2">
              <a href="https://www.vuestorefront.io/about-us">About us</a>
            </li>
            <li class="mb-2">
              <a href="https://boards.greenhouse.io/vuestorefront">Careers</a>
            </li>
            <li class="mb-2">
              <a href="https://blog.vuestorefront.io/">Blog</a>
            </li>
            <li class="mb-2">
              <a href="https://vuestorefront.io/privacy-policy"
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
