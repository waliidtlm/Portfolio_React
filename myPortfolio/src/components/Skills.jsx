import React from 'react'
import "../styles/Skills.css"
import {faScrewdriverWrench, faCode, faFaceSmileBeam} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Skills() {
  return (
    <div className='Section'>

      <h3>Get to know</h3>
      <h2 className="h2-title"> About <span>Me</span> </h2>

      <div className="about-container">

        
        <div className="description">
            <h2>Hello! </h2>
            <p> I'm Walid Tlemçani, a passionate full-stack developer with a love for creating innovative solutions. I possess the ability to quickly grasp new concepts, always eager to embrace new challenges and experiences. When I'm not immersed in the world of coding, you can find me unwinding with video games, cherishing moments with family and friends, and exploring the beauty of different places through my love for travel. Let's build something incredible together!" <br /> <br /> Feel free to reach out! <FontAwesomeIcon icon={faFaceSmileBeam} size="xl"/></p>  
            
        </div>


       
        <div className="skills">
            
        <h2>Stack Tech <FontAwesomeIcon icon={faCode} /> </h2>

        <button type="button" className="btn btn-light">JavaScript</button>
        <button type="button" className="btn btn-light">ExpressJS</button>
        <button type="button" className="btn btn-light">MongoDB</button>
        <button type="button" className="btn btn-light">ReactJS</button>
        <button type="button" className="btn btn-light">NodeJS</button>
        <button type="button" className="btn btn-light">CSS</button>
        <button type="button" className="btn btn-light">Bootstrap</button>
        <button type="button" className="btn btn-light">Redux ToolKit</button>
        </div>
        <div className="skills">
            
        <h2>Tools <FontAwesomeIcon icon={faScrewdriverWrench} /></h2>

        <button type="button" className="btn btn-light">GIT</button>
        <button type="button" className="btn btn-light">Postman</button>
        <button type="button" className="btn btn-light">VScode</button>
        <button type="button" className="btn btn-light">Canva</button>
        <button type="button" className="btn btn-light">Jira</button>
       
        </div>

        
        </div>
      
    </div>
  );
}

export default Skills