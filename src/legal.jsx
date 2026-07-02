import React from 'react'
import ReactDOM from 'react-dom/client'
import LegalPage from './LegalPage'
import './styles.css'
import './legal.css'

const page = window.location.pathname.toLowerCase().includes('privacy') ? 'privacy' : 'terms'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LegalPage page={page} />
  </React.StrictMode>,
)
