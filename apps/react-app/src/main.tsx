// import * as button from 'src/style/global/button.css'
import { button } from '@/style/global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './design'
import './index.css'

console.log(button)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider value={rootStore}>
    <App />
  </Provider>,
)
