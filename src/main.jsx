import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n/config.js'
import App from './App.jsx'
import './index.css'

// Aguarda a inicialização do i18n antes de renderizar o app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
