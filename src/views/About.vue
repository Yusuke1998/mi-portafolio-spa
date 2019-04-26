<template>
	<!--   *** ABOUT ***-->  	
	<div class="col-md-8 col-lg-9 content-column white-background">
	<div class="small-navbar d-flex d-md-none">
	<button type="button" data-toggle="offcanvas" class="btn btn-outline-primary"> <i class="fa fa-align-left mr-2"></i>Menu</button>
	<h1 class="small-navbar-heading"><a href="#" v-text="yo"></a></h1>
	</div>
	<div class="row">
	<div class="col-xl-10">
	  <div class="content-column-content">
	    <h1>Acerca de mi</h1>
	    <p class="lead">{{ descripcion }}</p>
	    <div class="row">
	      <div class="col-lg-8">
	        <p>{{ actualidad }}</p>
		    <p class="skill-item">Habilidades o conocimientos en los que me desempeño</p>
		    <div v-for="item in conocimientos" class="foreach">
		        <div class="skill-item">
		          <div class="progress-title" v-text="item.titulo"></div>
		          <div class="progress">
		            <div role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" v-bind:style="{ width: item.porcentaje+'%' }" class="progress-bar progress-bar-skill1">
		            	<span class="sr-only" v-text="item.porcentaje"></span>
		            </div>
		          </div>
		        </div>
		    </div>
	      </div>
	      <div class="col-md-4">
	        <p><img v-bind:src="foto" alt="This is me" class="image rounded-circle img-fluid"></p>
	      </div>
	    </div>
	    <h4 class="text-uppercase">Education</h4>
	    <ul>
	      <li v-for="item in estudios"><b>{{ item.tipo }}</b> : {{ item.institucion }} / {{ item.nombre }} / {{ item.grado }}</li>
	    </ul>
	  </div>
	</div>
	</div>
	</div>
	<!--   *** ABOUT END ***-->  	
</template>

<script>
	export default{
		data(){
			return {
				yo:'Jhonny Pérez',
				descripcion:'Estudiante de ing en informatica, fanatico de la electronica y del buen cine. Me gusta el dinero y me gusta programar, por suerte van de la mano.',
				actualidad:"Estudio en la Universidad Nacional Experimental Romulo Gallegos, la carrera de ingenieria en informatica y actualmente me desempeño ahi como programador para la direccion de informatica. Apoyando las diferentes areas de estudio en tanto me sea posible , al mismo tiempo aparto un tiempo para trabajos freelance por medio de sitios como Workana, o uno que otro 'tigrito' que sale por ahi xD.",
				foto:'../dist/plantilla/img/profile.jpg',
				conocimientos:{
					php:{'titulo':'PHP','porcentaje':'80'},
					js:{'titulo':'JAVASCRIPT','porcentaje':'70'},
					jquery:{'titulo':'Jquery','porcentaje':'80'},
					sql:{'titulo':'SQL','porcentaje':'80'},
					html:{'titulo':'HTML','porcentaje':'90'},
					git:{'titulo':'GIT','porcentaje':'70'},
					python:{'titulo':'PYTHON','porcentaje':'50'}
				},
				estudios:{
					primaria:{"tipo":"primaria","institucion": "UEE", "nombre": "Prisco Pérez Monasterios", "grado": "6to grado aprobado"},
					secundaria:{"tipo":"secundaria","institucion": "LAS", "nombre": "Alberto Smith", "grado": "5to año aprobado"},
					superior:{"tipo":"superior","institucion": "UNERG", "nombre": "Romulo Gallegos", "grado": "9no semestre aprobado"}
				}
			}
		}
	}
</script>
