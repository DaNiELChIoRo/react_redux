import { ADD_TODO } from './types';

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
        default:
            return state;
    }   
}