<script setup>
import HeroSection from '@/components/HeroSection.vue'
import RecipeCard from '@/components/RecipeCard.vue'

const images = [
  '../src/assets/img/Placeholder_1.jpeg', // Image 1
  '../src/assets/img/Placeholder_2.jpeg', // Image 2
  '../src/assets/img/Placeholder_3.jpeg', // Image 3
  '../src/assets/img/Placeholder_4.jpeg', // Image 4
  '../src/assets/img/Placeholder_5.jpeg', // Image 5
  '../src/assets/img/Placeholder_6.jpeg', // Image 6
  '../src/assets/img/Placeholder_7.jpeg', // Image 7
  '../src/assets/img/Placeholder_8.jpeg', // Image 8
]
</script>
<template>
  <HeroSection />
  <div class="card-grid">
    <RecipeCard
      v-for="(image, index) in images"
      :key="index"
      :title="'Recipe ' + (index + 1)"
      :time="'25'"
      :image="image"
    />
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
