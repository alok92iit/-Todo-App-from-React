import React from 'react'
import Todo from './todo'
import './TodoList.css';
import "../index.css"
export const TodoList = ({todos,deleteTodo ,isChecked}) => {

    const alltodos =todos.map((item)=>{
        return <Todo  key={item.id}   todoItem={item} deleteTodo={deleteTodo} isChecked={isChecked}/>
    })



    return (
        <section className='sec'>
            <ul className="todo-list">
                {alltodos}
            </ul>
        </section>
    )
}

export default TodoList