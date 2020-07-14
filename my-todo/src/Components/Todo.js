import React from 'react';

export default function Todo(props) {
    const { item, id, completed } = props.todo
    return (
        <div onClick={() => props.toggleTask(id)}
        className={`todo${completed ? "completed" : ""}`} style={{ textDecoration: completed ? "line-through" : ""}}>
            <li>{item}</li>
        </div>
    )
}