<template>
    <div class="card">
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
        </div>
    </div>
</template>

<script setup>
defineProps({
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
        required: true,  // Ensure the image is passed
    }
});
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
</style>
