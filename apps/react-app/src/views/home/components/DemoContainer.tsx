import { FC } from 'react'

import FrontEnd from '@/views/home/components/FrontEnd'
import User from '@/views/home/components/User'

const DemoContainer: FC<{
  menuKey: string
}> = (props) => {
  switch (props.menuKey) {
    case 'front-end':
      return <FrontEnd />
    case 'user':
      return <User />
    default:
      return <div>暂无内容</div>
  }
}
export default DemoContainer
