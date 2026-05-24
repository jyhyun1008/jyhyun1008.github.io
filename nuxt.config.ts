export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  ssr: true,
  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      title: 'HoweverIna Studio',
      htmlAttrs: { lang: 'ko' },
      meta: [
        { name: 'author', content: 'However Ina' },
        { name: 'description', content: '연이나의 포트폴리오 & 블로그' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'HoweverIna Studio' },
        { property: 'og:description', content: '연이나의 포트폴리오 & 블로그' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
})
