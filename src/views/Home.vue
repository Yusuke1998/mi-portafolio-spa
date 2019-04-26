<template>
    <!--   *** PORTFOLIO ***-->
    <div class="col-md-8 col-lg-9 content-column">
      <div class="small-navbar d-flex d-md-none">
        <button type="button" data-toggle="offcanvas" class="btn btn-outline-primary"> <i class="fa fa-align-left mr-2"></i>Menu</button>
        <h1 class="small-navbar-heading"> <a href="index.html">Jhonny Pérez </a></h1>
      </div>
      <div class="grid row">
          <div class="col-md-6 col-lg-3 grid-item" v-for="item in proyectos"> 
            <div class="box-masonry"> <a href="#" title="" class="box-masonry-image with-hover-overlay with-hover-icon"><img src="img/portfolio/business-card-26.jpg" alt="" class="img-fluid"></a>
              <div class="box-masonry-text"> 
                <h4> <a href="#" v-text="item.titulo"></a></h4>
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
            breveDescripcion:'Sistema sencillo de inventariado y ventas'
          },
          proyecto2:{
            id:'2',
            imagen:'proyecto.jpg',
            titulo:'Sistema de ventas',
            completaDescripcion:'Sistema hecho con laravel y vue, para el control y registro de ventas, permite manejar facturacion asi como inventario de productos.',
            breveDescripcion:'Sistema sencillo de inventariado y ventas'
          },
          proyecto3:{
            id:'3',
            imagen:'proyecto.jpg',
            titulo:'Sistema de ventas',
            completaDescripcion:'Sistema hecho con laravel y vue, para el control y registro de ventas, permite manejar facturacion asi como inventario de productos.',
            breveDescripcion:'Sistema sencillo de inventariado y ventas'
          },
          proyecto4:{
            id:'4',
            imagen:'proyecto.jpg',
            titulo:'Sistema de ventas',
            completaDescripcion:'Sistema hecho con laravel y vue, para el control y registro de ventas, permite manejar facturacion asi como inventario de productos.',
            breveDescripcion:'Sistema sencillo de inventariado y ventas'
          },
          proyecto5:{
            id:'1',
            imagen:'proyecto.jpg',
            titulo:'Sistema de ventas',
            completaDescripcion:'Sistema hecho con laravel y vue, para el control y registro de ventas, permite manejar facturacion asi como inventario de productos.',
            breveDescripcion:'Sistema sencillo de inventariado y ventas'
          },
          proyecto6:{
            id:'2',
            imagen:'proyecto.jpg',
            titulo:'Sistema de ventas',
            completaDescripcion:'Sistema hecho con laravel y vue, para el control y registro de ventas, permite manejar facturacion asi como inventario de productos.',
            breveDescripcion:'Sistema sencillo de inventariado y ventas'
          },
          proyecto7:{
            id:'3',
            imagen:'proyecto.jpg',
            titulo:'Sistema de ventas',
            completaDescripcion:'Sistema hecho con laravel y vue, para el control y registro de ventas, permite manejar facturacion asi como inventario de productos.',
            breveDescripcion:'Sistema sencillo de inventariado y ventas'
          },
          proyecto8:{
            id:'4',
            imagen:'proyecto.jpg',
            titulo:'Sistema de ventas',
            completaDescripcion:'Sistema hecho con laravel y vue, para el control y registro de ventas, permite manejar facturacion asi como inventario de productos.',
            breveDescripcion:'Sistema sencillo de inventariado y ventas'
          }
        }
      }
    }
  }

</script>
