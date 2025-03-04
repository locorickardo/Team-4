<template>
  <div :class="['card', { 'horizontal-layout': layout === 'horizontal' }]">
    <img :src="image" alt="Recipe Image" class="recipe-image" />
    <div class="card-content">
      <h6 class="recipe-title">{{ title }}</h6>
      <div class="line-break"></div>
      <div class="info-section">
        <div class="recipe-rating">★★★★★</div>
        <div class="recipe-info">
          <i class="fas fa-clock"></i>
          <span class="recipe-time">{{ time }} min</span>
        </div>
      </div>
      <button @click="toggleFavorite" class="favorite-button">
        <i :class="['fa', isFavorite ? 'fas fa-heart' : 'far fa-heart']"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'

const props = defineProps({
  title: {
    type: String,
    default: 'Recipe Title',
  },
  time: {
    type: String,
    default: '25',
  },
  image: {
    type: String,
    required: true,
  },
  layout: {
    type: String,
    default: 'vertical', // Default layout is vertical
  },
})

const favoritesStore = useFavoritesStore()

const isFavorite = computed(() => favoritesStore.isFavorite(props.title))

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
  height: 381px;
  border-radius: 12px;
  background-color: rgba(248, 248, 248, 0.8); /* Glass effect background */
  backdrop-filter: blur(10px); /* Glass effect background */
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.card.horizontal-layout {
  max-width: 800px; /* Adjust the width to make the card longer */
  height: 200px; /* Adjust the height to make the card shorter */
  flex-direction: row; /* Change to row to make it horizontal */
}

.recipe-image {
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.card.horizontal-layout .recipe-image {
  width: 40%; /* Adjust the width to fit the new layout */
  height: 100%;
  margin-right: 20px; /* Add margin to separate image from content */
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 50%;
}

.card.horizontal-layout .card-content {
  width: 60%; /* Adjust the width to fit the new layout */
  height: 100%;
}

.recipe-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.line-break {
  height: 1px;
  background-color: #ccc;
  margin-bottom: 10px;
}

.info-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}

.recipe-rating {
  color: gold;
  margin-bottom: 0px;
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
  margin-left: auto;
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
  backdrop-filter: blur(5px); /* Frostad effekt */
  background-color: rgba(255, 255, 255, 0.5); /* Ljus bakgrund för tydlighet */
}

.favorite-button:hover {
  background-color: rgba(255, 255, 255, 0.8); /* Ljusare bakgrund vid hover */
}

.favorite-button .fa-heart-o {
  color: grey; /* Set a default color for the unclicked heart icon */
}

.favorite-button .fa-heart {
  color: red; /* Set the color for the clicked heart icon */
}
</style>
