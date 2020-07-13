import React from 'react';
import { todo } from '../Reducers/reducer';

const Todo = props => {
    const toggleHandler = event => {
        event.preventDeafult()
        dispatch({
            type: "TOGGLE_COMPLETED",
            payload: todo.id
        })
    }

    const removeHandler = event => {
        event.preventDeafult()
        dispatch({ type: REMOVE_TODO, payload: todo.id })
    }



    return (
        <div onClick={toggleHandler}
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
        >
            <p>{todo.item}</p>
            <button onClick={removeHandler}>Remove Item</button>
        </div>
    )
}