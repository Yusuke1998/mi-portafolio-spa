<template>
    <!--   *** PORTFOLIO ***-->
    <div class="col-md-8 col-lg-9 content-column">
      <div class="grid row">
          <proyectos />
      </div>
    </div>
    <!--   *** PORTFOLIO END ***-->
</template>
<script>
  import proyectos from "@/components/Proyectos.vue";

  export default{
    data(){
      return{
      }
    },
    methods:{
      detail_p(id){
        this.$router.push('/DetalleDe/'+id);
      }
    },
    components:{
      proyectos
    }
  }

</script>
