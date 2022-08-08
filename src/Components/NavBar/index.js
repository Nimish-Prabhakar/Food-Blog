import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './NavBar.css';

function NavBar() {
  let activeStyle = {
    color: '#80c000',
    borderBottom: '1px solid black',
  };

  return (
    <div className="NavBarContainer">
      <p className="organicBomb">Number One Meals</p>
      <nav className="navLinkWrapper">
        <NavLink
          className="navLinks"
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          className="navLinks"
          to="/blogs"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Blog
        </NavLink>
        <NavLink
          className="navLinks"
          to="/recepies"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Recepie
        </NavLink>
        <NavLink
          className="navLinks"
          to="/deserts"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Deserts
        </NavLink>
        <NavLink
          className="navLinks"
          to="/drinks"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Drinks
        </NavLink>
        <NavLink
          className="navLinks"
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About Us
        </NavLink>
      </nav>
      <div className="search">
        <input className="searchInput" placeholder="Search..." />
      </div>
    </div>
  );
}

export default NavBar;
