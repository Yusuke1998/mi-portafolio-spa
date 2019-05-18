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
              <p class="text-center" v-if="showEmail">
                  {{ redes.correo }}
              </p>
              <hr>
            </p>
            <h4>Formulario de contacto</h4>
            <form id="contact-form" class="contact-form form">
              <div class="controls">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Nombres *</label>
                      <input type="text" v-model="datos.nombres" required="required" class="form-control">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="surname">Apellidos *</label>
                      <input type="text" v-model="datos.apellidos" name="surname" id="surname" required="required" class="form-control">
                    </div>
                  </div>
                </div>
                 <div class="form-group">
                  <label for="phone">Telefono *</label>
                  <input type="phone" v-model="datos.telefono" required="required" class="form-control">
                </div>
                <div class="form-group">
                  <label for="email">Correo electronico *</label>
                  <input type="email" v-model="datos.correo" required="required" class="form-control">
                </div>
                <div class="form-group">
                  <label for="message">Mensaje *</label>
                  <textarea rows="4" v-model="datos.mensaje" required="required" class="form-control"></textarea>
                </div>
                <div>
                  <input type="submit" @click.prevent="enviarCorreo()" value="Enviar" class="btn btn-outline-primary btn-block">
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
  import axios from 'axios'

  export default{
    data(){
      return{
        datos:{
          nombres:'',
          apellidos:'',
          correo:'',
          telefono:'',
          mensaje:'',
        },
        redes:{
          github:'https://github.com/Yusuke1998',
          facebook:'https://www.facebook.com/jhonnyprz1998',
          twitter:'https://twitter.com/yusukeJJPM',
          youtube:'https://www.youtube.com/channel/UCR8Qv82YEtiXwkwLV-og13g?view_as=subscriber',
          correo:'jhonnyjose1998@gmail.com',
          instagram:'https://www.instagram.com/przjhonny/'
        },
        showEmail:false
      }
    },
    methods:{
      enviarCorreo(){
        alert('Esto no funciona wn!');
      }
    },
    mixins: [misMixins]
  }
</script>