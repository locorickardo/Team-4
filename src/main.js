import './assets/main.css'
/* Bootstrap CSS */
import 'bootstrap/dist/css/bootstrap.css'
/* Bootstrap JavaScript (e.g. modal, tooltips, etc)
Den här behövs för att JavaScript ska fungera i Bootstrap */
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
