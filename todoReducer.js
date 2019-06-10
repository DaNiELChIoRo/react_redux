import { ADD_TODO } from './types';

const INITIAL_STATE = {
    todos: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { title: action.payload.title}]
            }
        default:
            return state;
    }   
}