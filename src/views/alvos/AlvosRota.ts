import { RouteRecordRaw } from 'vue-router';

export const AlvosRota: Array<RouteRecordRaw>  = [
    {
        path: '/alvos',
        name: 'alvos',
        component: () =>import('../alvos/Alvos.vue')
    }
]

export default AlvosRota;
