import { ADD_TODO } from "../types";

//Este reducer administra el estado de nuestra aplicación llamando a los otro reductores
//en función de sus llaves de estado.
export function addTodo({title, description}) {
    return dispatch => {
        alert('inside the addTodo function:' + description)        
        const url = 'http://localhost:3000/todos/create'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({title, description}),            
            headers: {'content-type':'application/json'}
        }).then((res) =>
            res.json()
        ).then((data) => {
            dispatch({
                type: ADD_TODO,
                payload: data 
            })
        })
    }
}