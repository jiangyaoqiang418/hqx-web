// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxt/eslint',
  ],
  ssr: true,
  components: [{ path: '~/components', pathPrefix: false }],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
      },
      bodyAttrs: {
        class: 'site-body',
      },
      meta: [
        { name: 'theme-color', content: '#040c1c' },
        { name: 'color-scheme', content: 'dark' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://weikenentropy.com',
    name: '微恩熵算科技有限公司',
    description: '融合气象、能源、遥感与人工智能技术，提供数据、算法与平台一体化解决方案。',
    defaultLocale: 'zh-CN',
  },
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
  ui: {
    colorMode: false,
    theme: {
      colors: ['primary', 'success', 'warning', 'error'],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/solutions': { prerender: true },
    '/products': { prerender: true },
    '/technology': { prerender: true },
    '/scenarios': { prerender: true },
    '/about': { prerender: true },
    '/contact': { prerender: true },
    '/news': { swr: 600 },
    '/news/**': { swr: 600 },
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'node-server',
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    provider: 'local',
  },
  image: {
    format: ['avif', 'webp'],
    quality: 82,
    screens: {
      xs: 375,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1440,
      xxl: 1920,
    },
  },
})
