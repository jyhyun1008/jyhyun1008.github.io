<template>
  <div id="titleborder">
    <div id="titlebox">
        <div id="title"><a href="/">Howeverina Studio</a></div>
        <div id="navbox">
            <div class="nav-item"><a href="/about">About Me</a></div>
            <div class="nav-item"><a href="/music">Portfolio</a></div>
            <div class="nav-item">Study</div>
            <div class="nav-item"><a href="/links">Links</a></div>
        </div>
    </div>
  </div>
</template>

<style lang="css">

a {
    color: inherit;
    text-decoration: none;
}

#titleborder {
  background-color: var(--bg);
  color: white;
}

#titlebox {
    margin: 0 auto;
    padding: 50px 0;
    width: 100%;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#title {
  font-family: "League Script", cursive;
    font-weight: 200;
    font-size: 3rem;
}

#navbox {
    display: flex;
    gap: 4rem;
}

.nav-item:hover {
    color: var(--accentdark);
    font-weight: 700;
}

</style>