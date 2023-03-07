<template>
    <div class="card" style="width: 18rem">
      <!-- <img src="@/img/imagen-1.jpg" class="card-img-top" alt="..." /> -->
      <img :src="imagen" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ titulo }}</h5>
        <p class="card-text">{{ descripcion }}</p>
        <a :href="enlace" class="btn btn-primary">Mas informacion</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      //indicamos que tipo sera el prop que nos va a entrar
      props:{
          titulo: String,
          descripcion: String,
          enlace: String,
          imagen: String,
          enlace: String,
      },
    setup(props) {
      // const titulo = "Front-End";
      // const descripcion = "Informacion de descripcion";
      // const enlace = "Mas informacion";
      //const link = "www.youtube.com";
      console.log("ruta imagen card"+ props.imagen);
  
      return {
      //   titulo,
       // descripcion,
       // enlace,
        //link,
      };
    },
  };
  </script>
  
  <style>
  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;
    /* height: 100vh; */
    /* border: 1px solid black; */
    margin-top: 1rem;
    margin-bottom: 6rem;
    padding: 5rem;
    background: #ffefba; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ffffff,
      #ffefba
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #ffffff,
      #ffefba
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  </style>
  