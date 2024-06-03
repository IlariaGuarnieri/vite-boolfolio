# giorno 2 03.06.2024

Nel frontend aggiungete il ruoter con almeno 3 rotte di cui una è la pagina che effettua la chiamata API.
BONUS
Aggiungete la navigazione alla pagina dei progetti
aggiungete altre chiamate API

1. installo vue router npm install vue-router@4
2. creo cartella pages e ci metto file come home, about, contatti...
3. creo file router.js e c i metto dentro---> import { createRouter, createWebHistory } from 'vue-router';
ricorda di usare questa sintassi:

import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue'

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
  ]
})

4. export { router }
5. importo in main.js -->import {router} from './router'
e poi--> createApp(App).use(router).mount('#app')
