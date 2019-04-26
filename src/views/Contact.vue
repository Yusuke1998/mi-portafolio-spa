<template>
    <!--   *** CONTACT ***-->
    <div class="col-md-8 col-lg-9 content-column white-background">
      <div class="small-navbar d-flex d-md-none">
        <button type="button" data-toggle="offcanvas" class="btn btn-outline-primary"> <i class="fa fa-align-left mr-2"></i>Menu</button>
        <h1 class="small-navbar-heading"> <a href="index.html">Jhonny Pérez </a></h1>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="content-column-content">
            
            <h4>Mis redes sociales:</h4>
            <p class="social social--big">
              <a href="#" title="" class="facebook">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#" title="" class="twitter">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#" title="" class="gplus">
                <i class="fa fa-google-plus"></i>
              </a>
              <a href="#" title="" class="instagram">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="#" title="" class="email">
                <i class="fa fa-envelope"></i>
              </a>
              <a href="#" title="" class="github">
                <i class="fa fa-github"></i>
              </a>
            </p>
            <h4>Formulario de contacto</h4>
            <form id="contact-form" method="post" action="#" class="contact-form form">
              <div class="controls">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Nombres *</label>
                      <input type="text" name="name" id="name" required="required" class="form-control">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="surname">Apellidos *</label>
                      <input type="text" name="surname" id="surname" required="required" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">Correo electronico *</label>
                  <input type="email" name="email" id="email" required="required" class="form-control">
                </div>
                <div class="form-group">
                  <label for="message">Mensaje *</label>
                  <textarea rows="4" name="message" id="message" required="required" class="form-control"></textarea>
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