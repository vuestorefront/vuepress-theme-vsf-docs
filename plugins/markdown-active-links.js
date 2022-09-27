module.exports = {
  chainMarkdown(config) {
    config.plugin('anchor').tap(([options]) => {
      return [
        Object.assign(options, {
          permalinkBefore: false,
          permaLinkAfter: true,
          permalinkSymbol:
            '<svg  viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></g></svg>'
        })
      ]
    })
  }
}
