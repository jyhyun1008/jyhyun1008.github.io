<template>
  <div class="sponsor">
    <p class="sponsor__text">이 창작 활동을 후원해주세요</p>
    <a
      href="https://open.kakao.com/me/howeverina"
      target="_blank"
      rel="noopener noreferrer"
      class="sponsor__btn"
    >
      카카오로 후원하기
    </a>
  </div>
</template>

<style scoped>
.sponsor {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 2rem;
  margin-top: 3rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  text-align: center;
}

.sponsor__text {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.sponsor__btn {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  background: var(--color-primary);
  color: #fff;
  transition: opacity 0.15s, transform 0.15s;
}

.sponsor__btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
}
</style>
