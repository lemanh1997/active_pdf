import { createApp } from 'vue'
import App from '@/layouts/panel/MainLayout.vue'
import router from '@/routers/panel'
import '@/assets/css/panel.scss'
import store from '@/store'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
