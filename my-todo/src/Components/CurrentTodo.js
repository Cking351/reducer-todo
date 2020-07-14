import React, { useState, useReducer } from 'react';

export default function NewTodo(props) {
    return (
        <div>
            <input 
                type="text"
                name="currentTodo"
                value={props.currentTodo}
                onChange={props.changeHandler}
            />
            <button onClick={props.submitHandler}>Add Task</button>
            <button onClick={props.clearCompleted}>Clear Tasks</button>
        </div>
    )
}