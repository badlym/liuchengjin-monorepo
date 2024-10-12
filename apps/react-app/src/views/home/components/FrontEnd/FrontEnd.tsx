import { Button, Space } from 'antd'
import dayjs from 'dayjs'
import { observer } from 'mobx-react-lite'
import React, { useCallback, useMemo } from 'react'

import CustomTable from './components/Table'
import { buttonStyle, totalStyle } from './FrontEnd.css'
import styles from './index.module.less'

export enum HighlightLevelEnum {
  高相关性 = 1,
  中相关性 = 2,
  低相关性 = 3,
}

const FrontEnd = observer(() => {
  const { counterStore } = useMst()
  const setSyncCount = () => {
    counterStore.setSyncIncrement()
  }
  const setAsyncCount = () => {
    void counterStore.setAsyncIncrement()
  }
  const [isModalOpen, setIsModalOpen] = useState(false)
  const onButtonClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    console.log(event)
    counterStore.getMap()
  }, [])

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const logName = () => {
    // counterStore.logName();
  }
  const logInfo = () => {
    const values = Object.values(HighlightLevelEnum)
    console.log(values)
    counterStore.logInfo()
  }

  const calNum = (text) => {
    return counterStore.textArr.length
  }

  const textNum = calNum()

  const menoNum = useMemo(() => {
    console.log('textArr', counterStore.textArr)
    return counterStore.textArr.length
  }, [counterStore.textArr])

  const num = useMemo(() => {
    const value = 0
    return value + 1
  }, [counterStore.textArr])
  useEffect(() => {
    const fiveDaysAgo = dayjs().subtract(5, 'day').startOf('day').toDate()
    console.log(fiveDaysAgo)
  }, [])
  return (
    <div>
      <Space>
        <button className={buttonStyle} onClick={setSyncCount}>
          同步新增 is {counterStore.syncCount}
        </button>
        <button className={buttonStyle} onClick={setAsyncCount}>
          异步新增 is {counterStore.asyncCount}
        </button>
        <Button type={'primary'} onClick={showModal} className={'tw-ml-4 tw-bg-red-500'}>
          点击弹窗
        </Button>

        <Button type={'primary'} onClick={logName} className={'tw-ml-4'}>
          打印名字
        </Button>

        <Button type={'primary'} onClick={logInfo} className={'tw-ml-4'}>
          打印信息
        </Button>
        <Button
          type={'primary'}
          onClick={() => {
            // childStore2.logInfo();
            // childStore.logInfo();
          }}
          className={'tw-ml-4'}
        >
          bar打印信息
        </Button>
        <div className={'zgg-relative'}>
          <Button type={'primary'} onClick={onButtonClick} className={'tw-ml-4'}>
            打印map
          </Button>
        </div>

        <div>
          <a href="/template/案件上传模板.docx" download onClick={(e) => e.stopPropagation()}>
            下载模版
          </a>
          <img src="/img/banner.jpg" alt="" />
        </div>
      </Space>

      <div>{counterStore.addAge}年龄</div>
      <div className={totalStyle}>计算属性相加 is {counterStore.totalCount}</div>
      <div>数字 {num}</div>
      <div>测试数字 {textNum}</div>
      <div>
        监听mst数组得到的数字
        {menoNum}
        {JSON.stringify(counterStore.textArr)}
      </div>
      <h1 className={'  mt-20px prose prose-red '}>文字预设</h1>
      <div>
        <CustomTable></CustomTable>
      </div>
      <div className={styles.parent}>
        <div className={styles.child}></div>
      </div>
    </div>
  )
})
export default FrontEnd
