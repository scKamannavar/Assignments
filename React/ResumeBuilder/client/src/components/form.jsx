import React, { useState } from 'react'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Hobbies from './hobbies'
import About from './About'

const form = ({resumeinfo,addSkill, addEdu,addHobbies, addAbt, addExp  }) => {

  // console.log('all data in form.jsx', resumeinfo,addSkill, addEdu,addHobbies, addAbt)
    const [skill, setSkill] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState({});
    const [year, setYear] = useState('');
    const [role, setRole] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [aboutTxt, setAboutTxt] = useState(resumeinfo.about.aboutText);
    const [phone, setPhone] = useState(resumeinfo.about.phone);
    const [email, setEmail] = useState(resumeinfo.about.email);
    const [hobbies, setHobbies] = useState('');

    const [displayform, setDisplayform] = useState(1)

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
      <form className='flex flex-col items-center pt-40  bg-slate-100 rounded-md p-4 min-h-screen w-full' action="">
        <div className='w-[50%] border-2 p-6 bg-slate-300 rounded-xl shadow-xl'> 
          <div className={`flex flex-col  ${displayform===1?'block':'hidden'}`}>
              <h1 className='text-4xl text-slate-900 self-center'>Skills</h1>
              <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="skills" id="skills" value={skill} onChange={(e)=>setSkill(e.target.value)} />
              <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={handleClickSkil}>Add</button>
              <div className='flex justify-end px-6'>
                  <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(1)}>Previous</button>
                  <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform + 1)}>Next</button>
                  
              </div>
              <Skills skillData = {resumeinfo.skills} />
          </div>
          

          <div className={`flex flex-col ${displayform===2?'block':'hidden'}`}>
              <h1 className='text-4xl text-slate-900 self-center'>Experience</h1>
              <h1>Company</h1>
              <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="company" id="company" onChange={(e)=>setCompany(e.target.value)} />
              <h1>Role</h1>
              <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="role" id="year" onChange={(e)=>setRole(e.target.value)}/>
              <h1>Year</h1>
              <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type='text' name="year" id="role" onChange={(e)=>setYear(e.target.value)}/>
              <h1>Description</h1>
              <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type='text' name="description" id="description" onChange={(e)=>setDescription(e.target.value)}/>
              <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={(e)=>handleClickExperience(e)}>Add</button>
            
            <div className='flex justify-end px-6'>
              <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform - 1)}>Previous</button>
              
              <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform + 1)}>Next</button>
            </div>
              <Experience expData = {resumeinfo.experience}/>
          </div>
          

          <div className={`flex flex-col ${displayform===3?'block':'hidden'}`}>
              <h1 className='text-4xl text-slate-900 self-center'>Education</h1>
              <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="education" id="education"onChange={(e)=>setEducation(e.target.value)} />
              <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={(e)=>handleClickEducation(e)}>Add</button>
              <div className='flex justify-end px-6'>
                <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform - 1)}>Previous</button>
                
                <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform + 1)}>Next</button>
            </div>
              <Education list="list-decimal" eduData={resumeinfo.education}/>
          </div>
          

          <div className={`flex flex-col ${displayform===4?'block':'hidden'}`}>
              <h1 className='text-4xl text-slate-900 self-center'>About</h1>
              <h1 >About You</h1>
              <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' value={aboutTxt} type="text" name="aboutTxt" id="aboutTxt"onChange={(e)=>setAboutTxt(e.target.value)} />
              <h1 >Phone</h1>
              <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' value={phone} type="text" name="phone" id="phone"onChange={(e)=>setPhone(e.target.value)} />
              <h1 >Email</h1>
              <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' value={email} type="text" name="email" id="email"onChange={(e)=>setEmail(e.target.value)} />
              <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={(e)=>handleClickAbout(e)}>Add</button>
              <div className='flex justify-end px-6'>
                <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform - 1)}>Previous</button>
                
                <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform + 1)}>Next</button>
            </div>
              <About abtData = {resumeinfo.about}/> 
          </div>
          
          
          <div className={`flex flex-col ${displayform===5?'block':'hidden'}`}>
              <h1 className='text-4xl text-slate-900 self-center'>Hobbies/Intersest</h1>
              <input className='h-12 p-2 border-2 border-blue-500 focus:border-spacing-4 rounded-lg' type="text" name="Hobbies" id="Hobbies"onChange={(e)=>setHobbies(e.target.value)} />
              <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={(e)=>handleClickHobby(e)}>Add</button>
              <div className='flex justify-end px-6'>
                <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform - 1)}>Previous</button>
              
                <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(5)}>Next</button>
            </div>
              <Hobbies hobbiesData={resumeinfo.hobbies}/>
          </div>
        </div>
        
      </form>
    </div>
  )
}

export default form
