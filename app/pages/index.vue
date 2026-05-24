<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__text">
          <h1 class="hero__title">연이나의 블로그</h1>
          <p class="hero__sub">음악 / 기술 / 창작</p>
          <div class="hero__links">
            <NuxtLink to="/portfolio" class="btn btn--primary">포트폴리오 보기</NuxtLink>
            <NuxtLink to="/blog" class="btn btn--ghost">블로그</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Portfolio -->
    <section class="section">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">최근 포트폴리오</h2>
          <NuxtLink to="/portfolio" class="section__more">전체 보기 →</NuxtLink>
        </div>
        <div class="grid">
          <PostCard
            v-for="item in recentPortfolio"
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
      </div>
    </section>

    <!-- Recent Blog -->
    <section class="section">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">최근 블로그</h2>
          <NuxtLink to="/blog" class="section__more">전체 보기 →</NuxtLink>
        </div>
        <div class="grid grid--list">
          <PostCard
            v-for="post in recentBlog"
            :key="post.path"
            :to="post.path"
            :title="post.title"
            :description="post.description"
            :date="post.date"
            :tags="post.tags"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const [{ data: recentPortfolio }, { data: recentBlog }] = await Promise.all([
  useAsyncData('home-portfolio', () =>
    queryCollection('portfolio').order('date', 'DESC').limit(3).all()
  ),
  useAsyncData('home-blog', () =>
    queryCollection('blog').order('date', 'DESC').limit(4).all()
  ),
])
</script>

<style scoped>
/* Hero */
.hero {
  background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 60%);
  padding: 5rem 0 4rem;
  border-bottom: 1px solid var(--color-border);
}

.hero__inner {
  display: flex;
  align-items: center;
}

.hero__text {
  max-width: 520px;
}

.hero__title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -1.5px;
  line-height: 1.15;
}

.hero__sub {
  margin-top: 0.75rem;
  font-size: 1.15rem;
  color: var(--color-text-secondary);
}

.hero__links {
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.5rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.15s;
  cursor: pointer;
  border: none;
  text-decoration: none;
}

.btn--primary {
  background: var(--color-primary);
  color: #fff;
}

.btn--primary:hover {
  background: var(--color-primary-hover);
}

.btn--ghost {
  background: transparent;
  color: var(--color-text);
  border: 1.5px solid var(--color-border);
}

.btn--ghost:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* Sections */
.section {
  padding: 3rem 0;
}

.section__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.section__title {
  font-size: 1.35rem;
  font-weight: 700;
}

.section__more {
  font-size: 0.875rem;
  color: var(--color-primary);
  font-weight: 500;
}

.section__more:hover {
  text-decoration: underline;
}

/* Grids */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.grid--list {
  grid-template-columns: 1fr;
}
</style>
