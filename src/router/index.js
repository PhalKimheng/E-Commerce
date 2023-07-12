import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/product',
            name: 'Product',
            component: () => import('../views/ProductView.vue'),
        },
        {
            path: '/blog',
            name: 'Blog',
            component: () => import('../views/BlogView.vue'),
        },
        {
            path: '/shop',
            name: 'Shop',
            component: () => import('../views/ShopView.vue'),
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('../views/ContactView.vue'),
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/signup',
            name: 'Signup',
            component: () => import('../views/SignupView.vue'),
        },
        {
            path: '/wishlist',
            name: 'Wishlist',
            component: () => import('../views/WishlistView.vue'),
        },
        {
            path: '/cart',
            name: 'Cart',
            component: () => import('../views/CartView.vue'),
        },
    ],
})

export default router
