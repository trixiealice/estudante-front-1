import React, { useState } from 'react';
import './NavBar.css';

// Usando ícones em SVG puro para não precisar instalar bibliotecas externas
const icons = {
  bell: (
    <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-6v-5c0-3.07-1.64-5.64-4.5-6.32V4a1.5 1.5 0 0 0-3 0v.68C8.63 5.36 7 7.92 7 11v5l-2 2v1h14v-1l-2-2z"/>
    </svg>
  ),
  home: (
    <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  ),
  calendar: (
    <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm-5-7h5v5h-5z"/>
    </svg>
  ),
  book: (
    <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M12 11.55C11.2 10.32 9.81 9.5 8.25 9.5c-1.89 0-3.56.85-4.75 2.18l-1.3-1C3.65 9.04 5.79 8 8.25 8c2.11 0 3.97.77 5.46 2.04C15.2 8.77 17.06 8 19.17 8c2.46 0 4.6.14 6.05 2.68l-1.3 1c-1.19-1.33-2.86-2.18-4.75-2.18-1.56 0-2.95.82-3.75 2.05V21h-3.42v-9.45z"/>
    </svg>
  ),
  heart: (
    <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  )
};

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState(1); // Começa no Home (índice 1)

  const menuItems = [
    { id: 'alerts', icon: icons.bell },
    { id: 'home', icon: icons.home },
    { id: 'calendar', icon: icons.calendar },
    { id: 'book', icon: icons.book },
    { id: 'favorites', icon: icons.heart },
  ];

  return (
    <nav className="navigation" style={{ '--active-index': activeIndex }}>
      <ul>
        {/* O indicador invisível que cria o buraco/corte fluido */}
        <div className="indicator"></div>

        {menuItems.map((item, index) => (
          <li 
            key={item.id} 
            className={`list ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <a href={`#${item.id}`}>
              <span className="icon">{item.icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
