import TodoList from '../Components/TodoList'

export const todo = {
    item: "Learn how reducers work"
    completed: false,
    id: 3892987589
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                {   item: action.payload, 
                    completed: false, 
                    id: Date.now() }
                }

        case "TOGGLE_COMPLETED":
            return state.map(todo => {
                if (action.payload === todo.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            })    
        default:
            return state
    }
}