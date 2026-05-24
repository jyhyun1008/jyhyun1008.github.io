<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copy">© {{ new Date().getFullYear() }} HoweverIna. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 5rem;
  padding: 2.5rem 0;
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-secondary);
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.footer__copy {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

</style>
