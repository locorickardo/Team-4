import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])

  const storedFavorites = JSON.parse(localStorage.getItem('favorites'))
  if (storedFavorites) {
    favorites.value = storedFavorites
  }

  function addFavorite(recipe) {
    if (!favorites.value.includes(recipe)) {
      favorites.value.push(recipe)
      localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }
  }

  function removeFavorite(recipe) {
    favorites.value = favorites.value.filter((fav) => fav !== recipe)
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }

  function isFavorite(recipe) {
    return favorites.value.includes(recipe)
  }

  return { favorites, addFavorite, removeFavorite, isFavorite }
})
