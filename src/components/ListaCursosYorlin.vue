<!-- Implementacion de la directiva V-FOR -->
<template>
  <ul>
    <li v-for="(curso, index) in cursos" :key="index">Curso : {{ curso }}</li>
  </ul>
</template>

<script>
export default {
  setup() {
    const cursos = ["HTML-5", "CSS-3", "JAVASCRIPT", "VUE-3", "FIGMA"];

    return {
      cursos,
    };
  },
};
</script>

<style scoped>
ul{
  list-style: none;
}
li {
  width: 15rem;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  margin: 1rem 0rem;
  padding: 1rem 1rem;
  text-align: center;
}
</style>
