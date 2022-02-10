import React from 'react'
import "./Todo.css"
import { FaTrashAlt } from "react-icons/fa";
const todo = ({todoItem ,deleteTodo ,isChecked}) => {

    function deleteTodoHandler(id) {
        deleteTodo(id)
         
    }
    function checkTodo(id) {
        isChecked(id)
        
    }

    return (
       <li className ={`${todoItem.checked? 'todo checked':'todo' }`} >
           <p>
               <input onChange={()=>checkTodo(todoItem.id)} type="checkbox" defaultChecked ={todoItem.checked} />
               {todoItem.todo}  
               <span className="trash" onClick={()=>deleteTodoHandler(todoItem.id)}><FaTrashAlt/></span>
            </p>
       </li> 
            
    
    )
}

export default todo
