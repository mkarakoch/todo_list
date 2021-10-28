import React,{useState} from "react";
import ToDoItem from "./ToDoItem";

function App() {

  
  const [inputText, setinputText] = useState("")
  const [items, setItems] = useState([]);
  

  function handleChange(e) {
    const newValue = e.target.value
    console.log(newValue)
    setinputText(newValue)
  }

  function addItem() {
    setItems(prevValue => {
      return [ ...prevValue, inputText] }
    )
    // this is to clear textBox after add the list 
    setinputText("")
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
           />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
            items.map((todoItem) => {
              return <ToDoItem text={todoItem }/>
            
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
