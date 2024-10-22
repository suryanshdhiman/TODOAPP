import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/store';


const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue('');
      setError('');
    } else {
      setError('Please enter a task');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
        className={`todo-input ${error ? 'error-input' : ''}`} 
      />
      {error && <p className="error-message">{error}</p>} 
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
