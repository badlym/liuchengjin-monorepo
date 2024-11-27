import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      redirect: '/user',
      children: [
        {
          path: '/user',
          component: () => import('@/views/user/index.vue'),
        },
        {
          path: '/order',
          component: () => import('@/views/order/index.vue'),
        },
      ],
    },
  ],
});
