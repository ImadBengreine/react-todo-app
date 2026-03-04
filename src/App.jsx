import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: uuidv4(),
      text: inputValue,
      completed: false
    };
    console.log(newTodo);
    setTodos(prev => [...prev, newTodo]);  
    setInputValue("");
  }

  function deleteTodo(indexToRemove) {
    setTodos(prev => prev.filter((todo) => todo.id !== indexToRemove));  
  }

  function toggleComplete(idToToggle)
  {
    setTodos(prev => prev.map(todo =>
      todo.id === idToToggle ? {...todo, completed: !todo.completed} : todo
    ));
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
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />

              <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;