import React from 'react';
import "./content.css";
import Profile from "../Profile/Profile.jsx"
import Dialogs from '../Dialogs/Dialogs';
const Content = () => {
    return (
        <div className = "content">
            <Profile />
            <Dialogs age = "24"/>
        </div>
        
    );
};
export default Content;