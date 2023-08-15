import React from 'react'
import ResumeData from '../data/info'

const Experience = () => {
  return (
    <div className={`${ResumeData.experience.length ? '': 'hidden'}border-b-2 py-10 flex text-2xl`}>
    <div className='flex-2 text-2xl w-[30%] pl-10'>
        <h1>Experience:</h1>
    </div>
    <div className='flex-1 text-2xl '>   
        {ResumeData.experience.map((edu, index)=>
        <div className="py-4" key={index}>
            
          <h1 className='' >{edu.company}</h1>
            
          <h1 className='' >{edu.year}</h1>
           
            <h1 className=''>{edu.role}</h1>
        </div>
        )}
      
    </div>
    
  </div>
  )
}

export default Experience
