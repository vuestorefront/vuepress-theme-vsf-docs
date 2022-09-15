## Vuepress v1 theme for Vue Storefront docs

### Features

- styling for pages (sidebar, content, table of contents)
- overrides navigation to provide consistent links
- comes with `@vuepress/search`
- includes warning, tip, and error containers like the Vuepress default theme

### Installation

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

| Syntax      | Type | Description |
| ----------- | ----------- |  ----------- |
| secondaryNav      | Boolean       | Adds a secondaryNav element to the header navigation.
| Paragraph   | Text        |