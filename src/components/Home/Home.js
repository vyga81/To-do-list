import React from 'react';
import image from '../../Images/Port.jpg'

import './Home.css';

const Home = () => (
  <div className="Home" data-testid="Home">
    <img src={image} className='Home-background-img' alt='jpg' />
  </div>
);


export default Home;
