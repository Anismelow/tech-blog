<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/FooterComponent.vue";
// import Card from '../components/CardComponent.vue'
import Carrrousel from "../components/CarrouselComponent.vue";
import CardYorlin from "../components/CardYorlin.vue";
import ListaCursosYorlin from "../components/ListaCursosYorlin.vue";
</script>

<template>
  <NavBar class="mb-5" />
  <h1 class="tituloFront">Mundo Front-end</h1>

  <div class="cards">
    <!-- : indica que es una variable / se lo he quitado-->
    <!-- : Ingresamos los props directamente en el elemento-->
    <CardYorlin
      titulo="Front-Guía Para Desarrolladores FrontEnd Para Crear Aplicaciones"
      descripcion="El año 2022 resultó ser un año fantástico para la Inteligencia Artificial. Se lanzaron avances notables en el campo, como GPT-3 de OpenAI y Stable Diffuson AI Model de Stability AI , y las inversiones de capital de riesgo en el campo en 2021 fueron de $ 118 mil millones ..."
      enlace="https://blog.nubecolectiva.com/guia-para-desarrolladores-frontend-para-crear-aplicaciones-de-ia-en-2023/"
      imagen="/src/img/imagen-1.png"
    />
    <CardYorlin
      titulo="Front-10 Componentes Gratis Para Vue JS en este nuevo año 2023 – Parte 1"
      descripcion="Los componentes de la interfaz de usuario son la parte más integral de una aplicación de software, independientemente de si se trata de una aplicación móvil, web, de escritorio, de realidad aumentada o de realidad virtual. Los elementos de la interfaz de usuario son los componentes ..."
      enlace="https://blog.nubecolectiva.com/10-componentes-gratis-para-vue-js-parte-1/"
      imagen="/src/img/imagen-2.png"
    />
    <CardYorlin
      titulo="Front-Responsive Design vs Adaptative Design ¿ Cuál es Mejor ?"
      descripcion="Si planeas diseñar un sitio web, debes considerar una gran cantidad de tamaños y resoluciones de pantalla, desde un dispositivo práctico (móvil) hasta la pantalla de una computadora portátil o tableta. Y si tu diseño web no se muestra correctamente en ninguno de los dispositivos ... "
      enlace="https://blog.nubecolectiva.com/responsive-design-vs-adaptative-design-cual-es-mejor/"
      imagen="/src/img/imagen-3.png"
    />
  </div>

  <h2 class="tituloCursos">Cursos Importantes</h2>
  <div class="contenedorCursos">
    <div class="cardsCursos cardDivision">
      <lista-cursos-yorlin />
    </div>
    <div class="contenedorImagen cardDivision">
      <img src="../img/estudiante.png" class="imgEstudiante" alt="">

    </div>
  </div>

  <Carrrousel class="mb-5" />

  <Footer class="mb-5" />
</template>
<style>
.tituloFront,
.tituloCursos {
  text-align: center;
  margin: 2rem auto 5rem auto;
}

.contenedorCursos{
  width: 100%;
  height: auto;
  /* border: 1px solid black; */
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 6rem;
}
.cardDivision{
  width: 50%;
  height: auto;
  /* border: 1px solid red; */
  
}
.cardsCursos{
  display: flex;
  justify-content: center;
  
}
.imgEstudiante{
  width: 80%;
  height: auto;
}

</style>
