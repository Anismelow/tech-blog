<script >
import { RouterLink, RouterView } from 'vue-router'
import CardYorlin from './components/CardYorlin.vue';

export default {
  components: {
    CardYorlin,
    // NavBarVue,
  },
  setup() {
    // creamos las variables
    let titulo = "";
    let descripcion = "";
    let enlace = "";
    let imagen = "";
    // Retornamos para poderlas usar
    return {
      titulo,
      descripcion,
      enlace,
      imagen,
    };
  },
};



</script>

<template>
 
  <RouterView />
</template>

