<template>
  <div class="wisam">
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top p-0">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"
          ><img class="logo" src="/src/assets/img/Tasty Tales.png" alt=""
        /></a>
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
              <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/recept">Recept</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/favoriter">Mina Favoriter</RouterLink>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.wisam {
  margin-bottom: 80px;
}
</style>
<script setup></script>
