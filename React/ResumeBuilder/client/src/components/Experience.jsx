import React from 'react'
import ResumeData from '../data/info'


const Experience = ({expData, deleteExp}) => {

  const handleDelete = (id)=>{
    deleteExp(id)
  }


  return (
    <div className={`${ResumeData.experience.length ? '': 'hidden'}bg-gray- border-b-2 py-10 flex text-2xl`}>
    {/* <div className='flex-2 text-2xl w-[30%] pl-10'>
        <h1>Experience:</h1>
    </div> */}
    <div className='flex-1 '>   
        {expData.map((exp, index)=>
        <div className="py-4" key={index}>
            
          <h1 className='' >{exp.company}</h1>
            
          <h1 className='' >{exp.year}</h1>
           
          <h1 className=''>{exp.role}</h1>
          <h1 className=''>{exp.description}</h1>
          <span className='text-sm hover:cursor-pointer' onClick={()=>handleDelete(exp.id)}>Delete🚫</span>
        </div>
        )}
      
    </div>
    
  </div>
  )
}

export default Experience
