import { useState } from "react"
function TodoInput({addTodo}){
    const [Todo, setTodo] = useState("")
    const handleChange = ()=>{
        if(Todo.trim() !== ""){
            addTodo(Todo)
            setTodo("")
        }
    }
    return (
        <div>
        <input type="text" placeholder="Enter your Todo"
        value={Todo} onChange={e=>setTodo(e.target.value)} />
        <button onClick={handleChange}>add</button>
        </div>
    )
}
export default TodoInput