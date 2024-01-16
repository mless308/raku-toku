import "@/scss/main.scss";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mdiVue from 'mdi-vue/v3';
import * as mdiJs from '@mdi/js';

import RequestRakuten from "@/libs/request/rakuten/main.js"

const app = createApp(App)

app.use(router)
app.use(mdiVue, { icons: mdiJs })

app.mixin(RequestRakuten)

app.mount('#app')
