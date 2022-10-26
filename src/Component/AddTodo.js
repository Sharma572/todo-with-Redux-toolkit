import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todoSlicer';

const AddTodo = () => {

    const [value, setvalue] = useState("");
    const dispatch = useDispatch();

    const onSubmit=(e)=>{
     e.preventDefault();
     dispatch(addTask({
        task:value
     }))
     setvalue("")
    }

  return (
   <>
   <input type="text" placeholder="Add Items" value={value} onChange={(e)=> setvalue(e.target.value)} />
   <button disabled={!value.length} onClick={onSubmit}>Add Task</button>
   </>
  )
}

export default AddTodo