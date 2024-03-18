# Vuepress v1 theme for Alokai Docs

This Vuepress theme is a way to style your Alokai docs site. It is based on the default Vuepress theme, but adds some additional styling and components to make it easier to style your docs site.

The intention of this theme is to bring cohesion across the multiple VSF integration docs both in terms of styling and navigation.

## Features

- styling for pages (sidebar, content, table of contents)
- overrides navigation to provide consistent links
- comes with `@vuepress/search`
- includes multiple custom containers like the Vuepress default theme
- adds several built in components that can be used to style your VSF docs site
- adds an optional secondary navigation to the header
- adds several custom layouts for your docs site to use
- built in [Iconify](https://icones.js.org/) support via the `<iconify-icon>` component.
- breadcrumb support by default
- adds plugins for overriding the active link style and image fixes

## Installation

`npm i vuepress-theme-vsf-docs`
`yarn add vuepress-theme-vsf-docs`

To add it to your theme, set the theme in your `.vuepress/config.js` file

```json
{
  "theme": "vsf-docs"
}
```

## Theme Configuration

To configure the theme, add a `themeConfig` object to your `.vuepress/config.js` file.

```json
{
  "theme": "vsf-docs",
  "themeConfig": {
    
  }
}
```

This theme comes with the following `themeConfig` properties:

| Property     | Type                                                                                          | Description                                              |
| ------------ | --------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| title        | String                                                                                        | Title of website, used for meta title and home page link |
| repo         | String (optional)                                                                             | Used to generate Repo link on home page                  |
| docsRepoPath | String (optional)                                                                             | Used to generate "Edit this page" links                  |
| secondaryNav | Array<{ text: string, link: string }>                                                         | Adds a secondaryNav element to the header navigation     |
| sidebar      | [See Structure](https://vuepress.vuejs.org/theme/default-theme-config.html#multiple-sidebars) | Adds sidebar navigation by specific routes               |

## Page Layouts

There are 2 different types of layouts you can specify in your Frontmatter

1. `layout: default` - This is the default layout for your pages. By default, it will render the page with the sidebar navigation and a table of contents. But you can change this using the `hideToc` properties in your Frontmatter.

![image](https://user-images.githubusercontent.com/18535681/192529218-af13bf0b-feb8-43a5-a74c-46cea0ca2feb.png)


2. `layout: home` - This is useful for generating landing pages. It will only render your page content with no sidebar and table of contents.

![image](https://user-images.githubusercontent.com/18535681/192529100-d6ccd453-5c04-4a58-b8c0-8d4104077c46.png)

If you don't specify a layout, it will default to `default`.


## Global Components

### CodeGroup  

Allows for a multiple code examples to be grouped together. This is useful for showing multiple ways to do the same thing (e.g. `yarn` vs `npm` installs) 

![image](https://user-images.githubusercontent.com/18535681/192529439-88bee6c6-ef1d-4d92-86df-9fd1a324eb4a.png)

### NavCard

Useful for providing a nice visual link. 

![image](https://user-images.githubusercontent.com/18535681/192529536-6225a43f-8d9c-4d60-8621-73ac95a0986f.png)

Accepts the following props:
```
  {
    to: String,
    title: String,
    description: String,
    isCard: {
      type: Boolean,
      default: true
    },
    readMore: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    green: {
      type: Boolean,
      default: false
    }
  },
```

### Icon

With the Icon component, you can quickly add any Iconify icon to your docs site. You can find a list of all available icons [here](https://icones.js.org/).

### Misc Components

This theme also exposes a few global components that add content to your site. This is allows the community team to use the theme to control the content for all the integrations at once. 

These components are:

- `CoreDocsList` - links to essential Core Docs pages
- `StorefrontUI` - landing page section for SFUI
- `VsfCloud` - landing page section for VsfCloud
- `VsfEcosystem` - landing page section that contains both `StorefrontUI` and `VsfCloud`

## Custom Containers

This theme uses the [vuepress-plugin-container](https://vuepress-community.netlify.app/en/plugins/container/#vuepress-plugin-container) plugin to register custom containers. This allows you to quickly add custom styling to your markdown content.

They are used by adding surrounding markdown content of the container with `:::`.

```markdown
::: tip
This is a tip. It can have [links](#) and **formatting**.
:::
```

The following containers are available:
`tip`

`subheader`

`callout`

`read-more`

`warning`

`danger`

`col-wrapper`

`col-wrapper-gap`

`col-wrapper-hero`

`col-full`

`col-1/2`

`col-1/3`

`col-1/4`

## Page Frontmatter Options

| Property        | Type    | Description                                               |
| --------------- | ------- | --------------------------------------------------------- |
| betaBanner      | Boolean | shows beta banner at top of page                          |
| hideBreadcrumbs | Boolean | hides breadcrumbs when true                               |
| enterpriseTag   | Boolean | show enterpriseTag before first h1 (useful for home page) |
| pretitle        | String  | show text before first h1 (useful for categorizing pages) |
| hideNav         | Boolean | hides the Previous and Next Navigation at the bottom of the page                    |
| hideToc         | Boolean | hides the table of contents for `default` layout          |
| fileDirToc       | Boolean | converts the page table of contents into a directory structure  (see project structure boilerplate)      |


