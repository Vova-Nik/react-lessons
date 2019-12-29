import React from 'react';
// import logo from './pngfuel.png';
import s from './navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
    <div><a className={`${s.nav_ref} ${s.active}`} href="https://learn.javascript.ru/arrow-functions">Profile</a> </div>
    <div><a className={s.nav_ref} href="https://learn.javascript.ru/arrow-functions">Thomething</a> </div>
    <div><a className={s.nav_ref} href="https://learn.javascript.ru/arrow-functions">Thomething</a> </div>
    <div><a className={s.nav_ref} href="https://www.youtube.com/watch?v=00ZNuBIE-pM&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=12">Settings</a> </div>
    <p>gitk --all</p>
   
  </nav>
}
export default Navbar;