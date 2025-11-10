
<script setup>
const slug = useRoute().params.id
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})


function getPath(tag){
    return `/blogall/${tag}`
}
 
</script>

<template>
    <div class="blog-content">
        <div><a href="/blog/">&lt; 메인으로</a></div>
        <div style="display: flex; gap: 5px; justify-content: center; margin-top: 50px;">
            <code v-for="tag in post.tags" :key="post.tags" style="font-size: 0.8rem; background-color: var(--accentdark); padding: 3px;"><NuxtLink :to="getPath(tag)">{{tag}}</NuxtLink></code>
        </div>
        <h1 style="text-align: center; border-bottom: 0;">{{post.title}}</h1>
        <p style="text-align: center; border-bottom: 0;">{{post.description}}</p>
        <p style="text-align: center; font-size: 0.9rem">{{post.date.split('T')[0]}}</p>
        <ContentRenderer :value="post" style="margin: 50px 0;" />
        <div style="padding: 20px 0 50px 0; background-color: var(--bglight);">
        <h2 style="text-align: center; border-bottom: 0;">이 포스트가 유익하거나 재미있었다면</h2>
        <div style="text-align: center;"><a style="background-color: var(--accent); color: white; padding: 6px;" href="https://open.kakao.com/me/howeverina">오픈채팅방에서 후원하기</a></div>
        </div>
    </div>
</template>

<style>


.blog-content {
    padding: 20px 0;
    max-width: 740px;
    width: 100%;
    margin: 0 auto;
}

</style>