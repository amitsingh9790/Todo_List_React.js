import React from "react";

const ToDoLists = (props) =>{
    
    return(
    <>
        <div className="todo_style">
            <button 
            onClick={()=>{
                props.onSelect(props.id);
            }} 
            className="fa-time" style={{rotate:"45deg"}} >+</button>
            <li>{props.text}</li>
        </div>
    </>)
};

export default ToDoLists;
