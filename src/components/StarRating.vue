<template>
  <div class="star-rating">
    <span
      v-for="star in stars"
      :key="star"
      class="star"
      :class="{ filled: star <= currentRating, hovered: star <= hoverRating }"
      @click="setRating(star)"
      @mouseover="setHover(star)"
      @mouseleave="setHover(0)"
    >
      ★
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  modelValue: Number, // v-model support
  maxStars: {
    type: Number,
    default: 5,
  },
})

const emit = defineEmits(['update:modelValue'])

const currentRating = ref(0)
const hoverRating = ref(0)
const stars = ref([...Array(props.maxStars).keys()].map((i) => i + 1))

// Load rating from localStorage when component mounts
onMounted(() => {
  const savedRating = localStorage.getItem('starRating')
  if (savedRating) {
    currentRating.value = parseInt(savedRating, 10)
  }
})

// Update localStorage when rating changes
watch(currentRating, (newRating) => {
  localStorage.setItem('starRating', newRating)
})

const setRating = (rating) => {
  currentRating.value = rating
  emit('update:modelValue', rating)
}

const setHover = (rating) => {
  hoverRating.value = rating
}
</script>

<style scoped>
.star {
  font-size: 1rem;
  cursor: pointer;
  color: #ccc;
  transition: color 0.2s;
}

.star.filled {
  color: gold;
}

.star.hovered {
  color: orange;
}
</style>
