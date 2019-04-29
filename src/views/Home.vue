<template>
    <!--   *** PORTFOLIO ***-->
    <div class="col-md-8 col-lg-9 content-column">
      <div class="grid row">
          <div class="col-md-6 col-lg-6 grid-item" v-for="item in proyectos"> 
            <div class="box-masonry"><a href="#" @click.prevent="detail_p(item.id)" title="" class="box-masonry-image with-hover-overlay with-hover-icon"><img v-bind:src="item.vistaPrevia" alt="" class="img-fluid"></a>
              <div class="box-masonry-text"> 
                <h4>
                  <a href="#" @click.prevent="detail_p(item.id)" v-text="item.titulo"></a>
                </h4>
                <div class="box-masonry-desription">
                  <p v-text="item.breveDescripcion"></p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <!--   *** PORTFOLIO END ***-->
</template>
<script>
  export default{
    data(){
      return{
        proyectos:{
          proyecto1:{
            id:'1',
            imagen:'proyecto.jpg',
            titulo:'Sistema de ventas',
            completaDescripcion:'Sistema hecho con laravel y vue, para el control y registro de ventas, permite manejar facturacion asi como inventario de productos.',
            breveDescripcion:'Sistema sencillo de inventariado y ventas.',
            vistaPrevia:'/profile.jpg'
          },
          proyecto2:{
            id:'2',
            imagen:'proyecto.jpg',
            titulo:'Sistema web de peliculas.',
            completaDescripcion:'Ver lista de peliculas ordenadas por año y genero',
            breveDescripcion:'Sistema sencillo de peliculas.',
            vistaPrevia:''
          },
          proyecto3:{
            id:'3',
            imagen:'proyecto.jpg',
            titulo:'Blog personal',
            completaDescripcion:'Blog personal, hecho con laravel y vuejs.',
            breveDescripcion:'Blog con laravel y vue.',
            vistaPrevia:''
          },
          proyecto4:{
            id:'4',
            imagen:'proyecto.jpg',
            titulo:'Sistema de control y seguimiento de documentos',
            completaDescripcion:'Sistema administrativo para el control y seguimiento de documentos y reportes.',
            breveDescripcion:'Gestor de documentos.',
            vistaPrevia:''
          },
          proyecto5:{
            id:'5',
            imagen:'proyecto.jpg',
            titulo:'Curso de rimorsoft',
            completaDescripcion:'Pequeño crud con laravel y vue.',
            breveDescripcion:'Crud sencillo.',
            vistaPrevia:''
          },
          proyecto6:{
            id:'6',
            imagen:'proyecto.jpg',
            titulo:'Asistente veterinario',
            completaDescripcion:'Sistema experto enfocado en tratamiento veterinario, hecho con laravel.',
            breveDescripcion:'Asistente veterinario.',
            vistaPrevia:''
          },
          proyecto7:{
            id:'7',
            imagen:'proyecto.jpg',
            titulo:'Sistema de inventario',
            completaDescripcion:'Sistema sencillo que permite una gestion de inventariado, asi como la emision de reportes..',
            breveDescripcion:'Gestion de entradas y salidas de productos.',
            vistaPrevia:''
          }
        }
      }
    },
    methods:{
      detail_p(id){
        this.$router.push('/DetalleDe/'+id);
      }
    }
  }

</script>
