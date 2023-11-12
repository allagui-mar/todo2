// Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from './actions';

const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(toggleTask(id));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={handleToggleClick} />
      <span>{description}</span>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Task;
