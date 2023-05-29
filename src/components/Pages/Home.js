import React from 'react'
import "./Pages.css";
import Herosection from './Herosection';
import About from './About';
import Team from './Team';
import Advertise from './Advertise';

const Home = () => {
  return (
    <div>
        <Herosection />
        <About />
        <Team />
        <Advertise />
    </div>
  )
}

export default Home