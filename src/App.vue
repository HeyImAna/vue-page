<script setup>
import { ref, provide } from 'vue'
//components
import Header from './components/Header.vue'
import Modal from './components/Modal.vue'
import NavModal from './components/NavModal.vue'
import { onClickOutside } from '@vueuse/core'

//modal video (START)

const windowOpen = ref(false)

const closeWindow = () => {
  windowOpen.value = false
  document.body.style.overflow = 'auto'
  document.body.style.pointerEvents = 'auto'
}
const openWindow = () => {
  windowOpen.value = true
  document.body.style.overflow = 'hidden'
  document.body.style.pointerEvents = 'none'
}

const deleteModalRef = ref(null)

onClickOutside(deleteModalRef, closeWindow)

provide('window', {
  openWindow
})
//modal video (END)

//menu modal (START)
const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
const openMenu = () => {
  menuOpen.value = true
}

//menu modal (END)
</script>

<template>
  <NavModal :closeMenu="closeMenu" v-if="menuOpen" />
  <Modal style="pointer-events: auto" ref="deleteModalRef" v-if="windowOpen" />
  <div class="wrapper">
    <Header @open-menu="openMenu" />

    <main>
      <div class="container"><router-view></router-view></div>
    </main>
  </div>
</template>

<style scoped lang="scss"></style>
