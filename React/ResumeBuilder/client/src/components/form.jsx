import React, { useState } from 'react'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Hobbies from './hobbies'
import About from './About'

const form = ({addSkill, addEdu, addExp, addAbt, addHobbies, skillData, eduData, expData, abtData, hobbiesData}) => {
    const [skill, setSkill] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState({});
    const [year, setYear] = useState('');
    const [role, setRole] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [aboutTxt, setAboutTxt] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [hobbies, setHobbies] = useState('');

    function handleClickSkil(){
        addSkill(skill)  
    }

    function handleClickExperience(){
            const newExp = {
                'company': company,
                'role' : role,
                'year' : year,
                'description' : description,
            }
            addExp(newExp)
    }

    function handleClickEducation(){
        addEdu(education) 
    } 
    function handleClickHobby(){
      addHobbies(hobbies)
    }

    function handleClickAbout(){
      addAbt({
        aboutText : aboutTxt,
        phone: phone,
        email:email,
      }) 
  } 

  return (
    <div className='flex justify-center print:hidden'>
      <form className='flex flex-col items-center  bg-slate-100 rounded-md p-4 w-full' action="">
        <div className='flex flex-col  w-[50%]'>
            <h1 className='text-4xl text-slate-900'>Skills</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="skills" id="skills" value={skill} onChange={(e)=>setSkill(e.target.value)} />
            <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={handleClickSkil}>Add</button>
            <Skills skillData = {skillData} />
        </div>
        

        <div className='flex flex-col w-[50%] '>
            <h1 className='text-4xl text-slate-900'>Experience</h1>
            <h1>Company</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="company" id="company" onChange={(e)=>setCompany(e.target.value)} />
            <h1>Role</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="role" id="year" onChange={(e)=>setRole(e.target.value)}/>
            <h1>Year</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type='text' name="year" id="role" onChange={(e)=>setYear(e.target.value)}/>
            <h1>Description</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type='text' name="description" id="description" onChange={(e)=>setDescription(e.target.value)}/>
            <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={(e)=>handleClickExperience(e)}>Add</button>
            <Experience expData = {expData}/>
        </div>
        

        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-slate-900'>Education</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="education" id="education"onChange={(e)=>setEducation(e.target.value)} />
            <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={handleClickEducation}>Add</button>
        </div>
        <Education list="list-decimal" eduData={eduData}/>

        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-slate-900'>About</h1>
            <h1 className='text-4xl text-slate-900'>About You</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="aboutTxt" id="aboutTxt"onChange={(e)=>setAboutTxt(e.target.value)} />
            <h1 className='text-4xl text-slate-900'>Phone</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="phone" id="phone"onChange={(e)=>setPhone(e.target.value)} />
            <h1 className='text-4xl text-slate-900'>Email</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="email" id="email"onChange={(e)=>setEmail(e.target.value)} />
            <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={handleClickAbout}>Add</button>
        </div>
        <About abtData = {abtData}/> 

        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-slate-900'>Hobbies</h1>
            <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="Hobbies" id="Hobbies"onChange={(e)=>setHobbies(e.target.value)} />
            <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={handleClickHobby}>Add</button>
        </div>
        <Hobbies hobbiesData={hobbiesData}/>
      </form>
    </div>
  )
}

export default form
