import React, { useState, useReducer } from 'react';


const TodoList = props => {
    const [state, dispatch] = useReducer(reducer, intitialState);

    return (
       <div>
       {state.map(todo => {
           return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
       })}
       </div>
    )
};

export default TodoList;