<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/FooterComponent.vue";
import CardYorlin from "../components/CardYorlin.vue";
import Carrrousel from "../components/CarrouselComponent.vue";
</script>

<template>
  <NavBar class="mb-5" />
  <Carrrousel class="mb-5" />

  <div class="cards">
    <!-- : indica que es una variable / se lo he quitado-->
    <!-- : Ingresamos los props directamente en el elemento-->
    <CardYorlin
      titulo="Las pruebas continuas crecen para mejorar ajustes"
      descripcion="Un informe revela que la garantía de calidad y las pruebas son un cuello de botella para la implementación de DevOps y, por tanto, para mantener la continuidad de entrega para muchas organizaciones."
      enlace="https://www.siliconweek.com/projects/las-pruebas-continuas-crecen-para-mejorar-ajustes-99229"
      imagen="src/assets/img/1EBXc9eJ1YRFLtkNI_djaAw-684x513.png"
    />

    <CardYorlin
      titulo="VMware y AWS anuncian nuevo servicio de nube híbrida"
      descripcion="VMware Cloud sobre AWS, es una nueva oferta que hará más fácil la ejecución de aplicaciones de los clientes en un entorno híbrido y con herramientas comunes
VMware y Amazon Web Services (AWS) anunciaron una alianza."
      enlace="https://www.siliconweek.com/cloud/vmware-y-aws-anuncian-nuevo-servicio-de-nube-hibrida-71730"
      imagen="src/assets/img/Nube-684x513.jpg"
    />

    <CardYorlin
      titulo="Front-Responsive Design vs Adaptative Design ¿ Cuál es Mejor ?"
      descripcion="descripcion frontend 3Red Hat adquiere compañía que facilita desarrollo de apps basadas en contenedoresCodenvy será adquirida por Red Hat una vez que las instacias reguladoras lo aprueben, covirtiendose en prioridad dentro de la estrategia Openshift.io."
      enlace="https://https://www.siliconweek.com/cloud/red-hat-adquiere-compania-que-facilita-desarrollo-de-apps-basadas-en-contenedores-82856blog.nubecolectiva.com/responsive-design-vs-adaptative-design-cual-es-mejor/"
      imagen="src/assets/img/2017-05-31-684x505.png"
    />
  </div>

  <Footer class="mb-5" />
</template>
