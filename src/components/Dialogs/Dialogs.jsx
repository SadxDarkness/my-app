import React from "react";
import "./dialogs.css";
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
const Dialogs = (props) => {
    let dialogsElements =  props.dialogs.map( d => <DialogItem name = {d.name} id = {d.id}/>);
    let messagesElements = props.messages.map (m => <Message message = {m.message}/>);
    return (
        <div className="dialogs">
           <div className = "persons">
               {dialogsElements}
           </div>
           <div className = "correspondence">
               {messagesElements}
           </div>
        </div>
    );
};
export default Dialogs;