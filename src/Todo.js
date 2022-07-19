
 export default function Todo({todo}) {

    return (<section>
        <p style={{color : todo.complete ? "black" : "gray"}}>{todo.text}</p>
        <button>Toggle</button>
        <button>Delete</button>

        </section>)
 }