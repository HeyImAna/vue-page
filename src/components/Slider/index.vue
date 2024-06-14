<script setup>
import Card from './Card.vue'
import data from '../../assets/data.json'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
</script>

<template>
  <Swiper
    :modules="[Pagination, Navigation]"
    navigation
    :pagination="{ clickable: true }"
    :breakpoints="{
      640: {
        slidesPerView: 1,
        spaceBetween: 35
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 35
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 35
      }
    }"
  >
    <SwiperSlide v-for="item in data" :key="item.id">
      <Card :id="item.id" :title="item.title" :text="item.text" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss">
@use '../../scss//util/index' as u;

.swiper {
  margin-bottom: u.rem(496);
  max-width: u.rem(1090);
  border-radius: u.rem(10);
}

h2 {
  text-align: center;
  margin-bottom: 2.5rem;
}
</style>
