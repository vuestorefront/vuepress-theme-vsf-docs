# Vuepress v1 theme for Vue Storefront Docs

This Vuepress theme is a way to style your Vue Storefront docs site. It is based on the default Vuepress theme, but adds some additional styling and components to make it easier to style your docs site.

The intention of this theme is to bring cohesion across the multiple VSF integration docs both in terms of styling and navigation.

## Features

- styling for pages (sidebar, content, table of contents)
- overrides navigation to provide consistent links
- comes with `@vuepress/search`
- includes multiple custom containers like the Vuepress default theme
- adds several built in components that can be used to style your VSF docs site
- adds an optional secondary navigation to the header
- adds several custom layouts for your docs site to use
- built in [Iconify](https://icones.js.org/) support via the `<Icon>` component.
- breadcrumb support by default

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
    // ...
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
2. `layout: home` - This is useful for generating landing pages. It will only render your page content with no sidebar and table of contents.

If you don't specify a layout, it will default to `default`.


## Global Components

## Page Frontmatter Options

| Property        | Type    | Description                                               |
| --------------- | ------- | --------------------------------------------------------- |
| betaBanner      | Boolean | shows beta banner at top of page                          |
| hideBreadcrumbs | Boolean | hides breadcrumbs when true                               |
| enterpriseTag   | Boolean | show enterpriseTag before first h1 (useful for home page) |
| pretitle        | String  | show text before first h1 (useful for categorizing pages) |
| hideNav         | Boolean | hides the Previous and Next Navigation                    |
| hideToc         | Boolean | hides the table of contents for `default` layout          |
|                 |         |                                                           |

## Writing Guide
