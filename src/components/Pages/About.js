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
      <div className='quick-links-section'>
        <div className='user-account quick-link'>
          <i className='fa fa-user'></i> <p>Register User Account</p>
        </div>

        <div className='user-account quick-link'>
          <i className='fa fa-plus-circle'></i> <p>Sell Something</p>
        </div>


        <div className='user-account quick-link'>
          <i className='fa fa-bullhorn'></i> <p>Join Our Community</p>
        </div>

        <div className='user-account quick-link'>
          <i className='fa fa-sign-in'></i> <p>Login to Account</p>
        </div>


      </div>
    </>
  )
}
const Events = () =>{
  return(
    <>
      <div className='events-sect'>
      <div className='events-section'>
        <div className='event-date'>
          <span className='event-month'>July</span>
          <span className='event-dater'>08</span>
        </div>
        <div className='event-desc'>
          <p>Annual School Visit</p>
          <p>Standard High School Igorora</p>
        </div>
      </div>
      
      <div className='events-section'>
        <div className='event-date'>
          <span className='event-month'>Nov</span>
          <span className='event-dater'>10</span>
        </div>
        <div className='event-desc'>
          <p>Annual General Meeting</p>
          <p>Online SHOSA Platform</p>
        </div>
      </div>
      </div>
    </>
  )
}
const Aboutus = () =>{
  return(
    <>
      <div className='about-us-items'>
        <h3>A Few Words About SHOSA</h3>
        <p>
          Welcome to our SHOSA website! Our mission is to foster a vibrant community 
          of SHOSA who continue to make an impact long after their time at Standard High School. 
          We are dedicated to providing resources and opportunities for SHOSA members to stay connected, 
          share their experiences, and support each other in their personal and professional lives. 
          Join us in our mission to make a difference in the world!
          <span className='about-join-btn'>Join Now</span>
        </p>
      </div>
    </>
  )
}




const About = () => {
  return (
    <>
      <Mission />
      <div className='about-flex-items'>
        <Aboutus />
        <Events />
        <Quicklinks />
      </div>
    </>
  )
}

export default About