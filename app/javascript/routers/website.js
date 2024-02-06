import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '@/routes/website'

export const router = createRouter({
    history: createWebHashHistory(),
    base: '/',
    routes,
})
