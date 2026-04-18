import react from "react"

function TodoItem({Todo,index,deleteTodo}){
    return(
        <div>
        <p>{Todo}</p>
        <button onClick={()=>deleteTodo(index)}>delete</button>
        </div>
    )
}
export default TodoItem
