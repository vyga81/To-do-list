import React from 'react';

import './Header.css';
import { Link } from "react-router-dom"

const Header = () => (
  <nav className="navbar navbar-expand-lg custom-bg">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button><img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"></img>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/Greeter">Greeter</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Calculator">Calculator</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Home">Home</Link>

          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Blogpost">Blogpost</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Todo">Todo</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);



export default Header;
