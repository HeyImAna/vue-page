<script setup>
//components
import Form from '../components/Form/index.vue'
import Advantages from '../components/Advantages.vue'
import Documents from '../components/Documents.vue'
</script>

<template>
  <div class="wrapping">
    <section>
      <Form />
    </section>
    <section>
      <Advantages />
    </section>
    <section>
      <Documents />
    </section>
  </div>
</template>

<style scoped lang="scss">
@use '../scss/util/index' as u;
.wrapping {
  padding-top: u.rem(139);
}
</style>
