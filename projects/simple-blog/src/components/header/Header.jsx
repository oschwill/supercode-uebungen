import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>My Life</h1>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
    </header>
  );
};

export default Header;
