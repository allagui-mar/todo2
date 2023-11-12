// App.js
import React from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
