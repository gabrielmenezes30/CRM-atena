import { RouteRecordRaw } from 'vue-router';

export const Rotalogin: Array<RouteRecordRaw>  = [
    {
        path: '/',
        redirect: '/Login'
    },
    {
        path: '/Login',
        name: 'Login',
        component: () =>import('../login/Login.vue')
    }
]

export default Rotalogin;
