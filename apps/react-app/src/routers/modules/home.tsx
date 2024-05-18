import type { RouteObject } from '@/routers/interface'
import Home from '@/views/home/index'

// 首页模块
const homeRouter: Array<RouteObject> = [
  {
    path: '/home',
    element: <Home />,
  },
]

export default homeRouter
