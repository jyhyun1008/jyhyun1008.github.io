<template>
  <nav v-if="totalPages > 1" class="pagination">
    <button
      class="pagination__btn"
      :disabled="modelValue === 1"
      @click="$emit('update:modelValue', modelValue - 1)"
    >
      ←
    </button>
    <button
      v-for="page in pages"
      :key="page"
      class="pagination__btn"
      :class="{ 'pagination__btn--active': page === modelValue, 'pagination__btn--ellipsis': page === '…' }"
      :disabled="page === '…'"
      @click="page !== '…' && $emit('update:modelValue', page)"
    >
      {{ page }}
    </button>
    <button
      class="pagination__btn"
      :disabled="modelValue === totalPages"
      @click="$emit('update:modelValue', modelValue + 1)"
    >
      →
    </button>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: number
  totalPages: number
}>()

defineEmits<{ 'update:modelValue': [value: number] }>()

const pages = computed(() => {
  const { modelValue: cur, totalPages: total } = props
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const result: (number | string)[] = [1]
  if (cur > 3) result.push('…')
  for (let i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++) result.push(i)
  if (cur < total - 2) result.push('…')
  result.push(total)
  return result
})
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin-top: 2.5rem;
}

.pagination__btn {
  min-width: 2.25rem;
  height: 2.25rem;
  padding: 0 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-bg);
  color: var(--color-text);
  font-size: 0.9rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;
}

.pagination__btn:hover:not(:disabled) {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.pagination__btn--active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
  font-weight: 600;
}

.pagination__btn:disabled {
  opacity: 0.35;
  cursor: default;
}

.pagination__btn--ellipsis {
  border-color: transparent;
  background: transparent;
}
</style>
