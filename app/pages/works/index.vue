<template>
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">작업물</h1>
    </div>

    <TagList v-model="selectedTag" :tags="allTags" class="mb-tags" />

    <div class="grid">
      <PostCard
        v-for="item in paged"
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

    <p v-if="filtered.length === 0" class="empty">항목이 없습니다.</p>

    <Pagination v-model="currentPage" :total-pages="totalPages" />
  </div>
</template>

<script setup lang="ts">
const PAGE_SIZE = 12

const { data: items } = await useAsyncData('works-all', () =>
  queryCollection('works').order('date', 'DESC').all()
)

const selectedTag = ref('')
const currentPage = ref(1)

watch(selectedTag, () => { currentPage.value = 1 })

const allTags = computed(() => {
  const set = new Set<string>()
  items.value?.forEach((item) => item.tags?.forEach((t: string) => set.add(t)))
  return [...set].sort()
})

const filtered = computed(() => {
  if (!selectedTag.value) return items.value ?? []
  return (items.value ?? []).filter((item) => item.tags?.includes(selectedTag.value))
})

const totalPages = computed(() => Math.ceil(filtered.value.length / PAGE_SIZE))

const paged = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return filtered.value.slice(start, start + PAGE_SIZE)
})
</script>

<style scoped>
.page-header {
  padding: 2rem 0 1.5rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
}

.mb-tags {
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.empty {
  text-align: center;
  color: var(--color-text-muted);
  padding: 4rem 0;
}
</style>
