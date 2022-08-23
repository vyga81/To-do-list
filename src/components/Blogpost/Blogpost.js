import React from 'react';

import './Blogpost.css';

const Blogpost = () => (
  <div >
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active link-primary" aria-current="page" href="#">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link-success" href="#">Travel
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link link-warning" href="#">How to</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link-info" href="#">?</a>
      </li>
    </ul>
  </div>
);



export default Blogpost;
