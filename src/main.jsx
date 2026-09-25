import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Button from './componentes/Button/button'
import HelloCard from './componentes/HelloCard/hello.jsx'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloCard/>
    <Button />
  </StrictMode>,
)
