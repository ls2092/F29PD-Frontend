import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

