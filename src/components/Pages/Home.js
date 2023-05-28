import React from 'react'
import "./Pages.css";
import Herosection from './Herosection';
import About from './About';

const Home = () => {
  return (
    <div>
        <Herosection />
        <About />
    </div>
  )
}

export default Home