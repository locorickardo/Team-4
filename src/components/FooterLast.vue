<script setup></script>

<template>
  <div class="footer bg-dark py-5 mt-5">
    <div class="container text-light text-center">
      <!-- Footer Title -->
      <p class="display-5 mb-3">Kontaktinfo</p>

      <!-- Contact Info -->
      <div class="contact-info">
        <div class="phone">
          <span class="contact-label">Telefon: </span>
          <span class="contact-value">070 967 21 36</span>
        </div>
        <div class="email">
          <span class="contact-label">Mail: </span>
          <span class="contact-value">contact@tastytales.com</span>
        </div>
      </div>

      <!-- Social Media Icons and Contact Info -->
      <div class="social-icons mb-3">
        <a href="https://twitter.com" target="_blank" class="social-icon x">
          <i class="fab fa-twitter"></i> <!-- Test Twitter Icon -->
        </a>
        <a href="https://www.instagram.com" target="_blank" class="social-icon instagram">
          <i class="fab fa-instagram"></i> <!-- Instagram Icon -->
        </a>
        <a href="https://www.youtube.com" target="_blank" class="social-icon youtube">
          <i class="fab fa-youtube"></i> <!-- YouTube Icon -->
        </a>
        <a href="https://www.tiktok.com" target="_blank" class="social-icon tiktok">
          <i class="fab fa-tiktok"></i> <!-- TikTok Icon -->
        </a>
      </div>



      <!-- Copyright Text -->
      <small class="text-white-50 d-block mt-3">copyright &copy; Tasty Tales</small>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.footer {
  background-color: #000 !important;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-top: 5rem;
}

.display-5 {
  font-size: 2.5rem;
  font-weight: 700;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 20px;
}

.social-icon {
  display: block;
  width: 40px;
  height: 40px;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: all 0.3s;
}

.social-icon i {
  color: #fff !important;
  /* Make the icons white */
}

.social-icon:hover i {
  color: #BEC09C !important;
}

.contact-info {
  display: flex;
  justify-content: center;
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  gap: 40px;
  margin-top: 1.5rem;
}

.contact-label {
  color: #BEC09C;
  font-size: 1rem;
}

.contact-value {
  color: #F4F0E8;
  font-size: 1.2rem;
}

.text-white-50 {
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  color: #BEC09C !important;
}
</style>
