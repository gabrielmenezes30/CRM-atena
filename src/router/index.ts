import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import DashboardRoute from '../views/dashboard/DashboardRoute'
import RotaLogin from '../views/login/RotaLogin'
import AlvosRota from '../views/login/RotaLogin'


// exportando e concatenando o Array das rotas. 
export const routes = ([] as Array<RouteRecordRaw>).concat(DashboardRoute, RotaLogin, AlvosRota)


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
