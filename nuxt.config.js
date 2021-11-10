export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Server localhost
  server: {     
    port: 3000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gonzalo Salinas ',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:200,300,300i,500,600,700,900|Playfair+Display:400,400i,700&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/variables.css',
    '@/assets/css/reset.css',
    '@/assets/css/helpers.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/prismic',
    'nuxt-purgecss',
    'nuxt-i18n'
  ],

  // Prismic config
  prismic: {
    endpoint: 'https://gse-portfolio.prismic.io/api/v2',
    modern: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { 
    postcss: { 
      plugins: { 
        'postcss-nested': {
          syntax: 'postcss-scss'
        },
        'autoprefixer': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  },
  
  // Locales
  i18n: {
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en-US.js'
      },
      {
        code: 'es',
        file: 'es-CL.js'
      },
    ],
  }
}
