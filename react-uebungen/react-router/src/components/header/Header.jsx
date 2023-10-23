import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <NavLink to="/">Speisekarte</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
        <NavLink to="/opening">Öffnungszeiten</NavLink>
        <NavLink to="/galery">Galerie</NavLink>
      </nav>
    </header>
  );
};

export default Header;
