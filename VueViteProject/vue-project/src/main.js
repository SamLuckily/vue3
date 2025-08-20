import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import api from '../api/api'
window.$api = api

createApp(App).use(router).use(ElementPlus).mount("#app")
// const app =createApp(App)
// app.use(router)
// app.mount("#app")


// createApp(App).mount('#app')
