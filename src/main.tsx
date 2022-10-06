import {Routes} from './routes'
import * as React from 'react'
import ReactDOM from 'react-dom/client'
import {enableLegendStateReact} from '@legendapp/state/react'

import './index.css'

enableLegendStateReact()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
