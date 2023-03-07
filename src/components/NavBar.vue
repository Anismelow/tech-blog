<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand me-5 text-decoration-none" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item me-5">
         <RouterLink to="/" class="text-decoration-none">Home</RouterLink>
        </li>
        <li class="nav-item me-5">
            <RouterLink to="/FrontView" class="text-decoration-none">Front-End</RouterLink>
       
        </li>
        <li class="nav-item me-5">
         <RouterLink to="/" class="text-decoration-none">Back-end</RouterLink>

        </li>
        <li class="nav-item me-5">
         <RouterLink to="/" class="text-decoration-none">DevOps</RouterLink>
        </li>
        <li class="nav-item me-5">
         <RouterLink to="/" class="text-decoration-none">Inteligecia Artificial</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style>
.navbar{
  height: 7rem;
  background-color: rgb(238, 238, 238);
}

</style>