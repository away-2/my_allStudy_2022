import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../view/Home/index.vue')
    },
    {
        path: '/video/:id',
        component: () => import("../view/Home/index.vue")
    },
    {
        path: '/search',
        component: () => import("../view/Search/index.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;