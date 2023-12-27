import { FC } from 'react'

import FrontEnd from '@/views/home/components/FrontEnd'
import Order from '@/views/home/components/Order'
import Terrain from '@/views/home/components/Terrain'
import User from '@/views/home/components/User'

const DemoContainer: FC<{
  menuKey: string
}> = (props) => {
  switch (props.menuKey) {
    case 'front-end':
      return <FrontEnd />
    case 'user':
      return <User />
    case 'order':
      return <Order />
    case 'three':
      return <Terrain />
    default:
      return <div>暂无内容</div>
  }
}
export default DemoContainer
