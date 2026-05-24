<template>
  <NuxtLink :to="to" class="post-card card">
    <div v-if="youtube || thumbnail" class="post-card__thumb">
      <img :src="youtube ? `https://img.youtube.com/vi/${youtube}/maxresdefault.jpg` : thumbnail" :alt="title" />
      <span v-if="youtube" class="post-card__play">▶</span>
    </div>
    <div class="post-card__body">
      <div class="post-card__tags" v-if="tags?.length">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <h2 class="post-card__title">{{ title }}</h2>
      <p v-if="description" class="post-card__desc">{{ description }}</p>
      <time class="post-card__date">{{ formatDate(date) }}</time>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  title: string
  description?: string
  date?: string
  tags?: string[]
  thumbnail?: string
  youtube?: string
}>()

function formatDate(dateStr?: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style scoped>
.post-card {
  display: block;
}

.post-card__thumb {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.post-card__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.post-card:hover .post-card__thumb img {
  transform: scale(1.03);
}

.post-card__play {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  background: rgba(0,0,0,0.15);
  transition: background 0.2s;
  pointer-events: none;
}

.post-card:hover .post-card__play {
  background: rgba(0,0,0,0.3);
}

.post-card__body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.post-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.post-card__title {
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--color-text);
}

.post-card:hover .post-card__title {
  color: var(--color-primary);
}

.post-card__desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-card__date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-top: 0.25rem;
}
</style>
