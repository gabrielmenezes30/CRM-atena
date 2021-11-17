import { RouteRecordRaw } from 'vue-router';

export const DashbordRoute: Array<RouteRecordRaw>  = [
    {
        path: '/dashbord',
        name: 'Dashbord',
        component: () =>import('../Dashbord/Dashbord.vue')
    }
]

export default DashbordRoute;
