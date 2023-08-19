import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

const form = ({formState, addTask}) => {
const [newtask, setNewTask] = useState('')

function handleClick(){
    if(newtask === ''){return}
    const newTaskObj = {
            id : uuidv4(),
            task : newtask,
            status : false
    }
    addTask(newTaskObj)
    setNewTask('')
}
  return (
    <div className={`flex justify-center px-2 w-[80%] sm:w-[30%] text-slate-300 font-Montserrat align-bottom  ${formState?'block':'hidden'} fixed  bottom-24 right-0`}>
        <div className='flex bg-white w-full rounded-xl h-12 text-slate-950 shadow-xl'>
            <input className='p-2 flex-1 rounded-full h-full text-slate-950 outline-none ' type="text" name="addTodo" id="" value={newtask}   onChange={(e)=>setNewTask(e.target.value)} />
            <button className='bg-orange-600 h-full px-4 rounded-xl  text-white ' type="submit" onClick={handleClick}>Add</button>
        </div>       
    </div>
  )
}

export default form
