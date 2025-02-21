<script setup>
import NavBar from '../src/components/NavBar.vue'
import FooterLast from './components/FooterLast.vue'
import HeroSection from '../src/components/HeroSection.vue'
</script>

<template>
  <NavBar />
  <HeroSection />
  <RouterView />
  <FooterLast />
</template>

<style scoped></style>
