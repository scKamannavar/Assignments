import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Border from './border'

import Events from './otherassignments/events'

const Resume = () => {
  return (
    <div className='flex justify-center flex-col'>
        <div className=' w-full h-full bg-slate-700 rounded-xl text-slate-300 font-medium p-8 '>
            <div className='pl-10 text-6xl'>
                <h1>Sagar C K</h1>
            </div>    
            <Education list="list-decimal"/>
            <Experience/>
            <Skills/>
 
        </div>
        <div className='flex justify-center p-4 print:hidden'>
          <input type="button" value="Print" onClick={()=>{window.print()}} className='bg-blue-400 text-2xl p-4 text-black hover:text-white hover:bg-blue-700 rounded-full'  />
        </div>

        <Border>
        <Events/>
        </Border>
        
        
    </div>
  )
}

export default Resume
