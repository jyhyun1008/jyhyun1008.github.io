<template>
  <header class="header">
    <div class="container header__inner">
      <NuxtLink to="/" class="header__logo">연이나의 블로그</NuxtLink>
      <nav class="header__nav">
        <NuxtLink to="/works" class="header__nav-link">작업물</NuxtLink>
        <NuxtLink to="/blog" class="header__nav-link">블로그</NuxtLink>
        <NuxtLink to="/about" class="header__nav-link">소개</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid var(--color-border);
  height: 56px;
  display: flex;
  align-items: center;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.header__logo {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.5px;
}

.header__nav {
  display: flex;
  gap: 1.5rem;
}

.header__nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: color 0.15s;
}

.header__nav-link:hover,
.header__nav-link.router-link-active {
  color: var(--color-primary);
}
</style>
