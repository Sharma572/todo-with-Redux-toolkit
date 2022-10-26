import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/todoSlicer';

const TodoItems = ({id,title}) => {
const dispatch = useDispatch();

const removeTask=()=>{
    dispatch(deleteTask({
        id:id
    }))
}
  return (
   <li>
    <div>{title}</div>
    <div><button onClick={()=> { removeTask()}}>Delete</button></div>
   </li>
  )
}

export default TodoItems