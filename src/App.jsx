import React, { useState } from 'react';
import './App.css';
import Display from './Components/Display.jsx';

function App() {
  const [todo, setlist] = useState([]);
  const [description, setDescription] = useState('');

  const handleInput = (input) => {
    setDescription(input.target.value);
  };

  const handleSubmit = (submit) => {
    submit.preventDefault();
    if (description.trim() !== '') {
      setlist([...todo, { key: Date.now(), description }]);
      setDescription('');
    }
  };

  const handleDelete = (key) => {
    setlist(todo.filter((item) => item.key !== key));
  };

  const handleUpdate = (newDescription, key) => {
    setlist(
      todo.map((item) =>
        item.key === key ? { ...item, description: newDescription } : item
      )
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>ToDo-List</h2>
        <input
          type="text"
          placeholder="Enter Your task"
          onChange={handleInput}
          value={description}
        />
        <button type="submit">Add</button>
      </form>
      <Display
        todo={todo}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
