import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import RequestRakuten from "@/libs/request/rakuten/main.js"

const app = createApp(App)

app.use(router)

app.mixin(RequestRakuten)

app.mount('#app')
