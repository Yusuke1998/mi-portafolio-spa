import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios'
import VueAxios from 'vue-axios'


// styles
 import './assets/plantilla/vendor/bootstrap/css/bootstrap.min.css'
 import './assets/plantilla/vendor/font-awesome/css/font-awesome.min.css'
 import './assets/plantilla/vendor/owl.carousel/assets/owl.carousel.css'
 import './assets/plantilla/vendor/owl.carousel/assets/owl.theme.default.css'
 import './assets/plantilla/css/style.default.css'
 import './assets/plantilla/css/custom.css'
 // fin styles

Vue.config.productionTip = false
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

