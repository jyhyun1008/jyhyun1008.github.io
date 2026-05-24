<template>
  <div class="tag-list">
    <button
      class="tag"
      :class="{ 'tag--active': modelValue === '' }"
      @click="$emit('update:modelValue', '')"
    >
      전체
    </button>
    <NuxtLink
      v-for="tag in tags"
      :key="tag"
      :to="linkPrefix ? `${linkPrefix}/${tag}` : undefined"
      class="tag"
      :class="{ 'tag--active': modelValue === tag }"
      @click="!linkPrefix && $emit('update:modelValue', tag)"
    >
      {{ tag }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tags: string[]
  modelValue?: string
  linkPrefix?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<style scoped>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

button.tag {
  border: none;
  font-family: inherit;
  font-size: 0.8rem;
}
</style>
