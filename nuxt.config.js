module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'tomgrek',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Tom Grek's homepage" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Cabin|Noto+Serif` },
      { rel: 'stylesheet', href: `https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css` },
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
}
