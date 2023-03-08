<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/FooterComponent.vue'
import Carrrousel from '../components/CarrouselComponent.vue'
import CardYorlin from '../components/CardYorlin.vue'

</script>

<template>
    <NavBar class="mb-5"/>
    <h1>Mundo Front-end</h1>

    <div class="cards">
    <!-- : indica que es una variable / se lo he quitado-->
    <!-- : Ingresamos los props directamente en el elemento-->
    <CardYorlin titulo="Front-Guía Para Desarrolladores FrontEnd Para Crear Aplicaciones" descripcion="descripcion frontend 1" enlace="https://blog.nubecolectiva.com/guia-para-desarrolladores-frontend-para-crear-aplicaciones-de-ia-en-2023/" imagen="/src/img/imagen-1.png"/>
    <CardYorlin titulo="Front-10 Componentes Gratis Para Vue JS en este nuevo año 2023 – Parte 1" descripcion="descripcion frontend 2" enlace="https://blog.nubecolectiva.com/10-componentes-gratis-para-vue-js-parte-1/" imagen="/src/img/imagen-2.png"/>
    <CardYorlin titulo="Front-Responsive Design vs Adaptative Design ¿ Cuál es Mejor ?" descripcion="descripcion frontend 3" enlace="https://blog.nubecolectiva.com/responsive-design-vs-adaptative-design-cual-es-mejor/" imagen="/src/img/imagen-3.png"/>
  </div>

    <Carrrousel class="mb-5 "/>


    <Footer class="mb-5"/>
</template>
<style>
h1{
    text-align: center;
    margin: 2rem auto;
}
</style>