import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import {dataContext} from '../../store/Data'
import './Navbar.css';
import trust_logo from '../../assets/Trust-logo.svg';

const Navbar = () => {
  // const location = useLocation();
  //   const { isAuth } = useContext(dataContext);

  const homeStyle = {
    position: location.pathname === '/' ? 'absolute' : 'relative',
  }

  return (
    <nav style={homeStyle} className="navbar">
      {/* Mobile Sidebar - Hidden Checkbox */}
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />

      {/* Hamburger Icon */}
      <label className="hamburger" htmlFor="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>

      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={trust_logo} alt="Tryst IIT Delhi Logo" />
          <div className='navbar-logo-title-name'>HIMALAYAN VIDYA DAAN TRUST</div>
        </Link>

      </div>
      <div className="mobile-login">
        <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
          Login ›
        </Link>
      </div>

      {/* Desktop Navbar */}
      <ul className="navbar-menu">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>Recent</Link></li>
        <li><Link to="/teaching" className={location.pathname === '/teaching' ? 'active' : ''}>Slot Coordinators</Link></li>
        <li><Link to="/for-students" className={location.pathname === '/for-students' ? 'active' : ''}>Brochure</Link></li>
        <li><Link to="/trustees" className={location.pathname === '/trustees' ? 'active' : ''}>Reports</Link></li>
        <li className='login-button-navbar-me'>
          <Link to="/login" className={location.pathname === '/login' ? 'active' : ''} >
            Login ›
          </Link>
        </li>

        {/* Show Profile if user is logged in, otherwise show Login */}
        {/* {isAuth ? (
          <li><Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Profile</Link></li>
        ) : (
          <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link></li>
        )} */}
      </ul>



      {/* Sidebar Navigation for Mobile */}
      <div className="sidebar">
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => document.getElementById("menu-toggle").checked = false}>Home</Link></li>
          <li><Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''} onClick={() => document.getElementById("menu-toggle").checked = false}>Recent</Link></li>
          <li><Link to="/teaching" className={location.pathname === '/teaching' ? 'active' : ''} onClick={() => document.getElementById("menu-toggle").checked = false}>Slot Coordinators</Link></li>
          <li><Link to="/for-students" className={location.pathname === '/for-students' ? 'active' : ''} onClick={() => document.getElementById("menu-toggle").checked = false}>Brochure</Link></li>
          <li><Link to="/downloads" className={location.pathname === '/downloads' ? 'active' : ''} onClick={() => document.getElementById("menu-toggle").checked = false}>Reports</Link></li>
          {/* Show Profile if user is logged in, otherwise show Login */}
          {/* {isAuth ? (
            <li><Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''} onClick={() => document.getElementById("menu-toggle").checked = false}>Profile</Link></li>
          ) : (
            <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''} onClick={() => document.getElementById("menu-toggle").checked = false}>Login</Link></li>
          )} */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
