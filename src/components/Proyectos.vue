<template>
	<div class="row">
		<div class="col-md-6 col-lg-6 grid-item" v-for="item in items"> 
    	<div class="box-masonry">
        <a href="#" @click.prevent="detail_p(item.id)" class="box-masonry-image with-hover-overlay with-hover-icon">
          <div v-if="item.imagen.src">
            <img v-bind:src="item.imagen.src[0]" alt="" class="img-fluid">
          </div>
          <div v-else="">
            <img v-bind:src="item.imagen" alt="" class="img-fluid">
          </div>
        </a>
      </div>
    	<div class="box-masonry-text mb-5 bg-white p-2"> 
      	<h4>
        		<a href="#" @click.prevent="detail_p(item.id)" v-text="item.titulo"></a>
      	</h4>
      	<div class="box-masonry-desription">
        		<p v-text="item.descripcion"></p>
        		<small v-if="item.url.src">
              <a v-bind:href="item.url.src[0]" target="_blank" v-text="item.url.src[0]" title="Direccion web"></a>
        		</small>
            <small v-else>
        			<a v-bind:href="item.url" target="_blank" v-text="item.url" title="Direccion web"></a>
            </small>
      	</div>
    	</div>
        	</div>
      </div>
	</div>
</template>

<script>
import datos from './my-data/data.json';
// console.log(datos[7].imagen);

export default {
  name: 'detalle',
  data:function(){
  	return{
  		items:datos
  	}
  },
    methods:{
      detail_p(id){
        this.$router.push('/DetalleDe/'+id);
      }
    }
}
</script>