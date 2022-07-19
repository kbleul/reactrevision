
import {useReducer, useState} from "react"
import Todo from "./Todo"

const ACTION = {
    ADDTODO : "addtodo",
    TOGGLETODO : "toggletodo",
}

function reducer (todos , action) {
    switch(action.type) {

    case ACTION.ADDTODO :    
     return [...todos.reverse() , createTodo(action.payload.todo_txt)].reverse()


    }

}

function createTodo(todo) { console.log(Date.now())
    return {id : Date.now() , text : todo , complete : false}
}

export default function Apptwo() {

    const [todo , settodo] = useState("")
    const [todos , dispatch] = useReducer(reducer , [])

    console.log(todos)
    return (<article>
        <input value={todo} type = "text" onChange = { e => settodo(e.target.value)}/>
        <button onClick={(() => dispatch({type : ACTION.ADDTODO, payload : {todo_txt : todo}}))}>+</button>

        {todos.map(el => { return <Todo key={el.id} todo={el}/>})}
        </article>)
}