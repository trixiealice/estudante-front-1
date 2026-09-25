import LiquidGlass from 'liquid-glass-react'
import './hello.css'
import PaisagemCard from '../../assets/paisagemcard.png'
import FolhaIcon from '../../assets/folha.png'

function HelloCard({ nome = 'Manoel' }) {
  return (
    <LiquidGlass
      cornerRadius={24}
      padding="24px 60px"
      blurAmount={0.04}
      saturation={130}
      overLight={true}
      className="greeting-card"
    >
      <div className="hello-card__info">
        <img src={FolhaIcon} alt="Folha" className="hello-card__icon" />
        <div>
          <h2 className="hello-card__title">Eai {nome}, tranquilo?</h2>
          <p className="hello-card__subtitle">Vamos cuidar de você hoje?</p>
        </div>
      </div>

      <img src={PaisagemCard} alt="Paisagem" className="hello-card__image" />
    </LiquidGlass>
  )
}


export default HelloCard