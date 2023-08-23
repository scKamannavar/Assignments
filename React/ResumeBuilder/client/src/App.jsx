import { useState, useEffect } from 'react'
import './App.css'
import Resume from './components/Resume'
import Form from './components/form'
import ResumeData from './data/info'
import Experience from './components/Experience'
import Design1 from './components/design1'
import Design2 from './components/design2'


function App() {
//  console.log('Data from app', ResumeData)
// const [resumeinfo, setResumeinfo] = useState(ResumeData)  

const template = {
  experience : [],
  education:[],
  skills : [],
  about : {
    aboutText : '',
    phone : '',
    email : '',
    name : '',
  },
  hobbies : [],
  }
  var storedResumeData = localStorage.getItem('resumeData');
  console.log('storedResumeData',storedResumeData)
   if (storedResumeData == null) {
     // const initialResumeData = template;
     localStorage.setItem('resumeData', JSON.stringify(template));
     console.log('template', template)
   }
   const [resumeinfo, setResumeinfo] = useState(JSON.parse(storedResumeData))
 

  // useEffect(() => {
  //   if (typeof localStorage !== 'undefined') {
  //      storedResumeData = localStorage.getItem('resumeData');
  //     if (!storedResumeData) {
  //       // const initialResumeData = template;
  //       localStorage.setItem('resumeData', JSON.stringify(template));
  //       console.log('template', template)
  //     }
  
  //   }
  // }, []);
 
  // const [resumeinfo, setResumeinfo] = useState(template)
  // const [skills, setSkills] = useState(ResumeData.skills)
  // const [education, setEducation] = useState(ResumeData.education)
  // const [experience, setExperience] = useState(ResumeData.experience)
  // const [about, setAbout] = useState(ResumeData.about)
  // const [hobbies, setHobbies] = useState(ResumeData.hobbies)

  const[printDesign, setPrintdesign] = useState(0)
 
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('resumeData'));
  //   // alert(items)
  //   if (items) {
  //     setResumeinfo(items);
  //   }
  // },[]  );

  useEffect(() => {
        localStorage.setItem('resumeData', JSON.stringify(resumeinfo));
  },[resumeinfo]);
  // var items
  // useEffect(() => {
  //     const items = JSON.parse(localStorage.getItem('resumeData'));
  //     setResumeinfo(items); 
  // }, []);


  // localStorage.setItem('resumeData', JSON.stringify(resumeinfo));
      

  
    //add-------------------------------------------------------------------------------------------------
  function addSkill(additionalData){
    // setResumeinfo([...resumeinfo.skills, additionalData])
    setResumeinfo({...resumeinfo,skills:[...resumeinfo.skills,additionalData]})
        // localStorage.setItem('items', JSON.stringify({ResumeData}));  
    }

    function addEdu(additionalData){
      // setEducation([...resumeinfo.education, additionalData])
      setResumeinfo({...resumeinfo,education:[...resumeinfo.education,additionalData]})
    }

    function addExp(additionalData){
      // setExperience([...resumeinfo.experience, additionalData])
      setResumeinfo({...resumeinfo,experience:[...resumeinfo.experience,additionalData]})
    }

    function addAbt(additionalData){
      // setAbout(additionalData)
      setResumeinfo({...resumeinfo,about:additionalData})
    }

    function addHobbies(additionalData){
      // console.log('New hobby in app component', additionalData)
      setResumeinfo({...resumeinfo,hobbies:[...resumeinfo.hobbies,additionalData]})
    }
    //delete--------------------------------------------------------------------------------------------
    function deleteSkill(skillId){
      // setSkills(skills.filter((skill)=> skill !== skillId))
      const orignalArray = resumeinfo.skills
      const updatedArray = [...orignalArray];
      updatedArray.splice(skillId, 1)
      setResumeinfo({...resumeinfo,skills :updatedArray})
    } 

    function deleteExp(id){
      // setSkills(skills.filter((skill)=> skill !== skillId))
      setResumeinfo({...resumeinfo,experience:resumeinfo.experience.filter((exp)=> exp.id !== id)})
    }

    function deleteEdu(id){
      setResumeinfo({...resumeinfo,education:resumeinfo.education.filter((edu)=> edu.id !== id)})
    }

    function deleteHobby(id){
      const orignalArray = resumeinfo.hobbies
      const updatedArray = [...orignalArray];
      updatedArray.splice(id, 1)
      setResumeinfo({...resumeinfo,hobbies :updatedArray})
    }
  return (
    <>
      <Form 
        addSkill = {addSkill}
        addEdu = {addEdu} 
        addExp = {addExp} 
        addAbt = {addAbt} 
        addHobbies={addHobbies} 
        // skillData={skills} 
        // eduData={education} 
        // expData = {experience}
        // abtData={about}
        // hobbiesData={hobbies} 
        resumeinfo = {resumeinfo}
        deleteSkill={deleteSkill}
        deleteExp = {deleteExp}
        deleteEdu = {deleteEdu}
        deleteHobby = {deleteHobby}
         
         />

      <div className={`hidden ${printDesign === 1? 'print:block ':'print:hidden '} `}>
        {/* <Resume skillData={skills} eduData={education} expData = {experience} abtData={about} hobbiesData={hobbies} deleteSkill={deleteSkill}></Resume> */}
      </div>
      <div className={`hidden ${printDesign === 2? 'print:block ':'print:hidden '} `}>
        <Design1 resumeinfo = {resumeinfo}/>
      </div>
      <div className={`hidden ${printDesign === 3? 'print:block ':'print:hidden '} `}>
        <Design2 resumeinfo = {resumeinfo}/>
      </div>
      
      <div className=' h-full py-28 print:hidden'>
        <div className='flex justify-center p-6 text-4xl'>
          <h1>Select a design</h1>
        </div>
        <div className='flex justify-center items-start'>
          {/* <div className={`flex justify-center items-center w-48 h-48 bg-blue-100 hover:bg-blue-400 ${printDesign === 1 ? 'border border-blue-600':''} `} onClick={()=>setPrintdesign(1)}>
                Design 1
          </div> */}
          <div className={`flex justify-center items-center w-48 h-48 bg-blue-100 rounded-md shadow-xl hover:bg-blue-400 mr-10 ${printDesign === 2 ? 'border border-blue-600 bg-blue-400':''} `} onClick={()=>setPrintdesign(2)}>
              Design 2
          </div>
          <div className={`flex justify-center items-center w-48 h-48 bg-blue-100 rounded-md shadow-xl hover:bg-blue-400 ${printDesign === 3 ? 'border border-blue-600 bg-blue-400':''} `} onClick={()=>setPrintdesign(3)}>
              Design 3
          </div>
        </div>
        <div className='flex justify-center p-4 print:hidden'>
          <input type="button" value="Print" onClick={()=>{window.print()}} className='bg-none border-2 border-blue-700 text-2xl px-4 py-2 text-black hover:text-white hover:bg-blue-700 rounded-xl'  />
      </div>
      </div>
     

    </>
  )
}

export default App
