<template>
	<!--   *** DETAIL ***-->
    <div class="col-md-8 col-lg-9 content-column white-background">
      <div class="row">
        <div class="col-xl-10">
          <div class="content-column-content">
            <detalle />
          </div>
        </div>
      </div>
    </div>
	<!--   *** DETAIL END ***-->
</template>
<script>
  import detalle from "@/components/Detalle.vue";

  export default{
    components:{
      detalle
    },
    data(){
      return{
        text: {'tex':'Vista de detalles de proyecto.'},
        proyectos:{
          proyecto1:{
            id:'1',
            imagen:'proyecto.jpg',
            titulo:'Sistema de ventas',
            completaDescripcion:'Sistema hecho con laravel y vue, para el control y registro de ventas, permite manejar facturacion asi como inventario de productos.',
            breveDescripcion:'Sistema sencillo de inventariado y ventas.'
          },
          proyecto2:{
            id:'2',
            imagen:'proyecto.jpg',
            titulo:'Sistema web de peliculas.',
            completaDescripcion:'Ver lista de peliculas ordenadas por año y genero',
            breveDescripcion:'Sistema sencillo de peliculas.'
          },
          proyecto3:{
            id:'3',
            imagen:'proyecto.jpg',
            titulo:'Blog personal',
            completaDescripcion:'Blog personal, hecho con laravel y vuejs.',
            breveDescripcion:'Blog con laravel y vue.'
          },
          proyecto4:{
            id:'4',
            imagen:'proyecto.jpg',
            titulo:'Sistema de control y seguimiento de documentos',
            completaDescripcion:'Sistema administrativo para el control y seguimiento de documentos y reportes.',
            breveDescripcion:'Gestor de documentos.'
          },
          proyecto5:{
            id:'5',
            imagen:'proyecto.jpg',
            titulo:'Curso de rimorsoft',
            completaDescripcion:'Pequeño crud con laravel y vue.',
            breveDescripcion:'Crud sencillo.'
          },
          proyecto6:{
            id:'6',
            imagen:'proyecto.jpg',
            titulo:'Asistente veterinario',
            completaDescripcion:'Sistema experto enfocado en tratamiento veterinario, hecho con laravel.',
            breveDescripcion:'Asistente veterinario.'
          },
          proyecto7:{
            id:'7',
            imagen:'proyecto.jpg',
            titulo:'Sistema de inventario',
            completaDescripcion:'Sistema sencillo que permite una gestion de inventariado, asi como la emision de reportes..',
            breveDescripcion:'Gestion de entradas y salidas de productos.'
          }
        }
      }
    }
  }
</script>