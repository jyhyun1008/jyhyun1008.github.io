
<script setup>
// queryContent를 사용하여 content/blog 디렉토리의 모든 Markdown 파일 쿼리
const now = new Date()
const nowStr = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`

const posts = await queryCollection('blog')
.order('date', 'DESC')
.all()

</script>

<template>
    <div>
        <h1 class="listTitle">Posts</h1>
        <div id="postList-box">
            <div v-for="post in posts" :key="post.path.split('/')[2]" class="postList">
            <NuxtLink :to="post.path">
                <img :src="post.thumb" class="postThumb" />
                <div class="padding10">
                    <div class="postInfo">
                        <div class="postTitle">{{ post.title }}</div>
                        <span class="postDate">{{ post.date.split('T')[0] }}</span>
                    </div>
                    <div style="display: flex; gap: 5px; margin-bottom: 8px;">
                        <code v-for="tag in post.tags" :key="post.tags" style="font-size: 0.8rem; background-color: var(--accentdark); padding: 3px;">{{tag}}</code>
                    </div>
                    <div class="postDesc">{{ post.description }}</div>
                </div>
            </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style>


.postList {
    width: 100%;
    border: 1px solid var(--accentdark);
    background-color: white;
}

.postInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

.postTitle {
    font-weight: 700;
    width: 70%;
    height: 2rem;
    overflow: hidden;
}

.postDesc {
    width: 100%;
    height: 4rem;
    overflow: hidden;
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