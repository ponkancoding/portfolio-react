import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.scss'

createRoot(document.getElementsByTagName('body')[0]!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
