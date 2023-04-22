import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  
  const transitionNavBar = ()=>{
    if (window.scrollY > 100){
      handleShow(true)
    }else{
      handleShow(false)
    }
  }
  
  useEffect(() => {
      window.addEventListener('scroll', transitionNavBar);
      return ()=> window.removeEventListener("scroll", transitionNavBar)
    }, []); 
    
  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
    
        <Link to='/'>
          <img className='nav__logo' src={require('./Assets/Logo.png')} alt='Netflix Logo' />
        </Link>
        <Link to='/profile'>
          <img onClick={()=> navigate('/profile')} className='nav__avatar' src={require('./Assets/avatarOne.png')} alt='Netflix Logo' />
        </Link>  
        </div>
    </div>
  );
}

export default Nav;