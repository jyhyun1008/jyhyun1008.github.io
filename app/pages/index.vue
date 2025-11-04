
<script setup>
// queryContent를 사용하여 content/blog 디렉토리의 모든 Markdown 파일 쿼리

const posts = await queryCollection('blog').order('date', 'DESC').limit(12).all()
const musics = await queryCollection('music').order('date', 'DESC').limit(4).all()

</script>

<template>
    <div>
        <div id="mainHeader" style="">
            <div class="page-content">
                <div id="mainGrid">
                    <div>
                        <h1 style="border-bottom: 0; margin: 0; font-size: 4rem; color: white;">환영합니다</h1>
                        <div>연이나의 개인 블로그에 어서오세요!</div>
                        <div>개인 음악 작업물에 대한 감상, 그리고 프로젝트를 꾸려가는 데 대한 기술적인 이야기를 다룹니다.</div>
                        <div><br /><a href="/about/"><span class="buttonDark">더 알아보기</span></a></div>
                    </div>
                    <img src="/main2.png" id="mainImage"/>
                    
                </div>
            </div>
        </div>
        <h2 class="listTitle">포트폴리오 (릴리즈 & 커미션)</h2>
        <div id="musicList-box">
            <div v-for="music in musics" :key="music.path.split('/')[2]" class="postList">
            <NuxtLink :to="music.path">
                <iframe class="youtube" :src="music.youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div class="padding10">
                    <div class="postInfo">
                    <div class="postTitle">{{ music.title }}</div>
                    <span v-if="music.date" class="postDate">{{ music.date.split('T')[0] }}</span>
                    </div>
                    <div style="display: flex; gap: 5px; margin-bottom: 8px;"><code v-for="tag in music.tags|| []" :key="music.tags" style="font-size: 0.8rem; background-color: var(--accentdark); padding: 3px;">{{tag}}</code></div>
                    <div class="postDesc">{{ music.description }}</div>
                </div>
            </NuxtLink>
            </div>
        </div>
        <h2 class="listTitle">블로그 포스트</h2>
        <div id="postList-box">
            <div v-for="post in posts" :key="post.path.split('/')[2]" class="postList">
            <NuxtLink :to="post.path">
                <img :src="post.thumb" class="postThumb" />
                <div class="padding10">
                    <div class="postInfo">
                    <div class="postTitle">{{ post.title }}</div>
                    <span v-if="post.date" class="postDate">{{ post.date.split('T')[0] }}</span>
                    </div>
                    <div style="display: flex; gap: 5px; margin-bottom: 8px;"><code v-for="tag in post.tags|| []" :key="post.tags" style="font-size: 0.8rem; background-color: var(--accentdark); padding: 3px;">{{tag}}</code></div>
                    <div class="postDesc">{{ post.description }}</div>
                </div>
            </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style>

#mainHeader {
    background-color:
    var(--accent);
    margin: 0 -50px;
    color: white;
    padding-bottom: 50px;
}

#mainImage {
    border-radius: 10px;
    aspect-ratio: 4 / 3;
    object-fit: cover;
}

#mainGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1em;
}

@media (max-width: 1200px) {

    #mainHeader {
        margin: 0 -20px;
    }
  
    #mainImage {
        display: none;
    }

    #mainGrid {
        width: 100%;
        display: block;
        padding: 20px;
    }
} 

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

.postDesc {
    width: 100%;
    height: 4rem;
    overflow: hidden;
}

.padding10 {
    padding: 10px;
}

.youtube {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: center;
}

</style>
