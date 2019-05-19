<template>
	<div>
		<h2 v-text="tituloProyecto"></h2>
		<blockquote class="blockquote text-center">
		  <p v-text="descripcionProyecto" class="mb-0"></p>
		  <footer class="blockquote-footer">Repositorio
		  	<a :href="urlProyecto" target="_blank">
		  		<cite title="Ir al proyecto" v-text="urlProyecto"></cite>
		  	</a>
		  	<hr>
		  	<a class="h6" href="#" @click="showHerramientas = !showHerramientas">Herramientas de desarrollo.</a>
		  	<transition name="herramientas">
		  		<p v-if="showHerramientas" v-text="herramientasProyecto" class="h5"></p>
		  	</transition>
		  </footer>
		</blockquote>
		<img :src="imagenProyecto" class="img-fluid mb-5" alt="Imagen de proyecto">
	</div>
</template>
<script>

import datos from './my-data/data.json';
export default {
	data:function(){
		return{
	  		idProyecto:'',
	  		tituloProyecto:'',
	  		descripcionProyecto:'',
	  		imagenProyecto:'',
	  		urlProyecto:'',
	  		herramientasProyecto:'',
	  		showHerramientas:false,
	  		datosProyecto : datos
	  	}
	},
    methods:{
    	obtenerProyecto(id){
    		let proyecto = this.datosProyecto;
    		for (var i = 0; i < proyecto.length; i++) {
    			if (proyecto[i].id == id) {
		    		this.tituloProyecto = proyecto[i].titulo;
		    		this.descripcionProyecto = proyecto[i].descripcion;
		    		this.imagenProyecto = proyecto[i].imagen;
		    		this.urlProyecto = proyecto[i].url;
		    		this.herramientasProyecto = proyecto[i].herramientas;
    			}    
        	}
    	}
    },
    mounted(){
    	this.obtenerProyecto(this.$route.params.id);
    }
}

</script>

<style>
.herramientas-enter-active {
  animation: herramientas-in .5s;
}
.herramientas-leave-active {
  animation: herramientas-out .5s;
}
@keyframes herramientas-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes herramientas-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>