<template>
  <!-- info -->
  <div v-if="selectedRecipe">
    <section class="recipe-info">
      <img :src="getImageUrl(selectedRecipe.image)" alt="" />
      <div>
        <h1>{{ selectedRecipe.name }}</h1>
        <div class="recipe-time-container">
          <i class="fas fa-clock"></i>
          <span class="recipe-time">{{ selectedRecipe.time || '25 min' }}</span>
        </div>
        <div class="line-break"></div>
        <p>{{ selectedRecipe.description }}</p>
      </div>
    </section>

    <section class="recipe-instructions">
      <!-- Ingredienser -->
      <div class="recipe-ingredients">
        <h2>Ingredienser</h2>
        <ul>
          <li v-for="ingredient in selectedRecipe.ingredients" :key="ingredient.name">
            <b>{{ ingredient.quantity }}</b> {{ ingredient.name }}
          </li>
        </ul>
      </div>

      <!-- Gör så -->
      <div class="recipe-howto">
        <h2>Gör så</h2>
        <ul>
          <li v-for="(instruction, index) in selectedRecipe.instructions" :key="index">
            {{ instruction }}
          </li>
        </ul>
      </div>
    </section>
  </div>

  <!-- Loading -->
  <p class="loading" v-else>Loading...</p>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, watch, onMounted } from 'vue'
import { useRecipeStore } from '@/stores/useRecipeStore'

const props = defineProps({
  title: String,
  layout: { type: String, default: 'vertical' },
})

const { recipes, fetchRecipes, getRecipeByTitle } = useRecipeStore()
const route = useRoute()
const selectedRecipe = ref(null)

onMounted(() => {
  fetchRecipes()
})

watch(recipes, () => {
  const searchTitle = decodeURIComponent(route.params.name)
  const recipe = getRecipeByTitle(searchTitle)

  if (recipe) {
    selectedRecipe.value = recipe
  }
})

function getImageUrl(imagePath) {
  return new URL(`/src/assets/img/${imagePath}`, import.meta.url).href
}
</script>

<style scoped>
.recipe-info {
  margin: 8rem 1rem 1rem 1rem;
  display: flex;
  background-color: white;
  border-radius: 0.7rem;
  width: 60vw;
  filter: drop-shadow(5px 5px 10px #a998762c);
}
.recipe-info > div {
  padding: 1.5rem;
}
.recipe-info > div > p {
  padding: 1rem;
  font-size: 1.1rem;
}
.recipe-instructions {
  display: flex;
  width: 60vw;
  justify-content: space-between;
  font-size: 1.1rem;
}
.recipe-ingredients {
  width: 40%;
  margin: 1rem;
}
.recipe-howto {
  width: 60%;
  margin: 1rem;
}
h2 {
  margin: 1rem 2rem 2rem 2rem;
  font-size: 1.5rem;
}
ul {
  background-color: white;
  border-radius: 0.6rem;
  padding: 1.5rem 2rem 0.5rem 2rem;
  list-style: none;
  box-shadow: 5px 5px 10px #a998762c;
}
li {
  padding-bottom: 1.5rem;
}

img {
  width: 30vw;
  height: 40vh;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
}
.loading {
  margin-top: 10rem;
}
.line-break {
  height: 1px;
  background-color: #ccc;
  margin-bottom: 10px;
}
.recipe-time-container {
  display: flex;
  align-items: center;
  gap: 5px;
  color: black;
  padding: 1rem;
}
</style>
