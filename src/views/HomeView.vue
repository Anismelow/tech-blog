<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/FooterComponent.vue'
import CardYorlin from '../components/CardYorlin.vue'
import Carrrousel from '../components/CarrouselComponent.vue'

</script>

<template>
   <NavBar class="mb-5"/>
    <Carrrousel class="mb-5 "/>

    
    <div class="cards">
    <!-- : indica que es una variable / se lo he quitado-->
    <!-- : Ingresamos los props directamente en el elemento-->
    <CardYorlin
      titulo="Front-Responsive Design vs Adaptative Design ¿ Cuál es Mejor ?"
      descripcion="descripcion frontend 3Red Hat adquiere compañía que facilita desarrollo de apps basadas en contenedoresCodenvy será adquirida por Red Hat una vez que las instacias reguladoras lo aprueben, covirtiendose en prioridad dentro de la estrategia Openshift.io.

La compañía de soluciones de código abierto, Red Hat informó la adquisición de Codenvy, empresa centrada en herramientas nativas en nube para el desarrollo de apps de nueva generación basadas en contenedores."
      enlace="https://https://www.siliconweek.com/cloud/red-hat-adquiere-compania-que-facilita-desarrollo-de-apps-basadas-en-contenedores-82856blog.nubecolectiva.com/responsive-design-vs-adaptative-design-cual-es-mejor/"
      imagen="src/assets/img/2017-05-31-684x505.png"
    />
    
    <CardYorlin titulo="Front-10 Componentes Gratis Para Vue JS en este nuevo año 2023 – Parte 1" descripcion="descripcion frontend 2" enlace="https://blog.nubecolectiva.com/10-componentes-gratis-para-vue-js-parte-1/" imagen="/src/img/imagen-2.png"/>
    
       
    <CardYorlin titulo="Front-Responsive Design vs Adaptative Design ¿ Cuál es Mejor ?" descripcion="descripcion frontend 3" enlace="https://blog.nubecolectiva.com/responsive-design-vs-adaptative-design-cual-es-mejor/" imagen="/src/img/imagen-3.png"/>
  </div>


    <Footer class="mb-5"/>

</template>
