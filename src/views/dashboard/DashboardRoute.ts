import { RouteRecordRaw } from 'vue-router';

export const DashboardRoute: Array<RouteRecordRaw>  = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>import('../dashboard/Dashboard.vue')
    }
]

export default DashboardRoute;
