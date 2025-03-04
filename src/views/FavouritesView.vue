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
  <div class="card-list">
    <RecipeCard
      v-for="(recipe, index) in favoriteRecipes"
      :key="index"
      :title="recipe"
      :time="'25'"
      :image="getImagePath(index)"
      layout="horizontal"
    />
  </div>
</template>
<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
}
.card-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}
</style>
