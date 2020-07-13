import React, { useState, useReducer } from 'react';
import TodoList from './TodoList';

const TodoForm = props => {
    const [item. setItem] = useState("")

    const handleChanges = event => {
        setItem(event.target.value)
    }

    const submitForm = event => {
        event.preventDefault()
        dispatch({
            type: "ADD_TODO",
            payload: item
        })
        setItem("")
    }

    const clearCompleted = event => {
        event.preventDefault()
        dispatch({
            type: "CLEAR_COMPLETED"
        })
    }

    return null
}

export default TodoForm;