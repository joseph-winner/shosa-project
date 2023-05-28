import React from 'react'
import "./Pages.css"
import Missionphoto from "../Images/mision.png"
import visionphoto from "../Images/vsion3.png"
import objectivephoto from '../Images/objective2.png'


const Mission = () =>{
  return(
    <div className='main-mission-container'>
      <div className='vision-section mission-component'>
        <h3>Our Vision</h3>
        <div className='vision-content mission-row'>
          <img src={visionphoto} alt='SHOSA Vision' />
          <p className='vision-desc'>
            Envisioning a vibrant community where SHOSA members inspire, empower, and uplift one another to reach new heights and
            Creating a legacy of lifelong connections, professional growth, shared success stories among SHOSA members worldwide.
          </p>
        </div>
      </div>

      <div className='mision-section mission-component'>
        <h3>Our Mission</h3>
        <div className='mision-content mission-row'>
          <img src={Missionphoto} alt='SHOSA Mission' />
          <p className='mission-desc'>
            Empowering SHOSA Members to thrive by providing a dynamic online platform for networking, collaboration, and personal growth. Our mission is to foster a sense of belonging, inspire lifelong learning, and celebrate the achievements of our esteemed SHOSA community. Join us as we create lasting connections and support each other's professional journeys.
          </p>
        </div>
      </div>
      

      <div className='objective-section mission-component'>
        <h3>Our Objective</h3>
        <div className='objective-content mission-row'>
          <img src={objectivephoto} alt='SHOSA Objective' />
            <ul className='objective-desc'>
              <li>Forge meaningful connections: Connect SHOSA members across generations, fostering a supportive network for mentorship and collaboration.</li>
              <li>Organize engaging events: Host reunions, social gatherings, and online meet-ups to foster camaraderie and strengthen SHOSA Members bonds.</li>
              <li>Amplify SHOSA voice: Provide a platform for SHOSA to share their insights, perspectives, and experiences with the broader community.</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
const Quicklinks = () =>{
  return(
    <>
    <h1>Quick Links</h1>
    </>
  )
}
const Events = () =>{
  return(
    <>
    <h1>Links</h1>
    </>
  )
}
const Aboutus = () =>{
  return(
    <>
    <h1>About</h1>
    </>
  )
}




const About = () => {
  return (
    <>
    <Mission />
    <Aboutus />
    <Events />
    <Quicklinks />
    </>
  )
}

export default About