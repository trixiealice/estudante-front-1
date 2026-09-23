import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloCard from './componentes/HelloCard/hello'
import NavBar from './componentes/NavBar/NavBar'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <NavBar /> 
    <HelloCard />
  </StrictMode>,
)
