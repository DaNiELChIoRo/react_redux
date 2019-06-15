import { ADD_TODO, LIST_TODO } from "../types";
import Realm from '../realm';


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

export function listTodos() {
    return dispatch => {
        const url = 'http://localhost:3000/todos'
        // IF THERE IS NETWORK
        fetch(url, {
            method: 'GET',            
        }).then((res) =>
            res.json()
        ).then((data) => {
            // data.forEach(element => {                
            //     Realm.add('ToDo', {
            //         title: element.payload.title,
            //         description: element.payload.description
            //     })
            // });
            dispatch({
                type: LIST_TODO,
                payload: data 
            })
            // ELSE      
        }).catch(() => {
            Realm.get('ToDo', (todos) => {
                dispatch({
                    type: LIST_TODOS,
                    payload: Array.from(todos)
                })
            })
        })
        
    }    
}