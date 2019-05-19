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
    }
  }
</script>