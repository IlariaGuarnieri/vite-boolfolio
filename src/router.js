import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue'
import Error from './pages/Error.vue'
import Technologies from './pages/Technologies.vue'
import ProjectDetail from './pages/ProjectDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/progetti',
      name: 'about',
      component: About,
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/technologies',
      name: 'technologies',
      component: Technologies,
    },
    {
      path: '/dettaglio-progetti/:slug:',
      name: 'projectDetail',
      component: ProjectDetail,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error,
    },
  ]
})

export { router }