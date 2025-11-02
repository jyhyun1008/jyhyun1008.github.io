
<script setup>
const slug = useRoute().params.id
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})
</script>

<template>
    <div class="page-content">
        <div style="display: flex; gap: 5px; justify-content: center; margin-top: 50px;">
            <code v-for="tag in post.tags" :key="post.tags" style="font-size: 0.8rem; background-color: var(--accentdark); padding: 3px;">{{tag}}</code>
        </div>
        <h1 style="text-align: center; border-bottom: 0;">{{post.title}}</h1>
        <p style="text-align: center;">{{post.date.split('T')[0]}}</p>
  <!-- Render the blog post as Prose & Vue components -->
  <ContentRenderer :value="post" style="margin: 50px 0;" />
    </div>
</template>