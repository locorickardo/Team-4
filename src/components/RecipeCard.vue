<template>
  <div class="card">
    <img :src="image" alt="Recipe Image" class="recipe-image" />
    <button @click="toggleFavorite" class="favorite-button">
      <i :class="['fa-heart', isFavorite ? 'fas' : 'far']"></i>
    </button>
    <div class="card-content">
      <h6 class="recipe-title">{{ title }}</h6>
      <div class="info-section">
        <div class="line-break"></div>
        <div class="recipe-info">
          <div class="recipe-rating">
            <StarRating v-model="rating" :cardId="title" />
          </div>
          <div class="recipe-time-container">
            <i class="fas fa-clock"></i>
            <span class="recipe-time">{{ time }} min</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'
import { ref } from 'vue'
import StarRating from './StarRating.vue'
const rating = ref(0)

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
  width: 100%;
  max-width: 284px;
  height: 381px;
  border-radius: 12px;
  background-color: #f8f8f8;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.recipe-image {
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
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

.recipe-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.recipe-rating {
  color: gold;
  font-size: 10px;
}

.recipe-info .fa-clock {
  color: black;
}

.recipe-time {
  font-size: 14px;
  color: #666;
}

.recipe-time-container {
  margin-left: auto;
  display: flex;
  gap: 10px;
  align-items: center;
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
