import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
      <div>
        <Todo item={props.state.item} />
      </div>
    )
  }

  export default TodoList;