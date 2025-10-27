import React, { useState } from "react";
import "./TodoList.css"; //  Import the CSS

export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Sample task", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTask = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { text: newTodo.trim(), completed: false }]);
    setNewTodo("");
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTask = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">My Todo List</h2>

      <div className="todo-input-area">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={updateTodoValue}
          className="todo-input"
        />
        <button onClick={addTask} className="todo-btn">
          Add
        </button>
      </div>

      <div className="todo-list-area">
        <h4 className="todo-subtitle">Tasks</h4>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className={`todo-item ${todo.completed ? "completed" : ""}`}>
              <span className="todo-text" onClick={() => toggleComplete(index)}>
                {todo.text}
              </span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

       