import { useState } from 'react'
import './App.css'
import Resume from './components/Resume'
import Form from './components/form'
import ResumeData from './data/info'
import Experience from './components/Experience'
import Design1 from './components/design1'


function App() {
//  console.log('Hobbies', ResumeData)
const [resumeinfo, setResumeinfo] = useState(ResumeData)
  const [skills, setSkills] = useState(ResumeData.skills)
  const [education, setEducation] = useState(ResumeData.education)
  const [experience, setExperience] = useState(ResumeData.experience)
  const [about, setAbout] = useState(ResumeData.about)
  const [hobbies, setHobbies] = useState(ResumeData.hobbies)

  const[printDesign, setPrintdesign] = useState(0)

  function addSkill(additionalData){
      setSkills([...skills, additionalData])
    }

    function addEdu(additionalData){
      setEducation([...education, additionalData])
    }

    function addExp(additionalData){
      setExperience([...experience, additionalData])
    }

    function addAbt(additionalData){
      setAbout(additionalData)
    }

    function addHobbies(additionalData){
      // console.log('New hobby in app component', additionalData)
      setHobbies([...hobbies, additionalData])
    }

    function deleteSkill(skillId){
      setSkills(skills.filter((skill)=> skill !== skillId))
    }
  return (
    <>
      <Form 
        addSkill = {addSkill}
        addEdu = {addEdu} 
        addExp = {addExp} 
        addAbt = {addAbt} 
        addHobbies={addHobbies} 
        skillData={skills} 
        eduData={education} 
        expData = {experience}
        abtData={about}
        hobbiesData={hobbies} 
        // resumeinfo = {resumeinfo}
        deleteSkill={deleteSkill}
         
         />
      <div className='flex justify-center p-4 print:hidden'>
          <input type="button" value="Print" onClick={()=>{window.print()}} className='bg-none border-2 border-blue-700 text-2xl px-4 py-2 text-black hover:text-white hover:bg-blue-700 rounded-xl'  />
      </div>
      <div className={`hidden ${printDesign === 1? 'print:block ':'print:hidden '} `}>
        <Resume skillData={skills} eduData={education} expData = {experience} abtData={about} hobbiesData={hobbies} deleteSkill={deleteSkill}></Resume>
      </div>
      <div className={`hidden ${printDesign === 2? 'print:block ':'print:hidden '} `}>
        <Design1/>
      </div>
      
      <div className='flex justify-around print:hidden'>
          <div className={`flex justify-center items-center w-48 h-48 bg-blue-100 hover:bg-blue-400 ${printDesign === 1 ? 'border border-blue-600':''} `} onClick={()=>setPrintdesign(1)}>
              Design 1
          </div>
          <div className={`flex justify-center items-center w-48 h-48 bg-blue-100 hover:bg-blue-400 ${printDesign === 2 ? 'border border-blue-600':''} `} onClick={()=>setPrintdesign(2)}>
              Design 2
          </div>
      </div>
      
    </>
  )
}

export default App
