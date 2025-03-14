<script setup>
import { ref, onMounted, computed } from 'vue'
import FullRecipeSection from '@/components/FullRecipeSection.vue'

const recipes = ref([])
const recipesPerPage = 8
const totalPages = computed(() => Math.ceil(recipes.value.length / recipesPerPage))
const currentPage = ref(1)

function getImagePath(index) {
  return new URL(`../assets/img/Placeholder_${index + 1}.jpeg`, import.meta.url).href
}

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

onMounted(async () => {
  try {
    const response = await fetch('/recept.json') // Adjust path if needed
    recipes.value = await response.json()
  } catch (error) {
    console.error('Error fetching recipes:', error)
  }
})
</script>

<template>
  <div class="card-list">
    <FullRecipeSection />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 6rem;
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

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
}

.pagination button {
  background: #eee;
  border: none;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

.pagination button.active {
  background: #333;
  color: white;
  font-weight: bold;
}

.pagination button:hover {
  background: #ddd;
}

.pagination button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

::v-deep .recipe-image {
  border-radius: 8px 0 0 8px;
}
</style>
