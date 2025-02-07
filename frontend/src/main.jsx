import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'



//browser router allows routing by /
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  
      <App />
    </BrowserRouter>
  </StrictMode>,
)
