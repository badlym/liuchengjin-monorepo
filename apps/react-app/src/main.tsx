import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider, rootStore } from '@/store'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
