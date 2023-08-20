import { useState } from 'react'
import './App.css'
import Resume from './components/Resume'
import Form from './components/form'
import ResumeData from './data/info'
import Experience from './components/Experience'


function App() {
//  console.log('Hobbies', ResumeData)
  const [skills, setSkills] = useState(ResumeData.skills)
  const [education, setEducation] = useState(ResumeData.education)
  const [experience, setExperience] = useState(ResumeData.experience)
  const [about, setAbout] = useState(ResumeData.about)
  const [hobbies, setHobbies] = useState(ResumeData.hobbies)

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
      console.log('New hobby in app component', additionalData)
      setHobbies([...hobbies, additionalData])
    }

    function deleteSkill(skillId){
      setSkills(skills.filter((skill)=> skill !== skillId))
    }
  return (
    <>
      <Form addSkill = {addSkill} addEdu = {addEdu} addExp = {addExp} addAbt = {addAbt} addHobbies={addHobbies}/>
      <div className='flex justify-center p-4 print:hidden'>
          <input type="button" value="Print" onClick={()=>{window.print()}} className='bg-none border-2 border-blue-700 text-2xl px-4 py-2 text-black hover:text-white hover:bg-blue-700 rounded-xl'  />
      </div>
      <div className="hidden print:block">
        <Resume skillData={skills} eduData={education} expData = {experience} abtData={about} hobbiesData={hobbies} deleteSkill={deleteSkill}></Resume>
      </div>
      
    </>
  )
}

export default App
