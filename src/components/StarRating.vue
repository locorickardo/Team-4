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
  modelValue: Number,
  maxStars: {
    type: Number,
    default: 5,
  },
  cardId: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const currentRating = ref(0)
const hoverRating = ref(0)
const stars = ref([...Array(props.maxStars).keys()].map((i) => i + 1))

onMounted(() => {
  const savedRating = localStorage.getItem(`starRating-${props.cardId}`)
  if (savedRating) {
    currentRating.value = parseInt(savedRating, 10)
  }
})

watch(currentRating, (newRating) => {
  localStorage.setItem(`starRating-${props.cardId}`, newRating)
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
.wis {
  color: red;
}
</style>
