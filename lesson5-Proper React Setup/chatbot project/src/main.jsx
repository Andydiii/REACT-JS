import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // strictmode gave us addinitonal checks and warnings
  <StrictMode>
    <App />
  </StrictMode>,
)
