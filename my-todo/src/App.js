import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './Components/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
