import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ebook from './Ebook.jsx'

const isEbookPage = window.location.pathname === '/ebook'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isEbookPage ? <Ebook /> : <App />}
  </StrictMode>,
)