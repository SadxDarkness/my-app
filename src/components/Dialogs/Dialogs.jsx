import React from "react";
import "./dialogs.css";
import {NavLink} from "react-router-dom";
const DialogItem = (props) => {
    return (
        <div className="dialogItem">
            <div className="person">
            <NavLink to ={ "/dialogs/" + props.id}><div className="name">{props.name}</div></NavLink>
            </div>
        </div>
    );
};
const Message = (props) => {
    return (
        <div className="message">
            {props.message}
        </div>
    );
};
const Dialogs = () => {
    let dialogs = [
    {id: 1, name: "Vadim"},
    {id: 2, name: "Alexey"}, 
    {id: 3 , name: "Daniil"},
    {id: 4,name: "Ivan"}
    ];
    let messages = [
    {message: "Hi"},
    {message: "yooo"}, 
    {message: "U ok?"},
    {message: "Privet"}
        ];
    let dialogsElements =  dialogs.map( d => <DialogItem name = {d.name} id = {d.id}/>);
    let messagesElements = messages.map (m => <Message message = {m.message}/>);

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