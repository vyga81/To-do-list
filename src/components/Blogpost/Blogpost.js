import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import image from '../../Images/mountains.png'
import './Blogpost.css';

const Blogpost = () => (
  <div className='Blogpost_background' style={{
    backgroundImage: `url(${image})`, alt: 'jpg', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }}>

    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to="/Blogpost/Blog">Blog</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link link-success" to="/Blogpost/Travel" >Travel
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link link-warning" to="/Blogpost/How to">How to</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);


export default Blogpost;
