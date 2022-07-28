import VueRouter, {RouteConfig} from 'vue-router'
import authRoutes from "@/router/authRoutes";

const routes: Array<RouteConfig> = [
    {
        path: '/', redirect: {name: 'app'}
    },
    {
        path: '/app', name: 'app', component: () => import('@/components/main/MainContainer.vue'),
        children: [
            {
                path: '/dashboard', name: 'dashboard', component: () => import('@/components/Dashboard.vue'),
                meta: {
                    requiredAuth: true,
                },
            },
        ]
    },
    authRoutes,
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to,from,next) => {
    next()
})


export default router
