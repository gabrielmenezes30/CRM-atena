import { RouteRecordRaw } from 'vue-router';

export const Rotalogin: Array<RouteRecordRaw>  = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () =>import('../login/Login.vue')
    }
]

export default Rotalogin;
