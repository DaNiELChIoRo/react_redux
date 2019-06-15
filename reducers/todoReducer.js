import { ADD_TODO, LIST_TODO } from '../types';

const INITIAL_STATE = {
    todos: []
}

export default (state = INITIAL_STATE, action) => {
    // alert('inside ', action.payload.title)
    switch (action.type) {        
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { 
                    title: action.payload.title,
                    description: action.payload.description
                }]
            }
        case LIST_TODO:
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state;
    }   
}