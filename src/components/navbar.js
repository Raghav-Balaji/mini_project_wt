import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '60px',
    backgroundColor: '#161813', // Dark background
    zIndex: 10,
  };

  const linksContainerStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    padding: 0,
    margin: 0,
  };

  const linkItemStyles = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '25px',
    fontWeight: '100',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  };

  const logoStyles = {
    width: '30px',
    height: '30px',
  };

  return (
    <nav style={navbarStyles}>
      <ul style={linksContainerStyles}>
      <li className="link-item">
          <Link to="#hero-section" style={linkItemStyles}>
            <img src="img/logo.png" className="logo" alt="logo" style={logoStyles} />
          </Link> {/* Logo link */}
        </li>
        <li className="link-item">
          <Link to="/" style={linkItemStyles}>Travels</Link> {/* Link to home or main page */}
        </li>
        <li className="link-item">
          <Link to="/activities" style={linkItemStyles}>Acitivities</Link> {/* Link to explore section */}
        </li>
        <li className="link-item">
          <Link to="/itinerary" style={linkItemStyles}>Itinerary Planner</Link> {/* Link to Itinerary page */}
        </li>
        <li className="link-item">
          <Link to="/testimonials" style={linkItemStyles}>Testimonials</Link> {/* Link to Testimonials page */}
        </li>
        <li className="link-item">
          <Link to="/login" style={linkItemStyles}>Login</Link> {/* Link to Login page */}
        </li>
        <li className="link-item">
          <Link to="/about" style={linkItemStyles}>About us</Link> {/* Link to About Us page */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
