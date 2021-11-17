import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import DashbordRoute from '../views/Dashbord/DashbordRoute'
import RotaLogin from '../views/login/RotaLogin'


// Concatenando o Array das rotas. 
export const routes = ([] as Array<RouteRecordRaw>).concat(DashbordRoute, RotaLogin)


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
