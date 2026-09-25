import './button.css';

export default function Button({ children, onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>
      Mais Bloom!
    </button>
  );
}
