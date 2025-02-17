<script setup>
import { RouterView } from VueRouter
import NavBar from '../src/components/NavBar.vue'
import Footer from '../src/components/Footer.vue'
import HeroSection from '../src/components/HeroSection.vue'


</script>

<template>
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    <RouterView></RouterView>
    <Footer></Footer>
</template>

<style scoped></style>
