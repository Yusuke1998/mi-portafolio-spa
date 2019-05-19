<template>
	<div>
		<h2 v-text="tituloProyecto"></h2>
		<p v-text="descripcionProyecto"></p>
		<img :src="imagenProyecto" class="img-fluid" alt="Responsive image">
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
    			}    
        	}
    	}
    },
    mounted(){
    	this.obtenerProyecto(this.$route.params.id);
    }
}

</script>