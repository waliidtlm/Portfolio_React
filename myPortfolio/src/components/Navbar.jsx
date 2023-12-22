import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  const [expandNavBar, setExpandNavBar] = useState(false)

  const location = useLocation();
  useEffect(()=> {
    setExpandNavBar(false);
  }, [location])

  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={()=>{setExpandNavBar((prev)=> !prev)}}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/Projects"> Projects </Link>
        <Link to="/Experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar