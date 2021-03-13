import React from 'react';
import "./content.css";
import Profile from "../Profile/Profile.jsx"
import Dialogs from '../Dialogs/Dialogs';
const Content = () => {
    return (
        <div className = "content">
            {/*<Profile />*/}
            <Dialogs/>
        </div>
        
    );
};
export default Content;