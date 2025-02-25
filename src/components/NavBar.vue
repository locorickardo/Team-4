<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Tasty Tales</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                    <li class="nav-item">
                        <RouterLink class="nav-link" aria-current="page" to="/">Hem</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/about">Recept</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/favorit">Favoriter</RouterLink>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Sök</button>
                </form>
            </div>
        </div>
    </nav>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Just+Another+Hand&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

.navbar-brand {
    font-family: 'Just Another Hand', cursive;
    color: #85A33E;
    font-weight: 400;
    font-size: 48px;
    line-height: 30px;
}

.navbar.navbar-expand-lg {
    background-color: #F4F0E8 !important;
}

.nav-item {
    font-family: Inter;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
}

.form-control[type="search"]:hover {
    background-color: white;
    border-color: #85A33E;
}

.btn-outline-success:hover {
    background-color: #85A33E;
    color: white;
    border-color: #85A33E;
}
</style>
<script setup></script>
