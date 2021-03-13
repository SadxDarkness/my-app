import React from 'react';
import { NavLink } from 'react-router-dom';
import "./menu.css"
const Menu = () => {
    return (
        <div className = "menu">
          <ul>
            <NavLink to="/profile"><li>Profile</li></NavLink>
            <NavLink to=""><li>News</li></NavLink>
            <NavLink to="/dialogs"><li>Messages</li></NavLink>
            <NavLink to=""><li>Music</li></NavLink>
            <NavLink to=""><li>Settings</li></NavLink>
          </ul>
          </div> 
    );
};
export default Menu; 