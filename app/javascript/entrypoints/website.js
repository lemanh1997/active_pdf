import { createApp } from 'vue'
import App from '@/apps/website/MainLayout.vue'
import * as router from '@/routers/website'
import '@/assets/css/style.scss'
import store from '@/store'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
