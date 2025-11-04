<template>
  <div id="titleborder">
    <div id="titlebox">
        <div id="title"><a href="/">Howeverina Studio</a></div>
        <div id="navbox">
            <div class="nav-item"><a href="/about/">About Me</a></div>
            <div class="nav-item"><a href="/music/">Portfolio</a></div>
            <div class="nav-item"><a href="/blog/">Blog</a></div>
            <div class="nav-item"><a href="/links/">Links</a></div>
        </div>
        <div id="navbox-mobile">
          <div id="nav-icon">≡</div>
          <div id="nav-mobile-menu">
            <div class="nav-item"><a href="/about/">About Me</a></div>
            <div class="nav-item"><a href="/music/">Portfolio</a></div>
            <div class="nav-item"><a href="/blog/">Blog</a></div>
            <div class="nav-item"><a href="/links/">Links</a></div>
          </div>
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
    padding: 50px 10px;
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

#navbox-mobile {
  display: none;
}

@media (max-width: 1200px) {
  
  #titlebox {
      padding: 10px;
  }

  #title {
      font-size: 2rem;
  }

  #navbox{
    display: none;
  }

  #navbox-mobile {
    display: flex;
    font-size: 3rem;
    padding: 0 1rem;
  }

  #navbox-mobile #nav-mobile-menu {
    display: none;
  }

  #navbox-mobile:hover #nav-mobile-menu {
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 70vh;
    top: 0;
    left: 0;
    background-color: var(--bg);
  }

} 

</style>