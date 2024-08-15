// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import './Navbar.css';
import Login from '../Login/Login';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <nav className={`nav ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="Logo" className="logo" />
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li key="home"><Link to="/">Home</Link></li>
          <li key="overview"><Link to="/overview">Overview</Link></li>
          <li key="about"><Link to="/about">About</Link></li>
          <li key="contact"><Link to="/contact">Contact</Link></li>
          <li key="join">
            <button className="btn" onClick={toggleLogin}>Join</button>
          </li>
          <li key="premium">
            <button className="btn">Premium</button>
          </li>
        </ul>
        <img src={menu} alt="Menu Icon" className="menu" onClick={toggleMenu} />
      </nav>
      {showLogin && <Login closeModal={toggleLogin} />}
    </>
  );
};

export default Navbar;
