<script setup>
//  importar componentes tarjetas de yorlin en este componente
    import CardYorlin from './CardYorlin.vue';
</script>

<template>
    <!-- Implementamos una estructura normal de HTML -->
    <div class="imagenIA"></div>
    <div class="contenidoIa">
        <h1>Todo sobre la IA</h1>
        <p>La Inteligencia Artificial (IA, o AI en ingles) es la capacidad que tiene un dispositivo (como un móvil, ordenador o robot) para realizar tareas que generalmente requieren inteligencia humana. En informática, la Inteligencia Artificial es la disciplina donde estudiamos y desarrollamos estos sistemas.</p>
        <h2>Tipos de IA</h2>
        <ul>
            <li>Inteligencia artificial específica (o IA débil). Que es la que existe hoy en día y que es capaz de hacer muy bien –probablemente mejor que el mejor de los humanos– una tarea o conjunto de tareas previamente acotadas y solamente esas tareas, por ejemplo, jugar al ajedrez.</li>
            <li>Inteligencia artificial general (IA fuerte o IAG). Con todas las habilidades y capacidades que tienen los humanos. Considero que estamos muy lejos de conseguirlo, si es que se consigue. Sin embargo, no necesitamos IA general para la que la IA ya esté transformando profundamente nuestra sociedad.</li>
            <li>Superinteligencia. Sería una IA que superaría a la inteligencia humana, alcanzando en ese momento lo que se conoce como la singularidad. Por definición, al ser una inteligencia superior a la nuestra, no la comprendemos.</li>
        </ul>
    </div>

    <!-- Vamos a crear cada CARDS con sus respectivas PROPS -->
    <div class="cards">
    <!-- : indica que es una variable / se lo he quitado-->
    <!-- : Ingresamos los props directamente en el elemento-->
    <CardYorlin titulo="Front-Guía Para Desarrolladores FrontEnd Para Crear Aplicaciones" descripcion="descripcion frontend 1" enlace="https://blog.nubecolectiva.com/guia-para-desarrolladores-frontend-para-crear-aplicaciones-de-ia-en-2023/" imagen="/src/img/imagen-1.png"/>
    <CardYorlin titulo="Front-10 Componentes Gratis Para Vue JS en este nuevo año 2023 – Parte 1" descripcion="descripcion frontend 2" enlace="https://blog.nubecolectiva.com/10-componentes-gratis-para-vue-js-parte-1/" imagen="/src/img/imagen-2.png"/>
    <CardYorlin titulo="Front-Responsive Design vs Adaptative Design ¿ Cuál es Mejor ?" descripcion="descripcion frontend 3" enlace="https://blog.nubecolectiva.com/responsive-design-vs-adaptative-design-cual-es-mejor/" imagen="/src/img/imagen-3.png"/>
  </div>
</template>
   

<style scoped>

.imagenIA{
    width: 100%;
    height: 20rem;
    background-image: url(../assets/img/IAxavier.jpg);
    background-repeat: no-repeat;
    background-position: center;
}

.contenidoIa{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 4rem;
}
h2{
    margin: 2rem auto;
}
ul,li{
    margin: 1rem auto;
 }
</style>