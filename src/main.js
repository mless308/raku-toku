import "@/scss/main.scss";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import RequestRakuten from "@/libs/request/rakuten/main.js"

const app = createApp(App)

app.use(router)

app.mixin(RequestRakuten)

app.mount('#app')
