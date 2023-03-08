
<!-- Implementacion de la directiva V-FOR -->
<template>
  <ul>
    <li v-for="(curso , index) in cursos" :key="index">
    Curso : {{curso}}</li>
  </ul>
</template>

<script>
export default {
    setup() {
        const cursos = ["HTML-5","CSS-3","JAVASCRIPT","VUE-3","FIGMA"];

        return{
            cursos,
        };
        
    },

};
</script>

<style>

</style>