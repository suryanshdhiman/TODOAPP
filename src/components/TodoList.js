import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/store';
import ConfirmModal from './ConfirmModal'; 

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const handleDeleteClick = (id) => {
    setTodoToDelete(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (todoToDelete) {
      dispatch(deleteTodo(todoToDelete));
    }
    setIsModalOpen(false);
    setTodoToDelete(null);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setTodoToDelete(null);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Confirm Modal */}
      <ConfirmModal
        isOpen={isModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        message="Are you sure you want to delete this task?"
      />
    </div>
  );
};

export default TodoList;
