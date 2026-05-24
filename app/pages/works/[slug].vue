<template>
  <div class="container--narrow">
    <article v-if="page">
      <header class="article-header">
        <div class="article-tags" v-if="page.tags?.length">
          <NuxtLink
            v-for="tag in page.tags"
            :key="tag"
            :to="`/tags/${tag}`"
            class="tag"
          >{{ tag }}</NuxtLink>
        </div>
        <h1 class="article-title">{{ page.title }}</h1>
        <p v-if="page.description" class="article-desc">{{ page.description }}</p>
        <time class="article-date">{{ formatDate(page.date) }}</time>
      </header>

      <div v-if="page.youtube" class="article-video">
        <iframe
          :src="`https://www.youtube.com/embed/${page.youtube}`"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>

      <div class="prose">
        <ContentRenderer :value="page" />
      </div>

      <SponsorBlock />
    </article>

    <div class="article-nav">
      <NuxtLink to="/works" class="back-link">← 작업 목록</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(`works-${route.params.slug}`, () =>
  queryCollection('works').path(`/works/${route.params.slug}`).first()
)

if (!page.value) throw createError({ statusCode: 404 })

useHead({ title: `${page.value.title} | HoweverIna` })

function formatDate(dateStr?: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}
</script>

<style scoped>
.article-header {
  padding: 2.5rem 0 1.5rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 2rem;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.article-title {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.5px;
}

.article-desc {
  margin-top: 0.75rem;
  font-size: 1.05rem;
  color: var(--color-text-secondary);
}

.article-date {
  display: block;
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.article-video {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 2rem;
  background: #000;
}

.article-video iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.article-nav {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.back-link {
  font-size: 0.9rem;
  color: var(--color-primary);
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
