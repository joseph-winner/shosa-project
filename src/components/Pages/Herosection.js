import React from 'react';
import "./Pages.css";
import Heroimg from "../Images/cover-shosa.png"


const Herosection = () => {
  return (
        <>
        {/*   HERO SECTION */}
        <div className='hero-image-wrapper'>
          <img className='hero-img' src={Heroimg} alt='Hero Img' />
          <div className='hero-content-wrapper'>
            <p>
              As a member of SHOSA, you are an essential part of our institution's history and legacy, and we take great pride in your accomplishments. We hope that this website will serve as a hub for you to stay connected with one another, share your experiences and achievements, and continue to be an active member of our community. So come on in and explore what we have to offer - we can't wait to see what you'll accomplish next!
            </p>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
              </span>
              <span className="button-text">Learn More</span>
          </button>
          </div>
        </div>
        {/*   HERO SECTION */}
        </>
  )
}

export default Herosection