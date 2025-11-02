
<script setup>
// queryContent를 사용하여 content/blog 디렉토리의 모든 Markdown 파일 쿼리

const posts = await queryCollection('blog').order('date', 'DESC').all()

console.log(posts)

</script>

<template>
    <div>
        <div id="postList-box">
            <div v-for="post in posts" :key="post.path.split('/')[2]" class="postList">
            <NuxtLink :to="post.path">
                <img :src="post.thumb" class="postThumb" />
                <div class="padding10">
                    <div class="postInfo">
                    <div class="postTitle">{{ post.title }}</div>
                    <span class="postDate">{{ post.date.split('T')[0] }}</span>
                    </div>
                    <div style="display: flex; gap: 5px; margin-bottom: 8px;"><code v-for="tag in post.tags" :key="post.tags" style="font-size: 0.8rem; background-color: var(--accentdark); padding: 3px;">{{tag}}</code></div>
                    <div class="postDesc">{{ post.description }}</div>
                </div>
            </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style>
#postList-box {
    display: grid;
    width: 100%;
    margin: 50px auto;
    max-width: 1400px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
}

.postList {
    width: 100%;
    border: 1px solid var(--accentdark);
}

.postInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

.postTitle {
    font-weight: 700;
}

.postThumb {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: center;
}

.postDate {
    font-size: 0.8rem;
    color: var(--accentdark);
}

.padding10 {
    padding: 10px;
}
</style>