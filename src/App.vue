<script >
import { RouterLink, RouterView } from 'vue-router'
import CardYorlin from './components/CardYorlin.vue';

export default {
  components: {
    CardYorlin,
    // NavBarVue,
  },
  setup() {
    // creamos las variables para front yorlin
    let titulo = "";
    let descripcion = "";
    let enlace = "";
    let imagen = "";
    // Retornamos para poderlas usar front yorlin
    return {
      titulo,
      descripcion,
      enlace,
      imagen,
    // termina yorlin  
    };
  },
};

</script>

<template>
 
  <RouterView />
</template>

