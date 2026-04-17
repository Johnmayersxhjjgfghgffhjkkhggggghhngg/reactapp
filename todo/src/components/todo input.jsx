import { useState } from "react"
function TodoInput({addtodo}){
    const [todo, settodo] = useState("")
    const handleChange = ()=>{
        if(todo.trim() !== ""){
            addtodo(todo)
            settodo("")
        }
    }
    return (
        <div>
        <input type="text" placeholder="Enter your todo"
        value={todo} onChange={e=>settodo(e.target.value)} />
        <button onClick={handleChange}>add</button>
        </div>
    )
}
export default TodoInput