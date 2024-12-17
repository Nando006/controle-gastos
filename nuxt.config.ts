// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/css/tailwind.css',
    '@/css/style.css'
  ],
  modules: ['@nuxtjs/google-fonts'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Roboto: [400, 700],
      'Open+Sans': [400, 600],
      Inter: '200..700',
    },
    display: 'swap',
    download: true,
    base64: false,
  },
});
