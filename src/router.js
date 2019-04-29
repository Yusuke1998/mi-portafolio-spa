import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Detail from './views/Detail.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/Inicio'
    },
    {
      path: '/about',
      name: 'about',
      alias: '/AcercaDe',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      alias: '/Contacto',
      component: Contact
    },
    {
      path: '/detail/:id',
      path: '/DetalleDe/:id',
      name: 'detail',
      alias: 'DetalleDe',
      component: Detail
    },
    { path: '*', name: 'not-found', component: NotFound }
  ]
})
