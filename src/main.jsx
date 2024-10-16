import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Products from './product/Products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Products />
  </StrictMode>,
)
