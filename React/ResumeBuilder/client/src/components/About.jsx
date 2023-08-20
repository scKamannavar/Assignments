import React from 'react'

const About = ({abtData}) => {
  return (
    <div>
       <div className={` border-b-2 py-10 flex text-2xl`}>
      <div className={`flex-2 text-2xl w-[30%] pl-10`}>
        <h1>About</h1>
      </div>
      <div className='flex-1 text-2xl'>
          {
            // skillData.map((skill, index)=>
            <div>
            <li className='list-disc'>{abtData.aboutText} </li>
            <li className='list-disc'>{abtData.phone} </li>
            <li className='list-disc'>{abtData.email} </li>
            </div>
            // )
          }
      </div>  
    </div>
    </div>
  )
}

export default About
