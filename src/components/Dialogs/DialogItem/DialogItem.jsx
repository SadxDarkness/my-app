import React from 'react';
import {NavLink} from 'react-router-dom';
import './dialogitem.css'
const DialogItem = (props) => {
    return (
        <div className="dialogItem">
            <div className="person">
            <NavLink to ={ "/dialogs/" + props.id}><div className="name">{props.name}</div></NavLink>
            </div>
        </div>
    );
};
export default DialogItem;