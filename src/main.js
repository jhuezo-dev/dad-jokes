import { createApp } from 'vue'
import './css/main.css'
import App from './App.vue'
import router from './routes'

const app = createApp(App); 

app.use(router);
app.mount('#app');
