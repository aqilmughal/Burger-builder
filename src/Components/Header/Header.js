import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='Header'>
        <div className='b-header'>
            <img src="https://react-builder-burger.firebaseapp.com/static/media/burger-logo.b8503d26.png" alt=""></img> 
        </div>
        <div className='l-header'>
            <a className='builder1'active href='/'>Burger Builder </a>
            <a className='builder' href='/login'>Login</a>
        </div>
    </div>
    
    
  )
}

export default Header