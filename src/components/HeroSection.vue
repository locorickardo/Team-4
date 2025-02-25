<script setup></script>
<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://www.unileverfoodsolutions.se/dam/global-ufs/mcos/nordics/calcmenu/recipes/se-recipes/red-meats-&-red-meat-dishes/klassiska-k%C3%B6ttbullar-i-gr%C3%A4dds%C3%A5s-med-r%C3%A5r%C3%B6rda-lingon/Klassiska%20k%C3%B6ttbullar%20i%20gr%C3%A4dds%C3%A5s%20med%20r%C3%A5r%C3%B6rda%20lingon%20och%20pressgurka_main-header.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Recept 1</h5>
          <p>Kort beskrivning</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://storage.googleapis.com/gcp-bloggse-storage/1011/1011420/www/images/2011/sany0002_146585862.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Recept 2</h5>
          <p>Kort beskrivning</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://dubqhqyqxbi6u.cloudfront.net/media-library/2259/conversions/tikka-masala-1675351524-D4ngC-large.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Recept 3</h5>
          <p>Kort beskrivning</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style scoped></style>
