import type { RouteObject } from 'react-router-dom'
import lazyLoad from '@/routers/lazyLoad'

import { createBrowserRouter, Navigate } from 'react-router-dom'

// @ts-ignore
export const router: RouteObject[] = createBrowserRouter([
  {
    path: '/',
    element: lazyLoad(lazy(() => import('@/views/home'))),
    children: [
      {
        index: true, // 索引路由，即默认显示的子路由
        element: <Navigate to="front-end" replace />,
      },
      {
        path: 'front-end',
        element: lazyLoad(lazy(() => import('@/views/home/components/FrontEnd/FrontEnd'))),
      },
      {
        path: 'user',
        element: lazyLoad(lazy(() => import('@/views/user'))),
      },
      {
        path: 'order',
        element: lazyLoad(lazy(() => import('@/views/order'))),
      },
      {
        path: 'immer',
        element: lazyLoad(lazy(() => import('@/views/immer'))),
      },
    ],
  },
])
