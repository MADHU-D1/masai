import { useState } from "react"
import Todolist from "./Todolist"
import Todoitem from "./Todoitem"

function TodoApp(){
   
    const [todos, setTodos] = useState([])
    const onclickbtn=(text)=>{
        const newtodo={
            title: text,
            status: false,
            id: new Date().toDateString() + text 
            
        }

        const updatenewTodods = ([...todos, newtodo])
        setTodos(updatenewTodods)
    }

    const AddToggle=(id)=>{
        const newToggletod = todos.map((todo)=> (todo.id === id ?{...todo,status: !todo.status}:todo))
        setTodos(newToggletod)
    }
    
     const DeleteToggle =(id)=>{
       const deletetogglebtn = todos.filter((todo)=> todo.id !== id)
       setTodos(deletetogglebtn)
     }
    return(
        <div>
            <Todolist onclickbtn={onclickbtn}/>
          {todos.map((item)=>(
             <Todoitem title={item.title} status={item.status} key={item.id} id={item.id} AddToggle={AddToggle} DeleteToggle={DeleteToggle}/>
          ))}
        </div>
    )
}

export default TodoApp