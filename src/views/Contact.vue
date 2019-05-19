<template>
    <!--   *** CONTACT ***-->
    <div class="col-md-8 col-lg-9 content-column white-background">
      <div class="row">
        <div class="col-lg-8">
          <div class="content-column-content">
            
            <h4>Mis redes sociales:</h4>
            <p class="social social--big">
              <a target="_blank" v-bind:href="redes.facebook" class="facebook">
                <i class="fa fa-facebook"></i>
              </a>
              <a target="_blank" v-bind:href="redes.twitter" class="twitter">
                <i class="fa fa-twitter"></i>
              </a>
              <a target="_blank" v-bind:href="redes.youtube" class="gplus">
                <i class="fa fa-youtube" aria-hidden="true"></i>
              </a>
              <a target="_blank" v-bind:href="redes.instagram" class="instagram">
                <i class="fa fa-instagram"></i>
              </a>
              <a target="_blank" v-bind:href="redes.github" class="github">
                <i class="fa fa-github"></i>
              </a>
              <a target="_blank" @click.prevent="showEmail = !showEmail" class="email">
                <i class="fa fa-envelope"></i>
              </a>
              <transition name="correo">
                <p class="text-center" v-if="showEmail" v-text="redes.correo"></p>
              </transition>
              <hr>
            </p>
            <h4>Formulario de contacto</h4>
            <form id="contact-form" class="contact-form form" @submit.prevent="enviarCorreo()">
              <div class="controls">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Nombres *</label>
                      <input type="text" v-model="nombres" class="form-control">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="surname">Apellidos *</label>
                      <input type="text" v-model="apellidos" name="surname" id="surname" class="form-control">
                    </div>
                  </div>
                </div>
                 <div class="form-group">
                  <label for="phone">Telefono *</label>
                  <input type="phone" v-model="telefono" class="form-control">
                </div>
                <div class="form-group">
                  <label for="email">Correo electronico *</label>
                  <input type="email" v-model="correo" class="form-control">
                </div>
                <div class="form-group">
                  <label for="message">Mensaje *</label>
                  <textarea rows="4" v-model="mensaje" class="form-control"></textarea>
                </div>
                <div>
                  <input type="submit" value="Enviar" class="btn btn-outline-primary btn-block">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--   *** CONTACT END***-->
</template>
<script>
  import {misMixins} from '@/mixins.js'
  import network from '../components/my-data/network.json';
  import axios from 'axios'

  export default{
    data(){
      return{
        nombres:'',
        apellidos:'',
        correo:'',
        telefono:'',
        mensaje:'',
        redes:network[0],
        showEmail:false
      }
    },
    methods:{
      enviarCorreo(){
          let datos=
          {
              name:this.nombres+' '+this.apellidos,
              phone:this.telefono,
              email:this.correo,
              message:this.mensaje
          };

          alert('Esto aun no funciona!');

          // if (datos.name==''||datos.name=='  '||datos.phone==''||datos.email==''||datos.message=='') {
          //   alert('Un campo del formulario esta vacio!');
          // }else{
          //   // Usar axios para enviar a servidor con php como backend y posteriormente enviarlo por email
          //   this.axios.get('http://localhost:8000/',{"datos":datos}).then(response=>{
          //       console.log(response.data);
          //   });
          // }
      },
    },
    mixins: [misMixins]
  }
</script>

<style>
.correo-enter-active {
  animation: correo-in .5s;
}
.correo-leave-active {
  animation: correo-out .5s;
}
@keyframes correo-in {
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
@keyframes correo-out {
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