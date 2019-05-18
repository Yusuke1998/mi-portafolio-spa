<template>
	<div class="row">
		<div class="col-md-6 col-lg-6 grid-item" v-for="item in items"> 
        	<div class="box-masonry"><a href="#" @click.prevent="detail_p(item.id)" title="" class="box-masonry-image with-hover-overlay with-hover-icon">
        		<img v-bind:src="item.imagen" alt="" class="img-fluid"></a>
	          	<div class="box-masonry-text"> 
	            	<h4>
	              		<a href="#" @click.prevent="detail_p(item.id)" v-text="item.titulo"></a>
	            	</h4>
	            	<div class="box-masonry-desription">
	              		<p v-text="item.descripcion"></p>
	              		<small>
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

export default {
  name: 'detalle',
  data:function(){
  	return{
  		items:datos
  	}
  }
}
</script>