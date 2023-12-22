import React from 'react';
import "../styles/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faWhatsapp, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Skills from "../components/Skills"
import Contact from "../components/Contact"




function Home() {
  return (
    <>
    <div className="home">
      <div className='about'>
        <h2> 
          Hi, I'm <span>Walid Tlemçani</span>
        </h2>
        <p>A Full Stack Developer</p>
        <div className='social-media'>
        <FontAwesomeIcon icon={faLinkedin} size='2xl'  style={{color: "#ffffff",}}  />
        <FontAwesomeIcon icon={faWhatsapp} size='2xl' style={{color: "#ffffff",}} />
        <FontAwesomeIcon icon={faFacebookMessenger} size='2xl' style={{color: "#ffffff",}} />
        <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#ffffff",}} />
        </div>
      </div>
     
    
    </div>

    
    <Skills/>
    <Contact/>
    
    </>
  );
}

export default Home