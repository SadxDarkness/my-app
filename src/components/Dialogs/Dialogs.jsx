import React from "react";
import Person from "../Person/Person.jsx";
import "./dialogs.css";
const Dialogs = (props) => {
    console.log (props);
    return (
        <div className="dialogs">
           <div className = "persons">
            <Person name = "John"/>
            <Person name = "Mary"/>
            <Person name = "Vadim"/>
            <Person name = "Kirill"/>
           </div>
           <div className = "correspondence"></div>
        </div>
    );
};
export default Dialogs;