<script setup>
import { ref } from 'vue'
import Card from './Card.vue'
import data from '../../assets/data.json'
import Prev from '../svg/Prev.vue'
import Next from '../svg/Next.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css/pagination'
import 'swiper/css'

const slider = ref(null)
const onSwiper = (swiper) => {
  slider.value = swiper
}
</script>

<template>
  <Swiper
    @swiper="onSwiper"
    :modules="[Pagination, Navigation]"
    navigation
    :pagination="{
      dynamicBullets: true,
      clickable: true
    }"
    :breakpoints="{
      590: {
        slidesPerView: 1,
        spaceBetween: 25
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 35
      },
      1052: {
        slidesPerView: 3,
        spaceBetween: 35
      }
    }"
  >
    <SwiperSlide v-for="item in data" :key="item.id">
      <Card :id="item.id" :title="item.title" :text="item.text" />
    </SwiperSlide>
    <Prev class="swiperButtonPrev" @click.stop="slider.slidePrev()" />
    <Next class="swiperButtonNext" @click.stop="slider.slideNext()" />
  </Swiper>
</template>

<style scoped lang="scss">
@use '../../scss//util/index' as u;

.swiper {
  margin-bottom: 2.5rem;
  max-width: u.rem(1150);
  border-radius: u.rem(10);
  padding: 2rem 1.875rem;

  @media (max-width: 65.75em) {
    max-width: u.rem(770);
    padding: 2rem 1rem;
  }
}

.swiperButtonPrev,
.swiperButtonNext {
  position: absolute;
  bottom: u.rem(200);
  z-index: 99;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover,
  &:active {
    opacity: 0.7;
  }
}

.swiperButtonNext {
  right: 0;
}
.swiperButtonPrev {
  left: 0;
}

h2 {
  text-align: center;
  margin-bottom: 2.5rem;
}
</style>
