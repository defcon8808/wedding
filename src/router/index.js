import { createRouter, createWebHistory } from 'vue-router';

import BloomingDefault from '@/components/blooming/BloomingDefault.vue';
import MobilePopup from '../components/MobilePopup.vue';

const routes = [
    // ------------------
    // --- 메인
    // ------------------
    {
        path: '/',
        name: 'Blooming',
        component: BloomingDefault,
    },
    // ------------------
    // --- 청첩장 팝업
    // ------------------
    {
        path: '/MobilePopup',
        name: 'MobilePopup',
        component: MobilePopup,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
