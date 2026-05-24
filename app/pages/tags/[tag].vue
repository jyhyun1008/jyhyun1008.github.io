<template>
  <div class="container">
    <div class="page-header">
      <NuxtLink to="/" class="back-link">← 홈</NuxtLink>
      <h1 class="page-title">
        <span class="tag tag--active">{{ tag }}</span>
      </h1>
      <p class="page-sub">{{ allItems.length }}개의 항목</p>
    </div>

    <section v-if="portfolioItems.length" class="section">
      <h2 class="section-title">작업물</h2>
      <div class="grid">
        <PostCard
          v-for="item in portfolioItems"
          :key="item.path"
          :to="item.path"
          :title="item.title"
          :description="item.description"
          :date="item.date"
          :tags="item.tags"
          :thumbnail="item.thumbnail"
          :youtube="item.youtube"
        />
      </div>
    </section>

    <section v-if="blogPosts.length" class="section">
      <h2 class="section-title">블로그</h2>
      <div class="post-list">
        <PostCard
          v-for="post in blogPosts"
          :key="post.path"
          :to="post.path"
          :title="post.title"
          :description="post.description"
          :date="post.date"
          :tags="post.tags"
        />
      </div>
    </section>

    <p v-if="allItems.length === 0" class="empty">해당 태그의 항목이 없습니다.</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const tag = computed(() => route.params.tag as string)

const [{ data: allWorks }, { data: allBlog }] = await Promise.all([
  useAsyncData(`tag-works-${tag.value}`, () =>
    queryCollection('works').order('date', 'DESC').all()
  ),
  useAsyncData(`tag-blog-${tag.value}`, () =>
    queryCollection('blog').order('date', 'DESC').all()
  ),
])

const portfolioItems = computed(() =>
  (allWorks.value ?? []).filter((item) => item.tags?.includes(tag.value))
)
const blogPosts = computed(() =>
  (allBlog.value ?? []).filter((item) => item.tags?.includes(tag.value))
)

const allItems = computed(() => [
  ...portfolioItems.value,
  ...blogPosts.value,
])

useHead({ title: `#${tag.value} | HoweverIna` })
</script>

<style scoped>
.page-header {
  padding: 2rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.page-title {
  font-size: 1.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.page-sub {
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.back-link {
  font-size: 0.875rem;
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.back-link:hover {
  text-decoration: underline;
}

.section {
  padding: 1.5rem 0;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.empty {
  text-align: center;
  color: var(--color-text-muted);
  padding: 4rem 0;
}
</style>
