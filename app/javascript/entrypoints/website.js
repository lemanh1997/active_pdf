import { createApp } from 'vue'
import App from '@/apps/website/MainLayout.vue'
import * as router from '@/routers/website'

const app = createApp(App)

app.use(router)

app.mount('#app')
