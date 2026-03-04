import {useState} from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function addTodo(event)
  {
    event.preventDefault();

    if(inputValue.trim() === "") return;

    setTodos([...todos, inputValue]);

    setInputValue("");
  }
  return (
    <>
      <h1>To Do List</h1>
      
      {/* Form handles submit (Enter key or button click) */}
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          value={inputValue}        // Controlled input
          onChange={handleInputChange}  // Update on every keystroke
          placeholder="Enter a task"
        />
        <button type="submit">Add task</button>
      </form>

      <div>
        <ul>
          {/* Loop through todos array */}
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;