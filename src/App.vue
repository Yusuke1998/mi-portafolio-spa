<template>
  <div id="app">
    <div id="all">
      <div class="container-fluid">
        <div class="row row-offcanvas row-offcanvas-left"> 
            <!--*** SIDEBAR ***-->
            <div id="sidebar" class="col-md-4 col-lg-3 sidebar-offcanvas">
              <div class="sidebar-content">
                <ul class="sidebar-menu">
                    <!-- Link-->
                    <li class="sidebar-item">
                      <router-link to="/">Home</router-link> |
                    </li>
                    <!-- Link-->
                    <li class="sidebar-item">
                      <router-link to="/about">About</router-link> |
                    </li>
                    <!-- Link-->
                    <li class="sidebar-item">
                      <router-link to="/contact">Contact</router-link> |
                    </li>
                </ul>
                <h1 class="sidebar-heading"> <a href="#">Jhonny Pérez</a></h1>
                <p class="sidebar-p text-justify">Venezolano, estudiante y programador.</p>
                <p class="sidebar-p text-left">
                  Estudiante eterno de las nuevas tecnologias, amante de php y su excelente framework laravel.
                </p>
                <p class="social"><a href="#" data-animate-hover="pulse" class="external facebook"><i class="fa fa-facebook"></i></a><a href="#" data-animate-hover="pulse" class="external gplus"><i class="fa fa-google-plus"></i></a><a href="#" data-animate-hover="pulse" class="external twitter"><i class="fa fa-twitter"></i></a><a href="#" title="" class="external instagram"><i class="fa fa-instagram"></i></a><a href="#" data-animate-hover="pulse" class="email"><i class="fa fa-envelope"></i></a></p>

                <div class="copyright text-center text-md-center">
                  <p class="credit">&copy;2019 <br>Jhonny Prz | Yusuke1998</p>
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
