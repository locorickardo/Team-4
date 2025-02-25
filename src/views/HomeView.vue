<script setup>
import HeroSection from '@/components/HeroSection.vue'
import RecipeCard from '@/components/RecipeCard.vue';
</script>
<template>
  <HeroSection />
  <div class="card-grid">
    <RecipeCard v-for="(card, index) in 8" :key="index" :title="'Recipe ' + (index + 1)" :time="25" />
  </div>
</template>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;
  grid-template-rows: repeat(2, 381px);
}
</style>
