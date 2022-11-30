import {createRouter, createWebHistory} from 'vue-router'
import App from '../views/App.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import error404 from '../views/error404.vue'
import Dashboard from "../views/Dashboard.vue";

import store from "@/store";

const routes = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: '/about',
                name: 'About',
                component: About
            },
            {
                path: '/contact',
                name: 'Contact',
                component: Contact
            },
            {
                path: '/login',
                name: 'Login',
                component: Login,
            },
            {
                path: '/signup',
                name: 'Signup',
                component: Signup,
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard,
                meta: {
                    requiresAuth: true
                }
            },
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: 'error404',
        component: error404
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            next({
                path: "/login",
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router
