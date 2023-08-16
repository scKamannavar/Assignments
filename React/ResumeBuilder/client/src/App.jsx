import { useState } from 'react'
import './App.css'
import Resume from './components/Resume'
import Form from './components/form'
import ResumeData from './data/info'
import Experience from './components/Experience'


function App() {
  
  const [skills, setSkills] = useState(ResumeData.skills)
  const [education, setEducation] = useState(ResumeData.education)
  const [experience, setExperience] = useState(ResumeData.experience)

  function updateSkill(additionalData){
      setSkills([...skills, additionalData])
    }

    function updateEdu(additionalData){
      setEducation([...education, additionalData])
    }

    function updateExp(additionalData){
      setExperience([...experience, additionalData])
    }
  return (
    <>
      <Form addSkill = {updateSkill} addEdu = {updateEdu} addExp = {updateExp}/>
      <Resume skillData={skills} eduData={education} expData = {experience}/>
      
    </>
  )
}

export default App
