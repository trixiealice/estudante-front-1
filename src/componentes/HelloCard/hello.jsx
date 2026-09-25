import './hello.css'
import FolhaIcon from '../../assets/folha.png'

function HelloCard({ nome = 'Manoel' }) {
  return (
    <div className='helloDiv liquid'>
      <img src= {FolhaIcon} alt="folha icon" />
      <div className='div-textos'>
        <span className='ola-usuario'>Eai Manoel, tranquilo?</span>
        <span className='subtitulo'>Vamos cuidar de você hoje?</span>
      </div>

    </div>
  
  )
}


export default HelloCard

