import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React basics', completed: true },
    { id: 2, text: 'Build a simple app', completed: false },
    { id: 3, text: 'Deploy to production', completed: false }
  ]);
  
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li 
            key={todo.id} 
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 0',
              borderBottom: '1px solid #eee'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span 
              style={{ 
                marginLeft: '10px',
                textDecoration: todo.completed ? 'line-through' : 'none',
                flex: 1
              }}
            >
              {todo.text}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              style={{ 
                backgroundColor: '#f44336',
                padding: '5px 10px'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      <div style={{ marginTop: '20px' }}>
        <p>{todos.filter(t => t.completed).length} of {todos.length} tasks completed</p>
      </div>
    </div>
  );
}

export default TodoList;