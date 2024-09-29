import type { FC } from 'react'

import FrontEnd from '@/views/home/components/FrontEnd/FrontEnd'
import Order from '@/views/home/components/Order'
import SiderDemo from '@/views/home/components/SiderDemo'
import User from '@/views/home/components/User'
import Konva from '@/views/home/components/konva'

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
      return <SiderDemo />
    // return <Terrain />;
    case 'tinymce':
      break
    // return <TinyMce />;
    case 'konva':
      return <Konva />

    default:
      return <div>暂无内容</div>
  }
}
export default DemoContainer
