import { ADD_TODO } from "../types";

export function addTodo({title}) {
    return dispatch => {
        dispatch({
            type: ADD_TODO,
            payload: { title }
        })
    }
}