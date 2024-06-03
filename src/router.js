import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue'
import Error from './pages/Error.vue'

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About,
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error,
    },
  ]
})

export { router }