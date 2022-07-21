
import {useReducer, useState} from "react"
import Todo from "./Todo"

export const ACTION = {
    ADDTODO : "add_todo",
    TOGGLETODO : "toggle_todo",
    DELETETODO : "delete_todo"
}

function reducer (todos , action) {
    switch(action.type) {

    case ACTION.ADDTODO :    
     return [...todos.reverse() , createTodo(action.payload.todo_txt)].reverse()

    case ACTION.TOGGLETODO :
      return todos.map(todo => { 
          if(todo.id === action.payload.id) 
          { return {...todo , complete : !todo.complete }}
          return todo
      })

    case ACTION.DELETETODO : 
      return todos.filter(todo => todo.id !== action.payload.id)

    default: 
      return todos
    }

}

function createTodo(todo) { 
    return {id : Date.now() , text : todo , complete : false}
}

export default function Apptwo() {

    const [todo , settodo] = useState("")
    const [todos , dispatch] = useReducer(reducer , [])

    const addTodo = () => { 
        settodo("");
        dispatch({type : ACTION.ADDTODO, payload : {todo_txt : todo}})
    }

    console.log(todos)
    return (<article>
        <input value={todo} type = "text" onChange = { e => settodo(e.target.value)}/>
        <button onClick={(() => addTodo())}>+</button>

        {todos.map(el => { return <Todo key={el.id} todo={el} dispatch={dispatch} settodo={settodo}/>})}
        </article>)
}