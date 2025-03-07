<script setup>
import { computed, ref, onMounted } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { useRecipeStore } from '@/stores/useRecipeStore'

const { recipes, fetchRecipes } = useRecipeStore()

onMounted(() => {
  fetchRecipes() // Ensure recipes are loaded
})
</script>

<template>
  <HeroSection />
  <div class="card-grid">
    <RecipeCard
      v-for="recipe in recipes"
      :key="recipe.id"
      :title="recipe.name"
      :time="recipe.time"
      :image="recipe.image"
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
