<script setup>
import HeroSection from '@/components/HeroSection.vue'
import RecipeCard from '@/components/RecipeCard.vue'

const images = [
  '../src/assets/img/Placeholder_1.jpeg',
  '../src/assets/img/Placeholder_2.jpeg',
  '../src/assets/img/Placeholder_3.jpeg',
  '../src/assets/img/Placeholder_4.jpeg',
  '../src/assets/img/Placeholder_5.jpeg',
  '../src/assets/img/Placeholder_6.jpeg',
  '../src/assets/img/Placeholder_7.jpeg',
  '../src/assets/img/Placeholder_8.jpeg',
];
</script>
<template>
  <HeroSection />
  <div class="card-grid">
    <RecipeCard v-for="(image, index) in images" :key="index" :title="'Recipe ' + (index + 1)" :time="'25'"
      :image="image" />
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
}

.card {
  width: 100%;
  max-width: 284px;
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
