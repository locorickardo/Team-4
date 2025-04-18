<template>
  <div v-if="recipe" :class="['card', { 'horizontal-layout': layout === 'horizontal' }]">
    <img :src="getImageUrl(recipe.image)" alt="Recipe Image" class="recipe-image" />
    <div class="card-content">
      <RouterLink class="router-link" :to="'/' + encodeURIComponent(recipe.name)"
        ><h6 class="recipe-title">{{ recipe.name }}</h6></RouterLink
      >
      <div class="card-description">{{ recipe.description }}</div>
      <div class="spacer"></div>
      <div class="line-break"></div>

      <div class="info-section">
        <div class="recipe-rating">
          <StarRating v-model="rating" :cardId="recipe.name" />
        </div>
        <div class="recipe-time-container">
          <i class="fas fa-clock"></i>
          <span class="recipe-time">{{ recipe.time || '25 min' }}</span>
        </div>
      </div>
      <button @click="toggleFavorite" class="favorite-button">
        <i :class="['fa', isFavorite ? 'fas fa-heart' : 'far fa-heart']"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'
import { useRecipeStore } from '@/stores/useRecipeStore'
import StarRating from './StarRating.vue'

const props = defineProps({
  title: String,
  layout: { type: String, default: 'vertical' },
})

const { recipes, fetchRecipes, getRecipeByTitle } = useRecipeStore()
const recipe = ref(null)

watchEffect(async () => {
  if (recipes.value.length === 0) {
    await fetchRecipes()
  }
  recipe.value = getRecipeByTitle(props.title)
})

const rating = ref(0)
const favoritesStore = useFavoritesStore()
const isFavorite = computed(() => favoritesStore.isFavorite(props.title))

function getImageUrl(imagePath) {
  return new URL(`/src/assets/img/${imagePath}`, import.meta.url).href
}

function toggleFavorite() {
  if (isFavorite.value) {
    favoritesStore.removeFavorite(props.title)
  } else {
    favoritesStore.addFavorite(props.title)
  }
}
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 284px;
  height: fit-content;
  border-radius: 12px;
  background-color: rgba(248, 248, 248, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 10px #a998762c;
  position: relative;
}

.card.horizontal-layout {
  max-width: 800px;
  height: 200px;
  flex-direction: row;
}

.recipe-image {
  width: 100%;
  height: 20vh;
  object-fit: cover;
  border-radius: 8px;
}

.card.horizontal-layout .recipe-image {
  width: 40%;
  height: 100%;
  margin-right: 20px;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 50%;
  padding: 20px;
}

.card.horizontal-layout .card-content {
  width: 60%;
  height: 100%;
}

.recipe-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.7rem;
}

.recipe-description {
  font-size: 14px;
  color: #555;
  margin-bottom: auto;
}

.spacer {
  flex-grow: 1;
}

.line-break {
  height: 1px;
  background-color: #ccc;
  margin-bottom: 10px;
}

.info-section {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: auto;
}

.recipe-rating {
  color: gold;
  margin-bottom: 5px;
}

.recipe-time-container {
  display: flex;
  align-items: center;
  gap: 5px;
  color: black;
}

.recipe-info {
  display: flex;
  align-items: center;
}

.recipe-info .fa-clock {
  margin-right: 5px;
  color: black;
}

.recipe-time {
  font-size: 14px;
  color: #666;
}

.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 1000;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);
}

.favorite-button:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.favorite-button .fa-heart-o {
  color: grey;
}

.favorite-button .fa-heart {
  color: red;
}
.router-link {
  text-decoration: none;
  color: black;
}
</style>
