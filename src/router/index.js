import { createRouter, createWebHistory } from "vue-router";
import Signin from "@/Pages/Signin.vue";
import OTP from "@/Pages/OTP.vue";
import Home from "@/Pages/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: Signin,
        },
        {
            path: '/otp',
            name: 'otp',
            component: OTP,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
    ]
})

export default router;