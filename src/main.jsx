import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/index.css'
import Home from './components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
