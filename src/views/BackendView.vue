<script setup>
import NavBar from '../components/NavBar.vue'
import CardYorlin from '../components/CardYorlin.vue'
import SliderLucas from '../components/SliderlLucas.vue'
import Footer from '../components/FooterComponent.vue'
import Card from '../components/CardComponent.vue'
</script>

<template>

    <NavBar class="mb-5"/>
    



    <SliderLucas/>


    <h2 class="card-title">Blog de un Backend</h2>
        <p class="card-text">Herencia y múltiples instancias de un Singleton en Java.</p>
        <p>El Singleton aparece en escena, cuando se requiere tener una sola instancia de una clase, y ésta debe ser accesible a los clientes desde un punto de acceso conocido. Así lo indica el libro de Gang of four , y, categóricamente, en internet se promueve que solo puede existir una única instancia de una clase, pero no se habla mucho de su capacidad de extensión (Open/Close y Liskov), y lo que parece contradecir la motivación de crear un Singleton: permitir más de una instancia de la clase Singleton. Herencia en un Singleton A diferencia de lo que muchos afirman sobre el Singleton, que es un antipatrón, no cumple los principios SOLID, en mi opinión, cumple tres cosas importantes en el diseño orientado a objetos :  Cohesión / Principio de única responsabilidad : No crear un objeto estático global y transmitir al resto de clases que requieran de dicho objeto, sino, un punto único de definición y con un acoplamiento aferente hacía la clase Singleton.</p>
        <a href="https://www.victorhtorres.dev/2021/10/herencia-multiples-instancias-singleton.html"><button type="button" class="btn btn-primary">Más información</button></a> 



 <div class="cards">
    <CardYorlin titulo="DevOps es un modo de abordar la cultura, la automatización y el diseño de las plataformas para generar mayor valor empresarial y capacidad de respuesta, mediante la prestación ágil de servicios de alta calidad." enlace="https://azure.microsoft.com/es-es/resources/cloud-computing-dictionary/what-is-devops" imagen="https://img.freepik.com/vector-gratis/banner-isometrico-devops-desarrollo-operacion_107791-2943.jpg?w=740&t=st=1678045468~exp=1678046068~hmac=bc58056f74057e6da6d844fa99b5036e1e40cb2d714fd06bc8786feb4c7aef32" class="card-img-top"/>
    <CardYorlin titulo="¿Qué es el frontend? El frontend o «desarrollo del lado del cliente» se refiere a la práctica de producir HTML, CSS y JavaScript. Estos tres elementos se encargan de dar forma a la parte frontal de un sitio web o aplicación. Esto incluye los fondos, colores, texto, animaciones o efectos" enlace="" imagen="https://img.freepik.com/foto-gratis/concepto-transformacion-digital-fondo-microchip-tecnologia-ai_53876-124669.jpg?w=740&t=st=1678100506~exp=1678101106~hmac=3f40b0520d4b50af5faf636e1dd3b1931c23986814fa794fe26149805d5481b8" class="card-img-top" alt="inteligencia artificial"/>
    <CardYorlin titulo="La inteligencia artificial está en numerosos aspectos de la vida, descubre en cuales. Repsol conoce la importancia de la IA para el crecimiento digital y económico.
          Inteligencia artificial general (AGI) y Superinteligencia artificial (ASI)." enlace="https://iasolver.es/inteligencia-artificial-ventas-black-friday/" imagen="https://img.freepik.com/foto-gratis/concepto-transformacion-digital-fondo-microchip-tecnologia-ai_53876-124669.jpg?w=740&t=st=1678100506~exp=1678101106~hmac=3f40b0520d4b50af5faf636e1dd3b1931c23986814fa794fe26149805d5481b8" class="card-img-top" alt="inteligencia artificial"/>
  
 </div>     


<Footer class="mb-5"/>
</template>


<style>
h1{
    text-align: center;
    margin: 2rem auto;
}
</style>