import React, { useState, useReducer } from 'react';
import './App.css';
import CurrentTodo from './Components/CurrentTodo'
import TodoList from './Components/TodoList'
import { initialState, reducer } from './Reducers/reducer'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeHandler = event => {
    setNewTodo(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault()
    dispatch({ type: "ADD_TODO", payload: newTodo })
    setNewTodo("")
  }

  const clearCompleted = event => {
    event.preventDefault()
    dispatch({ type: "CLEAR_COMPLETED" })
  }

  const toggleTask = todoId => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: todoId })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <h2>Todo List</h2>
      <CurrentTodo 
        handleChanges={changeHandler}
        newTodo={newTodo}
        submitHandler={submitHandler}
        clearCompleted={clearCompleted}
      />
      <TodoList state={state} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
