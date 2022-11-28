import * as React from 'react'

import {enableLegendStateReact} from '@legendapp/state/react'
import ReactDOM from 'react-dom/client'

import {Routes} from './routes'

import './index.css'

enableLegendStateReact()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
