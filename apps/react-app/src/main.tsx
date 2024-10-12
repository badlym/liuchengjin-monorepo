// import * as button from 'src/style/global/button.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import '../app/globals.css'
import './design'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider value={rootStore}>
    <App />
  </Provider>,
)
