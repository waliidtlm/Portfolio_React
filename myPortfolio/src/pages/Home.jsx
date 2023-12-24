import React from 'react';
import "../styles/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faWhatsapp, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import { TypeAnimation } from 'react-type-animation';





function Home() {
  return (
    <>
      <div className="home">
        <div className="about">
          <h2>
            Hi, I'm{" "}
            <span>
              <TypeAnimation
                sequence={["Walid Tlemçani", 1000]}
                wrapper="span"
                speed={150}
                repeat={Infinity}
              />
            </span>
          </h2>
          <p>A Full Stack Developer</p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/walidtlm/"
              target="_blank"
              rel="noopener noreferrer"
              className="Linkedin"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2xl"
                style={{ color: "#ffffff" }}
              />
            </a>
            <a
              href="https://wa.me/+212700735383"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2xl"
                style={{ color: "#ffffff" }}
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009124528310"
              target="_blank"
              rel="noopener noreferrer"
              className="messenger"
            >
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                size="2xl"
                style={{ color: "#ffffff" }}
              />
            </a>
            <a href="mailto:tlemcani.waliid@gmail.com" className="email">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2xl"
                style={{ color: "#ffffff" }}
              />
            </a>
          </div>

          <div className="btn-container">
            <a href="#Contact">
              <button type="Submit" className="button-1">
                Let's Talk
              </button>
            </a>
            <button type="Submit" className="button-2">
              My Journey
            </button>
          </div>
        </div>
      </div>

      <Skills />
      <Contact />
    </>
  );
}

export default Home