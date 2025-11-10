<template>
  <NuxtLayout>
    <div id="app-wrapper">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=League+Script&display=swap');

@font-face {
    font-family: 'MaruBuri';
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-ExtraLight.woff2);
    font-weight: 200;
    font-display: swap;
}

@font-face {
    font-family: 'MaruBuri';
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Light.woff2);
    font-weight: 300;
    font-display: swap;
}

@font-face {
    font-family: 'MaruBuri';
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Regular.woff2);
    font-weight: 400;
    font-display: swap;
}
@font-face {
    font-family: 'MaruBuri';
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-SemiBold.woff2);
    font-weight: 600;
    font-display: swap;
}
@font-face {
    font-family: 'MaruBuri';
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Bold.woff2);
    font-weight: 700;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Thin.woff2') format('woff2');
    font-weight: 100;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-ExtraLight.woff2') format('woff2');
    font-weight: 200;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Light.woff2') format('woff2');
    font-weight: 300;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Black.woff2') format('woff2');
    font-weight: 900;
    font-display: swap;
}

*{
  box-sizing: border-box;
}

:root {
  --accent: #FA4E79;
  --accentdark: #ffcdda;
  --bg: #FA4E79;
  --bglight: #FFA6BE22;
  /* --accent: #6200EE;
  --accentdark: #e3ccffff;
  --bg: #6200EE;
  --bglight: #e3ccff22; */
}

body {
  margin: 0 !important;
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.8;
  background-color: var(--bglight);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--accent);
}

h1, h2 {
  display: block;
  border-bottom: 1px solid var(--accentdark);
}

table {
  table-layout: fixed;
}

blockquote {
  border-left: 3px solid var(--accent);
  margin-left: 0;
  padding-left: 2rem;
}

code, pre {
  background-color: var(--accentdark);
  padding: 3px;
}

span.buttonDark {
  padding: 10px;
  background-color: white;
  color: var(--accent);
}

#app-wrapper {
    margin: 0 auto;
    width: 100%;
    padding: 0 50px;
}

.page-content {
    padding: 20px 0;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
}

img {
  max-width: 100%;
}

.youtube {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: center;
}

#postList-box, #musicList-box {
    display: grid;
    width: 100%;
    margin: 50px auto;
    /* max-width: 1400px; */
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
}

.listTitle {
    width: 100%;
    /* max-width: 1400px; */
    margin: 0.67em auto;
}

.blog-content a, .gotomain a {
  color: var(--accent);
}

.tag-box {
    display: flex;
    gap: 10px;
    justify-content: center;
}

@media (min-width: 700px) and (max-width: 1200px) {
  
  #postList-box, #musicList-box{
    grid-template-columns: 1fr 1fr;
  }

  #app-wrapper {
      margin: 0 auto;
      width: 100%;
      padding: 0 20px;
  }

}

@media (max-width: 699px) {
  
  #postList-box, #musicList-box {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  #app-wrapper {
      margin: 0 auto;
      width: 100%;
      padding: 0 20px;
  }

} 

</style>