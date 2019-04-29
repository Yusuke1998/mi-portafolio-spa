<template>
	<!--   *** DETAIL ***-->
    <div class="col-md-8 col-lg-9 content-column white-background">
      <div class="row">
        <div class="col-xl-10">
          <div class="content-column-content">
            <detalle />
            <p v-if="id" v-text="id"></p>

            <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <div id="main-slider" class="owl-carousel owl-theme">
              <div class="item"><img src="img/slider/3.jpg" alt="" class="img-fluid"></div>
              <div class="item"><img src="img/slider/2.jpg" alt="" class="img-fluid"></div>
              <div class="item"><img src="img/slider/1.jpg" alt="" class="img-fluid"></div>
            </div>
            <!-- /#main-slider-->
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <ol>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ol>
            <blockquote class="blockquote">
              <p class="mb-0">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
            </blockquote>
            <h2>Header Level 2</h2>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then</p>
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