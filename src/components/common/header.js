import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div id="app" className="container">
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          Yummy Recipes
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link js-scroll-trigger">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className="nav-link js-scroll-trigger">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Register" className="nav-link js-scroll-trigger">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
