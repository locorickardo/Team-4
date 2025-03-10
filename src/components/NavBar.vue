<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top p-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img class="logo" src="/src/assets/img/Tasty Tales.png" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" @click="closeNavbar">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/recept" @click="closeNavbar">Recept</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/favoriter" @click="closeNavbar"
              >Mina Favoriter</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const route = useRoute()

function closeNavbar() {
  const navbarCollapse = document.querySelector('.navbar-collapse')
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show') // This closes the menu
  }
}

onMounted(() => {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', closeNavbar)
  })
})
</script>

<style>
.navbar {
  background-color: #f4f0e8 !important;
}
/* fixa till mindre skärmstorlekar */
.logo {
  scale: 2;
  transform: translateX(2rem) translateY(0.5rem);
}
</style>
