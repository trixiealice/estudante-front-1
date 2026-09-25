import './button.css';
import chatBubble from '../../assets/chatbubble.png'
import iconIr from '../../assets/forward.png'

export default function Button({ children, onClick }) {
  return (
    <button className="mais-bloom" onClick={onClick}>
      <img src= {chatBubble} alt="chat icon" className='icon-left'/>
      <span style={{ whiteSpace: 'nowrap'}}>
        Mais Bloom!
      </span>
      <img src={iconIr} alt="icon ir" className='icon-right' />
    </button>
  );
}
