import React, { useEffect, useState } from 'react'
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = ()=>{
    if (window.scrollY > 100){
      handleShow(true)
    }else{
      handleShow(false)
    }
  }
  useEffect(() => {
      window.addEventListener('scroll', transitionNavBar);
      return ()=> window.removeEventListener("scrool", transitionNavBar)
    }
  )
  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
            <img className='nav__logo' src={ require('./Assets/Logo.png')} alt='Netflix Logo' />
            <img className='nav__avatar' src={ require('./Assets/avatarOne.png')} alt='Netflix Logo' />
        </div>
    </div>
  )
}

export default Nav;