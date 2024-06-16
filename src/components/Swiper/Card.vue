<script setup>
defineProps({
  id: Number,
  title: String,
  text: String
})
</script>

<template>
  <div class="wrap">
    <div>
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
    <router-link :to="{ path: `/details/${id}` }">
      <button>Перейти</button>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@use '../../scss/util/index' as u;

.wrap {
  margin-inline: auto;
  max-width: u.rem(288);
  min-width: u.rem(230);
  height: u.rem(398);
  border: u.rem(1) solid #eeeff1;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: u.rem(10);
  padding: u.rem(25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 31em) {
    max-width: u.rem(228);
  }

  h3 {
    color: var(--clr-title);
    margin-bottom: u.rem(15);
  }

  p,
  button {
    font-size: u.rem(18);
  }

  button {
    width: 97%;
  }
}
</style>
