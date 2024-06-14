<script setup>
defineProps({
  closeMenu: Function
})
</script>

<template>
  <nav>
    <img @click="() => closeMenu()" src="/public/images/closeIcon.png" alt="close" />
    <ul>
      <router-link to="/auth"><li @click="() => closeMenu()">Вход</li></router-link>
      <router-link to="/price"><li @click="() => closeMenu()">Тарифы</li></router-link>
      <router-link to="/contact"><li @click="() => closeMenu()">Контакты</li></router-link>
      <li>+7 495 118-44-22</li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use '../scss/util/index' as u;

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: #000;
  padding: 2.5rem;

  img {
    position: absolute;
    right: 2.5rem;
    cursor: pointer;
  }

  li {
    color: #fff;
    margin-bottom: 1rem;
  }
}
</style>
