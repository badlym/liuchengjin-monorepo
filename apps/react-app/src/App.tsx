// @ts-ignore
import { observer } from 'mobx-react-lite'

// @ts-ignore
import { buttonStyle, totalStyle } from '@/App.css.ts'
import { useMst } from '@/store'

import reactLogo from './assets/react.svg'

// eslint-disable-next-line import/no-unresolved
import viteLogo from '/vite.svg'

import './App.css'

const App = observer(() => {
  const { counterStore } = useMst()

  const setSyncCount = () => {
    counterStore.setSyncIncrement()
  }
  const setAsyncCount = () => {
    void counterStore.setAsyncIncrement()
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button className={buttonStyle} onClick={setSyncCount}>
          同步新增 is {counterStore.syncCount}
        </button>
        <button className={buttonStyle} style={{ marginLeft: '20px' }} onClick={setAsyncCount}>
          异步新增 is {counterStore.asyncCount}
        </button>
        <div className={totalStyle}>计算属性相加 is {counterStore.totalCount}</div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
})

export default App
