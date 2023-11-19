import React, { useState } from "react";
import "./App.css";
import ToDoLists from "./ToDoLists";

const App = () =>{
  const [inputList,setInputList] = useState("");
  const [Items,setItems] = useState([]);
  const changeEventHandler = (event) =>{
      setInputList(event.target.value);
  };

  const listofItems = () =>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    });
    setInputList('');
  }
  const deleteItems = (id) =>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index) => {
        return index !==id;
      })
    })
}

  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type="text" placeholder="Add a Items"
           value={inputList}
           onChange={changeEventHandler} />
          <button onClick={listofItems}> + </button>

          <ol>
            {Items.map((itemval,index) => {
              return( 
              <ToDoLists
              key={index}
              id={index}
              text={itemval}
              onSelect={deleteItems} />
              );
            })}
          </ol>

        </div>
      </div>
    </>
  );
};
export default App;