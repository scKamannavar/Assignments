import React, { useState } from 'react'
const tasks = [
    {
        id : 1,
        task : 'lorem 20 30',
        status : false
    },
    {
        id : 2,
        task : 'lorem 20 30',
        status : false
    },
    {
        id : 3,
        task : 'lorem 20 30',
        status : false
    },
    {
        id : 4,
        task : 'lorem 20 30',
        status : false
    }
]

const Todo = () => {
    const [task, setTask] = useState(tasks)
    const [status, setStatus] = useState(false)
   

    // if(status){
    //     setTask(task.map((t)=>{
    //         // console.log('before updating',t)
    //         if(id === t.id)
    //         {   
    //             return {...t, status:status}
               
    //         }
    //         return t
          
    //     }))
    // }

    function handleClick(id){
        // setStatus(true)
        console.log('inside handle', id)
        setTask(task.map((t)=>{
            if(id === t.id) {return {...t, status:true} }
            return t
        }) )    
    }

    function handleDelete(id){
        console.log('delete',id)
        setTask( task.filter((t)=>t.id !== id)
        )
    }
  return (
    <div className='flex justify-center'>
       <div className='flex justify-start  p-4 flex-col bg-slate-900 h-screen w-full sm:w-[50%]'>
            <div className='flex text-slate-300 font-Montserrat justify-center mt-10 '>
                    <div className='flex bg-white w-full rounded-xl h-10 text-slate-950'>
                        <input className='p-2 flex-1 rounded-full h-full text-slate-950 outline-none' type="text" name="addTodo" id="" />
                        <button className='bg-blue-600 h-full px-4 rounded-xl text-white' type="submit">Add</button>
                    </div>       
            </div>

            {task.map((t)=>{
                return <div className={` ${t.status ? 'bg-slate-100':'bg-slate-400'} flex mt-10 p-4 text-slate-100 rounded-md list-none`}>
                <div className='flex-1'>
                    <li>Lorem ipsum dolor sit amet </li>
                </div>
                <div >{t.id}
                    <button className='bg-green-400 p-2 rounded-md hover:bg-green-500' onClick={()=>handleClick(t.id)}> done</button>
                    <button className='bg-red-400 p-2 rounded-md hover:bg-red-500' onClick={()=>handleDelete(t.id)}> delete</button>
                </div>
            </div>
            })}
            
           
            
      </div>
    </div>
  )
}

export default Todo
