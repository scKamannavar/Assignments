import React from 'react'
import ResumeData from '../data/info'

const Education = ({list, eduData}) => {
  console.log(list)
  return (
    <div className={`${ResumeData.education.length ? '': 'hidden'} border-b-2 py-10 flex text-2xl`}>
      {/* <div className='flex-2 text-2xl w-[30%] pl-10'>
          <h1>Education:</h1>
      </div> */}
      <div className='flex-1 text-2xl '> 
          {eduData.map((edu, index)=>
            <li className={`${list}`} key={index}>{edu}</li>
          )}
        
      </div>
      
    </div>
  )
}

export default Education
