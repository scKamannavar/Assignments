import React, { useState } from 'react'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Hobbies from './hobbies'
import About from './About'
import { v4 as uuidv4 } from 'uuid';

const form = ({resumeinfo,addSkill, addEdu,addHobbies, addAbt, addExp, deleteSkill, deleteExp, deleteEdu, deleteHobby }) => {

  // console.log('all data in form.jsx', resumeinfo,addSkill, addEdu,addHobbies, addAbt)
    const [skill, setSkill] = useState('');
    const [education, setEducation] = useState('');
    const [institute, setInstitute] = useState('')
    const [course, setCourse] = useState('')
    const [eduyear, setEduyear] = useState('')
    const [grades, setGrades] = useState('')
    const [experience, setExperience] = useState({});
    const [year, setYear] = useState('');
    const [role, setRole] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [aboutTxt, setAboutTxt] = useState(resumeinfo.about.aboutText);
    const [phone, setPhone] = useState(resumeinfo.about.phone);
    const [email, setEmail] = useState(resumeinfo.about.email);
    const [name, setName] = useState(resumeinfo.about.email);
    const [hobbies, setHobbies] = useState('');

    const [displayform, setDisplayform] = useState(1)

    function handleClickSkil(){
        addSkill(skill)  
        setSkill('')
    }

    function handleClickExperience(){
            const newExp = {
                'id' : uuidv4(),
                'company': company,
                'role' : role,
                'year' : year,
                'description' : description,
            }
            addExp(newExp)
    }

    function handleClickEducation(){
        const newEdu = {
            'id' : uuidv4(),
            'institute' : institute,
            'course' : course,
            'year' : eduyear,
            'grades': grades,
        }
        addEdu(newEdu) 
    } 
    function handleClickHobby(){
      addHobbies(hobbies)
    }

    function handleClickAbout(){
      addAbt({
        aboutText : aboutTxt,
        phone: phone,
        email:email,
        name : name,
      }) 
  } 

  return (
    <div className='flex justify-center print:hidden bg-blue-400 flex-col shadow-xl'>
              <div className='flex justify-center text-6xl font-Outfit pb-6 font-extrabold pt-10 rounded-xl'>
                <h1>BUILD YOUR RESUME</h1>
              </div>
      <form className='flex flex-col items-center pt-6 rounded-md p-4 min-h-screen w-full' action="">
        <div className='w-[50%] p-6 bg-white rounded-xl shadow-xl'> 

{/* Skills */}
          <div className={`flex flex-col  ${displayform===4?'block':'hidden'}`}>
           
              <h1 className='text-4xl font-bold text-slate-900 self-center font-Poppins'>Skills</h1>
            

              <input className='h-12  p-2 border-b-2 border-blue-500 outline-none ' placeholder='Type your skill here (Eg: "Javascript")' type="text" name="skills" id="skills" value={skill} onChange={(e)=>setSkill(e.target.value)} />
              <button className='bg-none text-xl font-Outfit hover:text-white border-2 border-blue-500 px-6 py-4 rounded-md hover:bg-blue-400 mt-3' type="button" onClick={handleClickSkil}  >ADD</button>
              <div className='flex justify-end px-6'>
                  <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform - 1)}>Previous</button>
                  <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform + 1)}>Next</button>
                  
              </div>
              <Skills skillData = {resumeinfo.skills} deleteSkill= {deleteSkill} />
          </div>
          
{/* Experience */}
          <div className={`flex flex-col ${displayform===2?'block':'hidden'}`}>
              <h1 className='text-4xl font-bold text-slate-900 self-center font-Poppins'>Experience</h1>
              <h1>Company</h1>
              <input className='h-12  p-2 border-b-2 border-blue-500 outline-none ' type="text" name="company" id="company" onChange={(e)=>setCompany(e.target.value)} />
              <h1>Role</h1>
              <input className='h-12  p-2 border-b-2 border-blue-500 outline-none ' type="text" name="role" id="year" onChange={(e)=>setRole(e.target.value)}/>
              <h1>Year</h1>
              <input className='h-12  p-2 border-b-2 border-blue-500 outline-none ' type='text' name="year" id="role" onChange={(e)=>setYear(e.target.value)}/>
              <h1>Description</h1>
              <input className='h-12  p-2 border-b-2 border-blue-500 outline-none ' type='text' name="description" id="description" onChange={(e)=>setDescription(e.target.value)}/>
              <button className='bg-none text-xl font-Outfit hover:text-white border-2 border-blue-500 px-6 py-4 rounded-md hover:bg-blue-400 mt-3' type="button" onClick={(e)=>handleClickExperience(e)}>Add</button>
            
            <div className='flex justify-end px-6'>
              <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform - 1)}>Previous</button>
              
              <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform + 1)}>Next</button>
            </div>
              <Experience expData = {resumeinfo.experience} deleteExp={deleteExp}/>
          </div>
          
