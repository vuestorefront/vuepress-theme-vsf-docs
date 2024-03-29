<template>
  <div class="relative dropdown-wrapper group" :class="{ open }">
    <button class="dropdown-title" type="button">
      <span> {{ title }}</span>
      <span class="ml-2 arrow down" />
    </button>

    <ul
      class="absolute z-10 hidden w-64 p-2 bg-white border rounded -left-1/2 nav-dropdown group-focus-within:block group-hover:block top-full dark:bg-zinc-900 dark:border-zinc-700"
      v-if="type === 'integrations'"
    >
      <template v-for="(integration, index) in integrations">
        <li
          v-if="!integration.link"
          :class="{
            'border-t-2 pt-4 ': index > 0
          }"
          class="text-black dark:text-white pb-1 opacity-50 mt-2 pl-2 text-xs font-semibold"
        >
          {{ integration.name }}
        </li>
        <li class="flex" v-else>
          <a
            :href="integration.link"
            class="flex items-center w-full h-8 rounded dark:hover:bg-zinc-800 hover:bg-black hover:bg-opacity-5 hover:text-zinc dark:hover:text-white"
          >
            <img
              :src="`https://docs.vuestorefront.io/v2/integrations-logos/thumbnails/${integration.name
                .toLowerCase()
                .replace(/ /g, '-')}.png`"
              :alt="integration.name"
              onerror='this.style.display = \"none\"'
              class="w-4 h-auto ml-2"
            />
            <span class="ml-2"> {{ integration.name }}</span>
          </a>
        </li>
      </template>
      <li class="mt-4">
        <a
          href="https://docs.vuestorefront.io/v2/integrations/"
          class="flex justify-center py-2 bg-black rounded dark:bg-white dark:bg-opacity-5 bg-opacity-5 hover:underline"
        >
          See all integrations
        </a>
      </li>
    </ul>
    <ul
      class="absolute z-10 hidden w-48 p-2 bg-white border rounded -left-1/2 nav-dropdown group-focus-within:block group-hover:block top-full dark:bg-zinc-900 dark:border-zinc-700"
      v-else-if="type === 'ecosystem'"
    >
      <li class="flex">
        <a
          href="https://docs.storefrontui.io/v2"
          class="flex items-center w-full h-8 rounded dark:hover:bg-zinc-800 hover:bg-black hover:bg-opacity-5 hover:text-zinc dark:hover:text-white"
        >
          <span class="ml-2">Storefront UI</span>
        </a>
      </li>
      <li class="flex">
        <a
          href="https://docs.vuestorefront.io/cloud/"
          class="flex items-center w-full h-8 rounded dark:hover:bg-zinc-800 hover:bg-black hover:bg-opacity-5 hover:text-zinc dark:hover:text-white"
        >
          <span class="ml-2">Vue Storefront Cloud</span>
        </a>
      </li>
      <li class="flex">
        <a
          href="https://docs.vuestorefront.io/v1/"
          class="flex items-center w-full h-8 rounded dark:hover:bg-zinc-800 hover:bg-black hover:bg-opacity-5 hover:text-zinc dark:hover:text-white"
        >
          <span class="ml-2">Vue Storefront 1</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DropdownLink',
  props: {
    title: String,
    type: String
  },
  data() {
    return {
      open: false,
      integrations: [
        {
          name: 'Enterprise'
        },
        {
          name: 'BigCommerce',
          link: 'https://docs.vuestorefront.io/bigcommerce'
        },
        {
          name: 'commercetools',
          link: 'https://docs.vuestorefront.io/commercetools/'
        },
        {
          name: 'SAP Commerce Cloud',
          link: 'https://docs.vuestorefront.io/sapcc'
        },
        {
          name: 'Open Source'
        },
        {
          name: 'Magento',
          link: 'https://docs.vuestorefront.io/magento'
        },
        {
          name: 'Shopify',
          link: 'https://docs.vuestorefront.io/shopify'
        },
        {
          name: 'Community'
        },
        {
          name: 'Sylius',
          link: 'https://vsf2-docs.bitbag.io/'
        },
        {
          name: 'Odoo',
          link: 'https://docs.vuestorefront.io/odoo/'
        },
        {
          name: 'PrestaShop',
          link: 'https://docs.vuestorefront.io/prestashop/'
        },
        {
          name: 'Spree',
          link: 'https://docs.vuestorefront.io/spree/'
        }
      ]
    }
  }
}
</script>

<style scoped>
.arrow.down {
  display: inline-block;
  left: 0.1em;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;

  border-left: 4px solid #ccc;
  transform: rotate(90deg) translateY(2px);
}
</style>
