
<script setup>
const slug = useRoute().params.id
const { data: post } = await useAsyncData(`music-${slug}`, () => {
  return queryCollection('music').path(`/music/${slug}`).first()
})

function getPath(tag){
    return `/musicall/${tag}`
}
</script>

<template>
    <div class="blog-content">
        <div><a href="/music/">&lt; 메인으로</a></div>
        <div style="display: flex; gap: 5px; justify-content: center; margin-top: 50px;">
            <code v-for="tag in post.tags" :key="post.tags" style="font-size: 0.8rem; background-color: var(--accentdark); padding: 3px;"><NuxtLink :to="getPath(tag)">{{tag}}</NuxtLink></code>
        </div>
        <h1 style="text-align: center; border-bottom: 0;">{{post.title}}</h1>
        <p style="text-align: center; border-bottom: 0;">{{post.description}}</p>
        <p style="text-align: center; font-size: 0.9rem">{{post.date.split('T')[0]}}</p>
        <!-- Render the blog post as Prose & Vue components -->
        <iframe class="youtube" :src="post.youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <ContentRenderer :value="post" style="margin: 50px 0;" />
        <div style="padding: 20px 0 50px 0; background-color: var(--bglight);">
        <h2 style="text-align: center; border-bottom: 0;">이 곡이 듣기 좋았다면</h2>
        <div style="text-align: center;"><a style="background-color: var(--accent); color: white; padding: 6px;" href="https://open.kakao.com/me/howeverina">오픈채팅방에서 후원하기</a></div>
        </div>
    </div>
</template>

<style>

.youtube {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: center;
}

.blog-content {
    padding: 20px 0;
    max-width: 740px;
    width: 100%;
    margin: 0 auto;
}
</style>