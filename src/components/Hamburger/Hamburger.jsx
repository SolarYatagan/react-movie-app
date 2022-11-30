import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './hamburger.css'
import hamburgerMenu from '../../icons/menu.png'

const Hamburger = () => {
  let menuRef = useRef();

  const [openHamburger, setHamburger] = useState(false)

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setHamburger(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    },[])
    
  return (
    <div ref={menuRef}>
      <img
        src={hamburgerMenu}
        alt="hamburgerMenu"
        className="hamburger"
        onClick={() => setHamburger(!openHamburger)}
      ></img>
      <div className={openHamburger ? "showMenu" : "hideMenu"}>
      <ul className='menu'>
        <li><a href="#Profile">Profile</a></li>
        <li><a href="#Watched">Watched films</a></li>
        <li><a href="#Want">Want to watch</a></li>
      </ul>
      </div>
    </div>
  );
}

export default Hamburger