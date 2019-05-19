<template>
	<!--   *** ABOUT ***-->  	
	<div class="col-md-8 col-lg-9 content-column white-background">
	<div class="row">
	<div class="col-xl-10">
	  <div class="content-column-content">
	    <h1>Acerca de mi</h1>
	    <p class="lead">{{ perfil.descripcion }}</p>
	    <div class="row">
	      <div class="col-lg-8">
	        <p>{{ perfil.actualidad }}</p>
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
	        <p><img v-bind:src="perfil.foto" alt="Este soy yo!" class="image rounded-circle img-fluid"></p>
	      </div>
	    </div>
	    <h4 class="text-uppercase">Education</h4>
	    <ul>
	      <li v-for="item in perfil.estudios"><b>{{ item.tipo }}</b> : {{ item.institucion }} / {{ item.nombre }} / {{ item.grado }}</li>
	    </ul>
	  </div>
	</div>
	</div>
	</div>
	<!--   *** ABOUT END ***-->  	
</template>

<script>
	import skills from '../components/my-data/skills.json';
	import profile from '../components/my-data/profile.json';
	export default{
		data(){
			return {
				perfil : profile[0],
				conocimientos : skills[0],
				toggle:false
			}
		}
	}
</script>
