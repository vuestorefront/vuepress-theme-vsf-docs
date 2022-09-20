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

## Global Components

## Page Frontmatter Options

| Property        | Type    | Description                                               |
| --------------- | ------- | --------------------------------------------------------- |
| betaBanner      | Boolean | shows beta banner at top of page                          |
| hideBreadcrumbs | Boolean | hides breadcrumbs when true                               |
| enterpriseTag   | Boolean | show enterpriseTag before first h1 (useful for home page) |
| pretitle        | String  | show text before first h1 (useful for categorizing pages) |
| hideNav         | Boolean | hides the Previous and Next Navigation                    |

## Writing Guide
