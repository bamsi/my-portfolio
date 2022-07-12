import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClickHandler = () => setIsOpen(!isOpen);

  return (
    <nav className="nav-container">
      <ul className="menu-list">
        <li>Menu 1</li>
      </ul>
      <div
        className={isOpen ? 'hamburger-menu open' : 'hamburger-menu'}
        onClick={menuClickHandler}
        onKeyUp={menuClickHandler}
        role="button"
        tabIndex="0"
        aria-label="Hamburger"
      >
        <div className="menu-btn-burger" />
      </div>
    </nav>
  );
};
export default Navbar;
