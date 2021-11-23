import { RouteRecordRaw } from 'vue-router';

export const CadastroUsuariosRota: Array<RouteRecordRaw>  = [
    {
        path: '/cadastro',
        name: 'cadastro',
        component: () =>import('../cadastrousuarios/CadastroUsuarios.vue')
    }
]

export default CadastroUsuariosRota;
