// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  ssr: true,
  app: {
    head: {
      title: 'HoweverIna Studio Blog', // default fallback title
      htmlAttrs: {
        lang: 'ko',
      },
      meta: [
        { name: 'author', content: 'However Ina' },
        { name: 'keywords', content: 'music, vtuber' },
        { name: 'robots', content: 'all' },
        { name: 'description', content: '연이나의 커미션/외주 샘플, 그리고 기술 블로그' },
        { property: 'og:url', content: 'https://blog.howeverina.studio' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'HoweverIna Studio Blog' },
        { property: 'og:description', content: '연이나의 커미션/외주 샘플, 그리고 기술 블로그' },
        { property: 'og:image', content: '/favicon.png' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:title', content: 'HoweverIna Studio Blog' },
        { property: 'twitter:description', content: '연이나의 커미션/외주 샘플, 그리고 기술 블로그' },
        { property: 'twitter:image', content: '/favicon.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  routeRules: {
    '/blog/**': { prerender: true }
  },
  content: {
    // 이 옵션이 동적 경로를 .html 파일로 생성하게 만듭니다.
    // 예: /blog/first-post -> /blog/first-post.html
    documentDriven: {
      trailingSlash: false
    }
  },
  router: {
    options: {
      strict: false
    }
  },
})
