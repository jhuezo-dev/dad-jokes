import { createApp } from 'vue'
import './css/main.scss'
import App from './App.vue'
import router from './routes'
import { pinia } from './stores'

const app = createApp(App); 

app.use(pinia);
app.use(router);
app.mount('#app');