{/* Education */}
          <div className={`flex flex-col ${displayform===3?'block':'hidden'}`}>
              <h1 className='text-4xl font-bold text-slate-900 self-center font-Poppins'>Education</h1>
              <h1>Institution</h1>
              <input className='h-12  p-2 border-b-2 border-blue-500 outline-none ' type="text" name="education" id="education"onChange={(e)=>setInstitute(e.target.value)} />
              <h1>Course</h1>
              <input className='h-12  p-2 border-b-2 border-blue-500 outline-none ' type="text" name="education" id="education"onChange={(e)=>setCourse(e.target.value)} />
              <h1>Year</h1>
              <input className='h-12  p-2 border-b-2 border-blue-500 outline-none ' type="text" name="education" id="education"onChange={(e)=>setEduyear(e.target.value)} />
              <h1>Grades</h1>
              <input className='h-12  p-2 border-b-2 border-blue-500 outline-none ' type="text" name="education" id="education"onChange={(e)=>setGrades(e.target.value)} />
              <button className='bg-none text-xl font-Outfit hover:text-white border-2 border-blue-500 px-6 py-4 rounded-md hover:bg-blue-400 mt-3' type="button" onClick={(e)=>handleClickEducation(e)}>Add</button>
              <div className='flex justify-end px-6'>
                <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform - 1)}>Previous</button>
                
                <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform + 1)}>Next</button>
            </div>
              <Education list="list-decimal" eduData={resumeinfo.education} deleteEdu={deleteEdu}/>
          </div>
          
{/* About */}
          <div className={`flex flex-col ${displayform===1?'block':'hidden'}`}>
              <h1 className='text-4xl font-bold text-slate-900 self-center font-Poppins'>ABOUT</h1>
              <h1 >Name</h1>
              <input className='h-12  p-2   border-b-2 border-blue-500 outline-none ' value={name} type="text" name="Name" id="Name"onChange={(e)=>setName(e.target.value)} />
              <h1 >About You</h1>
              <input className='h-12  p-2   border-b-2 border-blue-500 outline-none ' value={aboutTxt} type="text" name="aboutTxt" id="aboutTxt"onChange={(e)=>setAboutTxt(e.target.value)} />
              <h1 >Phone</h1>
              <input className='h-12  p-2   border-b-2 border-blue-500 outline-none ' value={phone} type="text" name="phone" id="phone"onChange={(e)=>setPhone(e.target.value)} />
              <h1 >Email</h1>
              <input className='h-12  p-2   border-b-2 border-blue-500 outline-none ' value={email} type="text" name="email" id="email"onChange={(e)=>setEmail(e.target.value)} />
              <button className='bg-none text-xl font-Outfit hover:text-white border-2 border-blue-500 px-6 py-4 rounded-md hover:bg-blue-400 mt-3' type="button" onClick={(e)=>handleClickAbout(e)}>Add</button>
              <div className='flex justify-end px-6'>
                <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(1)}>Previous</button>
                
                <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform + 1)}>Next</button>
            </div>
              <About abtData = {resumeinfo.about}/> 
          </div>
          
{/*Hobbies */}
          <div className={`flex flex-col ${displayform===5?'block':'hidden'}`}>
              <h1 className='text-4xl text-slate-900 self-center font-Poppins'>Hobbies/Intersest</h1>
              <input className='h-12  p-2 border-b-2 border-blue-500 outline-none ' type="text" name="Hobbies" id="Hobbies"onChange={(e)=>setHobbies(e.target.value)} />
              <button className='bg-none text-xl font-Outfit hover:text-white border-2 border-blue-500 px-6 py-4 rounded-md hover:bg-blue-400 mt-3' type="button" onClick={(e)=>handleClickHobby(e)}>Add</button>
              <div className='flex justify-end px-6'>
                <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform - 1)}>Previous</button>
              
                <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(5)}>Next</button>
            </div>
              <Hobbies hobbiesData={resumeinfo.hobbies} deleteHobby={deleteHobby}/>
          </div>
        </div>
        
      </form>
    </div>
  )
}

export default form
