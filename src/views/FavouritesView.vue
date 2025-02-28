<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'
import RecipeCard from '@/components/RecipeCard.vue'

const favoritesStore = useFavoritesStore()
const favoriteRecipes = computed(() => favoritesStore.favorites)

function getImagePath(index) {
  return new URL(`../assets/img/Placeholder_${index + 1}.jpeg`, import.meta.url).href
}
</script>
<template>
  <h1>Mina Favoritrecept</h1>
  <div v-if="favoriteRecipes.length === 0">Inga favoritrecept än</div>
  <div class="card-grid">
    <RecipeCard
      v-for="(recipe, index) in favoriteRecipes"
      :key="index"
      :title="recipe"
      :time="'25'"
      :image="getImagePath(index)"
    />
  </div>
</template>
<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px; /* Ensures consistent gap between columns and rows */
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;
  grid-auto-rows: minmax(250px, auto); /* Ensures consistent row height */
}
</style>
