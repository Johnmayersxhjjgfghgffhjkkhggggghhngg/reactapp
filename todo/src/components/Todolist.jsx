import react from "react"

import Todoitem from "./Todoitem"

function TodoList({Todos,deleteTodo}){
    return(
        <div>
            {Todos.map((Todo,index)=>(
                <Todoitem key={index} Todo={Todo} index={index} deleteTodo={deleteTodo}/>
            ))}
        </div>
    )
}
export default TodoList