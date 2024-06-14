<template>
  <div class="bg"></div>

  <iframe
    class="video"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/cPYwt_Z0VpY?si=x9mR9A-7Tcg7WKcR"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  >
  </iframe>
</template>

<style scoped lang="scss">
@use '../scss/util/index' as u;
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: #000;
  opacity: 0.7;
}

.video {
  max-width: u.rem(960);
  max-height: u.rem(532);
  width: 50%;
  height: 50%;
  position: fixed;
  z-index: 99;
  left: 25%;
  top: 25%;
}
</style>
