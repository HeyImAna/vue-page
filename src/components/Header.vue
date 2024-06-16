<script setup>
import Logo from './svg/Logo.vue'

const emit = defineEmits(['openMenu'])
</script>

<template>
  <header>
    <nav class="container">
      <ul class="container__side">
        <router-link to="/">
          <li><Logo /></li>
        </router-link>
        <router-link to="/price">
          <li class="link">Тарифы</li>
        </router-link>
        <router-link to="/contact">
          <li class="link">Контакты</li>
        </router-link>
      </ul>
      <ul class="container__side">
        <li class="link" style="font-weight: var(--fw-bold)">+7 495 118-44-22</li>
        <router-link to="/auth">
          <li class="link">Вход</li>
        </router-link>
        <router-link to="/auth">
          <li class="link"><button>Регистрация</button></li>
        </router-link>

        <div @click="() => emit('openMenu')" class="menu">
          <svg height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg">
            <title />
            <line
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-miterlimit: 10;
                stroke-width: 30px;
              "
              x1="88"
              x2="424"
              y1="152"
              y2="152"
            />
            <line
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-miterlimit: 10;
                stroke-width: 30px;
              "
              x1="88"
              x2="424"
              y1="256"
              y2="256"
            />
            <line
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-miterlimit: 10;
                stroke-width: 30px;
              "
              x1="88"
              x2="424"
              y1="360"
              y2="360"
            />
          </svg>
        </div>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@use '../scss/util/index' as u;

a,
a:visited,
a:active {
  color: #fff;
}

header {
  position: fixed;
  width: 100%;
  min-height: u.rem(60);

  background: var(--clr-linear);
  color: #fff;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: u.rem(12) 0;
    max-width: u.rem(1920);
    margin-inline: auto;

    .menu {
      cursor: pointer;
      @media (min-width: 61em) {
        display: none;
      }
    }

    &__side {
      display: flex;
      align-items: center;
      gap: u.rem(30);

      li {
        cursor: pointer;
        font-size: u.rem(18);
      }

      .link {
        @media (max-width: 61em) {
          display: none;
        }
      }
    }
  }
}
</style>
