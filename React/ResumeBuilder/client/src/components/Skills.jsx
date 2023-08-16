import React from 'react'
import ResumeData from '../data/info'

const Skills = ({skillData}) => {

let displayFlag = 'block';
console.log(ResumeData.skills.length === 1)
  if(ResumeData.skills.length === 0) {
    displayFlag = 'hidden';
    
  }
  //console.log('inside skill component',skillData)   check
  return (
    <div className={`${ResumeData.skills.length ? '': 'hidden'} border-b-2 py-10 flex text-2xl`}>
      <div className={`flex-2 text-2xl w-[30%] pl-10`}>
        <h1>Skills</h1>
      </div>
      <div className='flex-1 text-2xl'>
          {
            skillData.map((skill, index)=>
            <li key={index} className='list-disc'>{skill}</li>
            )
          }
      </div>  
    </div>
  )
}

export default Skills
