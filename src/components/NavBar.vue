<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand me-5 text-decoration-none" href="#">TECH - NEW </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item me-5">
         <RouterLink to="/" class="text-decoration-none text-black">Home</RouterLink>
        </li>
        <li class="nav-item me-5">
            <RouterLink to="/FrontView" class="text-decoration-none text-black">Front-End</RouterLink>
       
        </li>
        <li class="nav-item me-5">
         <RouterLink to="/BackendView" class="text-decoration-none text-black">Back-End</RouterLink>

        </li>
        <li class="nav-item me-5">
         <RouterLink to="/DevopsView" class="text-decoration-none text-black">DevOps</RouterLink>
        </li>
        <li class="nav-item me-5">
         <RouterLink to="/" class="text-decoration-none text-black">Inteligecia Artificial</RouterLink>
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