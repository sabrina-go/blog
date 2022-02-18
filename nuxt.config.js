import { createFeed } from './utils/feed';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'We are the Knowledge',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Inspirer et partager la connaisance.',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'We are the Knowledge',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Inspirer et partager la connaisance.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://wearetheknowledge.com/twitter-card-large.png',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'We are the Knowledge',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Inspirer et partager la connaisance.',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wearetheknowledge.com/og-image.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://wearetheknowledge.com/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        href: 'https://wearetheknowledge.com/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Roboto:wght@400;500;600&display=swap',
      },
    ],
    script: [
      {
        type: 'text/javascript',
        src: process.env.PLAUSIBLE_URL,
        async: true,
        defer: true,
        'data-domain': 'wearetheknowledge.com',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/shared.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/prismic',
  ],

  image: {
    prismic: {},
  },

  prismic: {
    endpoint: 'https://sabrina-go-blog.cdn.prismic.io/api/v2',
    modern: true,
  },

  fontawesome: {
    icons: {
      brands: ['faLinkedinIn'],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/feed', '@nuxtjs/style-resources'],

  feed: [createFeed()],

  styleResources: {
    scss: ['assets/scss/globals.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
