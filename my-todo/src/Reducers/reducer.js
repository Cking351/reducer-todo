import TodoList from '../Components/TodoList'

export const initialState = {
    item: "Learn how reducers work",
    completed: false,
    id: 3892987589
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                item: action.payload,
                id: Date.now()
            }
        case "TOGGLE_COMPLETED":
            return state.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }else {
                    return item
                }
            })
        case "CLEAR_COMPLETED":
            return{
                ...state,
                completed: true
            }  
        default:
            return state     
    }
}