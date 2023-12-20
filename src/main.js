import './assets/main.css'
import "bootstrap"; // 從nodeModule中載入Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Import css file

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia} from 'pinia';


const app = createApp(App)

app.use(router)

const pinia = createPinia();
app.use(pinia)

app.mount('#app')
