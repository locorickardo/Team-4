import { ref, onMounted } from 'vue'

export function useRecipeStore() {
  const recipes = ref([])

  async function fetchRecipes() {
    if (recipes.value.length > 0) return
    try {
      const response = await fetch('/recept.json')
      recipes.value = await response.json()
    } catch (error) {
      console.error('Error fetching recipes:', error)
    }
  }

  function getRecipeByTitle(title) {
    return recipes.value.find(recipe => recipe.name === title) || null
  }

  onMounted(fetchRecipes)

  return { recipes, fetchRecipes, getRecipeByTitle }
}
