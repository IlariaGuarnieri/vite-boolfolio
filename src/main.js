import './assets/scss/main.scss'
import "bootstrap/dist/css/bootstrap.css";
import {router} from './router'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).use(router).mount('#app')
