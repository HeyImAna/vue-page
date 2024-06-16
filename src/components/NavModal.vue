<script setup>
defineProps({
  closeMenu: Function
})
</script>

<template>
  <nav>
    <img @click="() => closeMenu()" src="/public/images/closeIcon.png" alt="close" />
    <ul>
      <router-link to="/auth"
        ><li @click="() => closeMenu()" class="link"><h4>Вход</h4></li></router-link
      >
      <router-link to="/price"
        ><li @click="() => closeMenu()" class="link"><h4>Тарифы</h4></li></router-link
      >
      <router-link to="/contact"
        ><li @click="() => closeMenu()" class="link"><h4>Контакты</h4></li></router-link
      >
      <li class="num"><h4>+7 495 118-44-22</h4></li>
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
  height: 30%;
  z-index: 20;
  background-color: #222222;
  padding: 2.5rem;

  img {
    position: absolute;
    right: 2.5rem;
    cursor: pointer;
  }

  ul {
    margin-top: 1rem;
    width: 80%;

    .link,
    .num {
      color: #fff;
      padding: 0.5rem;
    }

    .link {
      transition: 0.3s ease-out;
      &:hover,
      &:active {
        color: rgb(73, 113, 159);
      }
    }
  }
}
</style>
