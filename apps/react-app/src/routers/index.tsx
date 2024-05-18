import { Navigate, useRoutes } from 'react-router-dom'

import type { RouteObject } from '@/routers/interface'

// * 导入所有router
const metaRouters = import.meta.glob('./modules/*.tsx', { eager: true })

// * 处理路由

export const routerArray: RouteObject[] = []
Object.keys(metaRouters).forEach((item) => {
  // @ts-expect-error
  Object.keys(metaRouters[item]).forEach((key: any) => {
    // @ts-expect-error
    routerArray.push(...metaRouters[item][key])
  })
})

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },

  ...routerArray,
]

function Router() {
  // @ts-expect-error
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
