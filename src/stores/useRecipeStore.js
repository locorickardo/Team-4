import { ref, onMounted } from 'vue'

export function useRecipeStore() {
  const recipes = ref([])

  async function fetchRecipes() {
    if (recipes.value.length > 0) return // Avoid duplicate fetching
    try {
      const response = await fetch('/recept.json') // Adjust path if needed
      recipes.value = await response.json()
    } catch (error) {
      console.error('Error fetching recipes:', error)
    }
  }

  function getRecipeByTitle(title) {
    return recipes.value.find(recipe => recipe.name === title) || null
  }

  onMounted(fetchRecipes) // Fetch data once when app loads

  return { recipes, fetchRecipes, getRecipeByTitle }
}
