import BancoReactivos from '@/bancoReactivos/layout/BancoReactivos.vue';

import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bancolayout',
      component: BancoReactivos,
      children: [
        {
          path: 'banco',
          name: 'banco',
          component: () => import('@/bancoReactivos/pages/BancoPage.vue'),
          children: [
            {
              path: 'crear',
              name: 'crear',
              component: () => import('@/Banco/components/componentscards/CrearBanco.vue'),
            },
          ],
        },
        {
          path: 'compartidos',
          name: 'compartidos',
          component: () => import('@/bancoReactivos/pages/CompartidosPage.vue'),
          children: [
            {
              path: 'compartido',
              name: 'compartido',
              component: () => import('@/bancoReactivos/views/ViewCompartir/BancosCompartidos.vue'),
            },
            {
              path: 'bancospormi',
              name: 'bancospormi',
              component: () => import('@/bancoReactivos/views/ViewCompartir/BancosPorMi.vue'),
            },
            {
              path: '',
              name: 'defaultcompartido',
              redirect: '/compartidos/compartido', // Opción por defecto
            },
          ],
        },
        {
          path: 'eliminar',
          name: 'eliminar',
          component: () => import('@/bancoReactivos/pages/EliminadosPage.vue'),
        },
        {
          path: '',
          name: 'default',
          redirect: '/banco',
        },
      ],
    },
  ],
});

export default router;
