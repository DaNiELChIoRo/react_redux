import { ADD_TODO } from "../types";

//Este reducer administra el estado de nuestra aplicación llamando a los otro reductores
//en función de sus llaves de estado.
export function addTodo({title}) {
    return dispatch => {
        dispatch({
            type: ADD_TODO,
            payload: { title }
        })
    }
}