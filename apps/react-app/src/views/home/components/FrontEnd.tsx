import { observer } from 'mobx-react-lite'

import { buttonStyle, totalStyle } from './FrontEnd.css'
import { useMst } from '@/store'

const FrontEnd = observer(() => {
  const { counterStore } = useMst()
  const setSyncCount = () => {
    counterStore.setSyncIncrement()
  }
  const setAsyncCount = () => {
    void counterStore.setAsyncIncrement()
  }

  return (
    <div>
      <button className={buttonStyle} onClick={setSyncCount}>
        同步新增 is
        {' '}
        {counterStore.syncCount}
      </button>
      <button className={buttonStyle} onClick={setAsyncCount}>
        异步新增 is
        {' '}
        {counterStore.asyncCount}
      </button>
      <div className={totalStyle}>
        计算属性相加 is
        {counterStore.totalCount}
      </div>
    </div>
  )
})
export default FrontEnd
