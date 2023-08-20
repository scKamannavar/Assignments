import React, { useState } from 'react'
import ResumeData from '../data/info'

const Hobbies = ({hobbiesData}) => {
  

//   console.log('inside hobbies component',hobbiesData) //  check
  return ( 
    <div className={`border-b-2 py-10 flex text-2xl`}>
      <div className={`flex-2 text-2xl w-[30%] pl-10`}>
        <h1>Hobbies</h1>
      </div>
      <div className='flex-1 text-2xl'>
          {
            hobbiesData.map((hobby, index)=>
            <li key={index} className='list-disc'>{hobby}</li>
            )
          }
      </div>  
    </div>
  )
}

export default Hobbies
