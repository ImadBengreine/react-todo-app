import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    setTodos(prev => [...prev, inputValue]);  // Functional update
    setInputValue("");
  }

  function deleteTodo(indexToRemove) {
    setTodos(prev => prev.filter((_, index) => index !== indexToRemove));  // ✅ Fixed
  }

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button type="submit">Add task</button>
      </form>

      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;