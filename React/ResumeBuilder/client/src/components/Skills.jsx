import React, { useState } from 'react'


const Skills = ({skillData, deleteSkill}) => {

  function handleDelete(id){
    deleteSkill(id)
    // console.log(id)
  }
  console.log('inside skill component',skillData)  // check
  return (
    <div className={`${skillData.length ? '': 'hidden'} border-b-2 py-10 flex text-2xl`}>
      <div className={`flex-2 text-2xl w-[30%] pl-10`}>
        <h1>Skills</h1>
      </div>
      <div className='flex-1 text-2xl'>
          {
            skillData.map((skill, index)=>
            <li key={index} className='list-disc'>{skill} <span onClick={()=>handleDelete(skill)}>Delete</span> </li>
            )
          }
      </div>  
    </div>
  )
}

export default Skills
