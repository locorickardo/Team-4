<template>
  <div class="carousel-wrapper">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img/Hero_Food_1.png" class="d-block" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Recept 1</h5>
            <p>Kort beskrivning</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/img/Hero_Food_2.png" class="d-block" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Recept 2</h5>
            <p>Kort beskrivning</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/img/Hero_Food_3.png" class="d-block" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Recept 3</h5>
            <p>Kort beskrivning</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      <div class="carousel-button">
        <RouterLink to="/recept" class="btn btn-primary">Till våra populära recept</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.carousel-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  position: relative;
}

.carousel-inner {
  width: auto;
  max-width: 1200px;
}

.carousel-item img {
  width: 100%;
  margin: 0 auto;
}

.carousel-button {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.carousel-button .btn {
  background-color: #000000;
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.carousel-button .btn:hover {
  background-color: #e66900;
}
</style>
