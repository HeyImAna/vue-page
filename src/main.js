import './assets/main.css'
import './scss/style.scss'

import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

// PrimeVue
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import ToastService from 'primevue/toastservice'

// Pages
import Home from './pages/Home.vue'
import Price from './pages/Price.vue'
import Contact from './pages/Contact.vue'
import Auth from './pages/Auth.vue'
import Details from './pages/Details.vue'
import NotFound from './pages/NotFound.vue'

const app = createApp(App)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/price', name: 'price', component: Price },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/auth', name: 'auth', component: Auth },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/details/:id', name: 'details', component: Details }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

app.use(router)
app.use(PrimeVue)
app.use(ToastService)

app.mount('#app')
