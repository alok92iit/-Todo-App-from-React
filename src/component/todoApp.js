import React,{useState ,useEffect} from 'react'
import {TodoList} from './todoList'
import Form from './Form'

export const TodoApp = () => {

    const DUMMY_TODOS = JSON.parse(window.localStorage.getItem("todos") || "[]")
    
    const [todos,setTodo] =useState(DUMMY_TODOS)

    const addTodo =(newtodo)=>{
       setTodo([...todos,newtodo])
    }
    useEffect(()=>{
           window.localStorage.setItem("todos",JSON.stringify(todos)) 
    },[todos])

    const deleteTodo= (id)=>{
        //we can return a function in setTodo ,it has prevState 
        setTodo((prevState)=>{
            return prevState.filter((todo)=>todo.id !== id)
        })
    }

    const isChecked =(id)=>{
        setTodo((prevState)=>{
            return prevState.map((item)=>item.id ===id ?{...item,checked :!item.checked}:item) ;
        })
    }

    return (
        <div style={{width:'100%',padding:'30px auto'}}>
            <center><h1 style={{color:'white',fontFamily:"sans-serif"}}>To Do's App</h1></center>
            <center><Form addTodo={addTodo} todos ={todos}/></center>
            <TodoList todos={todos} deleteTodo={deleteTodo} isChecked ={isChecked}/>
            <center><h4 style={{
                color:"#4b7096",
                paddingBottom:10,
                fontFamily:"sans-serif",
                position:"fixed",
                bottom:0,
                left:"35%",
                right:"35%"}}>Developed By Alok Sharma</h4></center>
        </div>
    )
}

export default TodoApp
