import React, { useState } from 'react'

const form = ({addSkill, addEdu, addExp}) => {
    const [skill, setSkill] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState({});
    const [year, setYear] = useState('');
    const [role, setRole] = useState('');
    const [company, setCompany] = useState('');

    function handleClickSkil(){
        addSkill(skill)  
    }

    function handleClickExperience(e){
            const newExp = {
                'company': company,
                'role' : role,
                'year' : year
            }
            addExp(newExp)
    }

    function handleClickEducation(){
        addEdu(education) 
    }

  return (
    <div className='flex justify-center'>
      <form className='flex flex-col align-middle bg-slate-400 rounded-md p-4 w-[50%]' action="">
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-slate-900'>Skills</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="skills" id="skills" value={skill} onChange={(e)=>setSkill(e.target.value)} />
            <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={handleClickSkil}>Add</button>
        </div>

        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-slate-900'>Experience</h1>
            <h1>Company</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="company" id="company" onChange={(e)=>setCompany(e.target.value)} />
            <h1>Role</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="role" id="year" onChange={(e)=>setRole(e.target.value)}/>
            <h1>Year</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type='number' name="year" id="role" onChange={(e)=>setYear(e.target.value)}/>
            <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={(e)=>handleClickExperience(e)}>Add</button>
        </div>

        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-slate-900'>Education</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="education" id="education"onChange={(e)=>setEducation(e.target.value)} />
            <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={handleClickEducation}>Add</button>
        </div>
      </form>
    </div>
  )
}

export default form
