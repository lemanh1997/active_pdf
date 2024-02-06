import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/routes/website'

export const router = createRouter({
    history: createWebHistory(),
    base: '/',
    routes,
})
