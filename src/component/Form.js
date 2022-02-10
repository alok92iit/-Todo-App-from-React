import React ,{useState} from 'react'
import './form.css';
import { v4 as uuid} from 'uuid';
const Form = (props) => {
    const [input ,setInput] =useState('')
    const [isvalid,setValid] =useState('true')
    const inputChangeHandler =(e)=>{
        setInput(e.target.value)
        if(input.trim().length >0){
            setValid(true)
        }
    }

    const formSubmitHandler =(e)=>{
        e.preventDefault()
        if (input.trim().length===0){
            setValid(false)
            return
        }

        const newTodo ={
            id :uuid(),
            todo: input,
            checked:false
        }
        props.addTodo(newTodo)
        setInput('');
    }
    

    
    return (
            <form className='inputForm' onSubmit={formSubmitHandler}>
                <input style={{border:`${!isvalid ? '2px solid red':""}` }} onChange={inputChangeHandler} type="text"  value={input}/>
            </form>
    )
}

export default Form
