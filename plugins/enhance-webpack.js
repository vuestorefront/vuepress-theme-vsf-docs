module.exports = {
  chainWebpack: (config, isServer) => {
    // Add support for webp images
    config.module
      .rule('.webp')
      .test(/\.(webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/img/[name].[hash:8].[ext]'
        }
      })
  }
}
