import React from 'react'
import ReactDOM from 'react-dom/client'
import { Rutas } from './components/Rutas'
import App from './App'
import { HashRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
    <Rutas/>
    </HashRouter>
    
  </React.StrictMode>,
)
