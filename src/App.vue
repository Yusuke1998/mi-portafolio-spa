<template>
  <div id="app">
    <!-- Menu -->
    <a href="#" class="btn btn-outline-primary small-navbar d-flex d-md-none" @click.prevent="toggle_active()" title=""><i class="fa fa-align-left mr-2"></i>Menu</a>
    <!-- Menu -->
    <div id="all">
      <div class="container-fluid">
        <div class="row row-offcanvas row-offcanvas-left" :class="{'active':toggle}"> 
            <!--*** SIDEBAR ***-->
            <div id="sidebar" class="col-md-4 col-lg-3 sidebar-offcanvas">
              <div class="sidebar-content">
                <ul class="sidebar-menu">
                    <!-- Link-->
                    <li class="sidebar-item">
                      <router-link to="/"><i class="fa fa-home" aria-hidden="true"></i>&nbsp&nbspInicio</router-link>
                    </li>
                    <!-- Link-->
                    <li class="sidebar-item">
                      <router-link to="/AcercaDe"><i class="fa fa-info" aria-hidden="true"></i>&nbsp&nbspAcerca de</router-link>
                    </li>
                    <!-- Link-->
                    <li class="sidebar-item">
                      <router-link to="/Contacto"><i class="fa fa-phone" aria-hidden="true"></i>&nbsp&nbspContacto</router-link>
                    </li>
                </ul>
                <h1 class="sidebar-heading"><router-link to="/">Jhonny Pérez</router-link></h1>
                <p class="sidebar-p text-left" v-text="text1"></p>
                <p class="sidebar-p text-left" v-text="text2"></p>
                <p class="social  text-center">
                  <a target="_blank" v-bind:href="redes.facebook" data-animate-hover="pulse" class="external facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a target="_blank" v-bind:href="redes.youtube" data-animate-hover="pulse" class="external gplus">
                    <i class="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                  <a target="_blank" v-bind:href="redes.twitter" data-animate-hover="pulse" class="external twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a target="_blank" v-bind:href="redes.instagram" title="" class="external instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a target="_blank" href="#" @click.prevent="showEmail = !showEmail" data-animate-hover="pulse" class="email">
                    <i class="fa fa-envelope"></i>
                  </a>
                  <a target="_blank" v-bind:href="redes.github" data-animate-hover="pulse" class="github">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <span class="text-center sidebar-p" v-if="showEmail">
                    {{ redes.correo }}
                  </span>
                </p>

                <div class="copyright text-left text-md-left">
                  <p class="credit">&copy;2019 <br><router-link to="/">Jhonny Prz | Yusuke1998</router-link></p>
                  <p class="credit">Template by <a href="http://bootstrapious.com/portfolio-themes" target="_blank" class="external">Bootstrapious.com</a></p>
                </div>
              </div>
            </div>
            <!-- *** SIDEBAR END ***  -->
            <router-view/>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {misMixins} from '@/mixins.js'
  export default{
    data(){
      return{
        text1:'Venezolano, estudiante y programador.',
        text2:'Estudiante eterno de las nuevas tecnologias, amante de php y su excelente framework laravel.',
        showEmail:false,
        redes:{
          github:'https://github.com/Yusuke1998',
          facebook:'https://www.facebook.com/jhonnyprz1998',
          twitter:'https://twitter.com/yusukeJJPM',
          youtube:'https://www.youtube.com/channel/UCR8Qv82YEtiXwkwLV-og13g?view_as=subscriber',
          correo:'jhonnyjose1998@gmail.com',
          instagram:'https://www.instagram.com/przjhonny/'
        }
      }
    },
    mixins: [misMixins]

  }

</script>