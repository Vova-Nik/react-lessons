import React from 'react';
// import logo from './pngfuel.png';
import s from './navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/profile">Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/dialogs">Dialogs</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/settings">Settings</NavLink>
      </div>

      <div className={s.item}>
        <a href="https://www.youtube.com/watch?v=00ZNuBIE-pM&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=12">React Kabzda</a>
      </div>
      <div className={s.item}>
         <p>gitk --all</p>
      </div>

    </nav>
  )

};

export default Navbar;