import {ACTION} from "./Apptwo"
 
 export default function Todo({todo, dispatch, settodo}) {

    const edittodo = () => {
        settodo(todo.text)
        dispatch({type : ACTION.DELETETODO , payload : {id : todo.id}})
    }

    return (<section>
        <p style={{color : todo.complete ? "black" : "gray"}}>{todo.text}</p>
        <button onClick={() => dispatch({type : ACTION.TOGGLETODO , payload : {id : todo.id}})}>Toggle</button>
        <button onClick={() => dispatch({type : ACTION.DELETETODO , payload : {id : todo.id}})}>Delete</button>
        <button onClick={() => edittodo()}>Edit</button>
        </section>)
 }