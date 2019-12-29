import React from 'react';
import logo from './pngfuel.png';
import s from'./header.module.css';

const Header = () => {
    return <header className={s.header}>
       
        <img src={logo} alt="Smiley dog" height="64"></img>
        
    </header>
}
export default Header;