<script setup>
const emit = defineEmits(['closeWindow'])
</script>

<template>
  <div class="bg"></div>

  <img @click="() => emit('closeWindow')" src="/public/images/closeIcon.png" alt="close" />

  <iframe
    class="video"
    src="https://www.youtube.com/embed/-0n2kxkdJgM?si=313GvrjPcXBHKrzu"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</template>

<style scoped lang="scss">
@use '../scss/util/index' as u;
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: #000;
  opacity: 0.7;
}

img {
  pointer-events: auto;
  cursor: pointer;
  height: u.rem(15);
  width: u.rem(17);
  position: absolute;
  z-index: 99;
  right: 15%;
  top: 17%;

  @media (max-width: 40em) {
    right: 5%;
  }
}

.video {
  pointer-events: auto;
  max-width: u.rem(960);
  max-height: u.rem(532);
  width: 70%;
  aspect-ratio: 16 / 9;
  position: fixed;
  z-index: 999;
  left: 15%;
  top: 20%;

  @media (min-width: 85em) {
    max-width: u.rem(1250);
  }

  @media (max-width: 40em) {
    width: 90%;
    left: 5%;
  }
}
</style>
