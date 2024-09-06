import { test } from 'demo/src/demo'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './design'
import './index.css'

import { callSaasApi } from 'clib/callApi'

console.log(callSaasApi)
console.log(test())
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider value={rootStore}>
    <App />
  </Provider>,
)
