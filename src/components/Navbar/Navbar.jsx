import React from 'react';
import navs from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className={navs.nav}>
        <div className={navs.navItem}>
          <NavLink to={'/profile'} activeClassName={navs.active}>Profile</NavLink>
        </div>
        <div className={navs.navItem}>
          <NavLink to={'/dialogs'} activeClassName={navs.active}>Messages</NavLink>
        </div>
        <div className={navs.navItem}>
          <NavLink to={'/news'} activeClassName={navs.active}>News</NavLink>
        </div>
        <div className={navs.navItem}>
          <NavLink to='/music' activeClassName={navs.active}> Music</NavLink>
        </div>
        <div className={navs.navItem}>
          <NavLink to={'/settings'} activeClassName={navs.active}>Settings</NavLink>
        </div>
      </nav>
    )
}
export default Navbar;