<template>
<div class="col-md-8 col-lg-9 content-column white-background">
	<div class="page-wrap d-flex flex-row align-items-center">
	    <div class="container">
	        <div class="row justify-content-center">
	            <div class="col-md-12 text-center">
	                <span class="display-1 d-block">404</span>
	                <div class="mb-4 lead">La pagina que buscas no fue encontrada.</div>
	                <a href="#" @click.prevent="volver()" class="btn btn-link">Volver al inicio</a>
	            </div>
	        </div>
	    </div>
	</div>
</div>
</template>
<script>
	export default{
		methods:{
			volver(){
				this.$router.push('/');
			}
		}
	}
</script>
<style>
.page-wrap {
    min-height: 100vh;
}
</style>