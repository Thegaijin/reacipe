import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-inverse navbar-fixed-top menu">
          <ul className="menu">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/roster">Categories</Link>
            </li>
            <li>
              <Link to="/schedule">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
