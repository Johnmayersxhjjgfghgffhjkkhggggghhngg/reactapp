import {useState} from "react"
import Header from "./components/Header"
import TodoInput from "./components/Todoinput"
import TodoList from "./components/Todolist"


function App(){
    const[Todos,setTodos]=useState([])

    const handleAddTodo=(Todo)=>{
        setTodos([...Todos,Todo])
    }
    const handleDeleteTodo=(index)=>{
        const newTodos=Todos.filter((_,i)=>i!==index)
        setTodos(newTodos)
    }
    return(
        <>
        <Header/>
        <TodoInput addTodo={handleAddTodo}/>
        <TodoList Todos={Todos} deleteTodo={handleDeleteTodo}/>
        </>
    )
}
export default App