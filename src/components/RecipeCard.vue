<template>
  <div class="card">
    <div class="image-container">
      <img :src="image" alt="Recipe Image" class="recipe-image" />
      <button @click="toggleFavorite" class="favorite-button">
        <i :class="['fa-heart', isFavorite ? 'fas' : 'far']"></i>
      </button>
    </div>
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
  width: 284px;
  height: 381px;
  border-radius: 12px;
  background-color: #f8f8f8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.image-container {
  width: 100%;
  aspect-ratio: 16 / 9; /* Håller bilderna proportionella */
  position: relative;
  overflow: hidden; /* Förhindrar att bilder sticker ut */
  border-radius: 8px;
}

.recipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ser till att alla bilder fyller sin yta jämnt */
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 50%;
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
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
}

.favorite-button:hover {
  background: rgba(255, 255, 255, 1);
}

.favorite-button i {
  font-size: 24px;
  color: grey;
}

.favorite-button i.fas {
  color: red;
}
</style>
