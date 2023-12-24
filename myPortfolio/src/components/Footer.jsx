import React from 'react';
import "../styles/Footer.css"
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  return (


    <div className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by Walid Tlemçani | All Rights Reserved.</p>
      </div>
      <div className="footer-iconTop">
        <a href="#"><FontAwesomeIcon icon={faArrowUp} style={{color: "#ededed",}} /></a>
      </div>
    </div>

    
  )
}

export default Footer