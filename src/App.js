import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'; 

const App = () => {
  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
