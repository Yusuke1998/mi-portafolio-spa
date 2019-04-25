import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// styles
 import '../dist/plantilla/vendor/bootstrap/css/bootstrap.min.css'
 import '../dist/plantilla/vendor/font-awesome/css/font-awesome.min.css'
 import '../dist/plantilla/vendor/owl.carousel/assets/owl.carousel.css'
 import '../dist/plantilla/vendor/owl.carousel/assets/owl.theme.default.css'
 import '../dist/plantilla/css/style.default.css'
 import '../dist/plantilla/css/custom.css'
 // fin styles

 // scripts
  // import '../dist/plantilla/vendor/jquery/jquery.min.js'
  // import '../dist/plantilla/vendor/popper.js/umd/popper.min.js'
  // import '../dist/plantilla/vendor/owl.carousel/owl.carousel.min.js'
  // import '../dist/plantilla/js/front.js'
  // import '../dist/plantilla/vendor/jquery.cookie/jquery.cookie.js'
  // import '../dist/plantilla/vendor/masonry-layout/masonry.pkgd.min.js'
  // import '../dist/plantilla/vendor/bootstrap/js/bootstrap.min.js'
 // find scripts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
