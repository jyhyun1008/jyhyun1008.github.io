<template>
  <div class="container--narrow">
    <header class="about-header">
      <div class="about-avatar">
        <span class="about-avatar__initials">이나</span>
      </div>
      <h1 class="about-name">HoweverIna (연이나)</h1>
      <p class="about-bio">음악가 / 개발자 / 버튜버</p>
      <div class="about-links">
        <a href="https://twitter.com/howeverina" target="_blank" rel="noopener" class="about-link">Twitter</a>
        <a href="https://github.com/jyhyun1008" target="_blank" rel="noopener" class="about-link">GitHub</a>
      </div>
    </header>

    <div class="prose about-content">
      <h2>소개</h2>
      <p>안녕하세요, 연이나입니다. 음악 창작과 개발을 즐깁니다.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '소개 | HoweverIna' })
</script>

<style scoped>
.about-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 0 2rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 2rem;
}

.about-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.25rem;
  border: 3px solid var(--color-primary);
  background: #e6faf3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-avatar__initials {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.about-name {
  font-size: 1.75rem;
  font-weight: 700;
}

.about-bio {
  margin-top: 0.5rem;
  color: var(--color-text-secondary);
}

.about-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.about-link {
  padding: 0.375rem 1rem;
  border: 1.5px solid var(--color-border);
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
  transition: all 0.15s;
}

.about-link:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.about-content {
  padding-bottom: 2rem;
}
</style>
