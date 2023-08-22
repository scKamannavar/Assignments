import React from 'react'

const design2 = ({skillData, eduData, expData, abtData, hobbiesData, deleteSkill}) => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-1 '>
        <div className='flex flex-1 h-[150px] items-center  '>
               <h1 className='text-6xl'> Sagar William</h1>
        </div>
        <div className='flex flex-col items-start justify-center w-[220px] '>
            <h1 className='font-semibold'>Gmail : <span className='font-normal'>sagarck08@gmail.com</span></h1>
            <h1 className='font-semibold'>Contact : <span className='font-sans font-normal'>8150903238</span></h1>
        </div>
      </div>
      <div className=' flex flex-1 '>
        <div className='w-[230px] border-r-2 '>{/*  first column */}
            <div className='pb-2'>{/*  education */}
                <h1 className='font-semibold text-2xl '>Education:</h1>
                <div className='flex'>
                    <div className='w-4 flex justify-start pt-2'>
                    ●
                    </div>

                    <div className='flex-1'>
                        <div className='flex flex-col pt-2 text-1xl'>
                            <h1 className='flex-1 '>Jain College of Engineering</h1>
                            <h1 className='flex-1 '>2013-2020</h1>
                        </div>
                        <div className='flex flex-col pt-2 text-1xl'>
                            <h1 className='flex-1 '>BAchelors of Engineering</h1>
                            <h1 className='flex-1 '>7.8 CGPA</h1>
                        </div>
                    </div>
                </div> 
                <div className='flex'>
                    <div className='w-4 flex justify-start pt-2'>
                    ●
                    </div>

                    <div className='flex-1'>
                        <div className='flex flex-col pt-2 text-1xl'>
                            <h1 className='flex-1 '>Jain College of Engineering</h1>
                            <h1 className='flex-1 '>2013-2020</h1>
                        </div>
                        <div className='flex flex-col pt-2 text-1xl'>
                            <h1 className='flex-1 '>BAchelors of Engineering</h1>
                            <h1 className='flex-1 '>7.8 CGPA</h1>
                        </div>
                    </div>
                </div>  
            </div>

            <div className='pb-2'> {/* Skills */}
                <h1 className='font-semibold text-2xl '>Skills:</h1>
                <div className='flex flex-col flex-wrap'>
                    <div className='bg-gray-200 rounded-full py-1 px-2 mr-2'>
                        HTML
                    </div>
                    <div className='bg-gray-200 rounded-full py-1 px-2 mr-2'>
                        Javascript
                    </div>
                    <div className='bg-gray-200 rounded-full py-1 px-2 mr-2'>
                        Photoshop
                    </div>
                    <div className='bg-gray-200 rounded-full py-1 px-2 mr-2'>
                        Hardworking
                    </div>
                </div>
            </div>

            <div className='pb-2'> {/* Interests */}
                <h1 className='font-semibold text-2xl '>Interests:</h1>
                <div className='flex flex-col flex-wrap'>
                    <div className='bg-gray-200 rounded-full py-1 px-2 mr-2'>
                        HTML
                    </div>
                    <div className='bg-gray-200 rounded-full py-1 px-2 mr-2'>
                        Javascript
                    </div>
                    <div className='bg-gray-200 rounded-full py-1 px-2 mr-2'>
                        Photoshop
                    </div>
                    <div className='bg-gray-200 rounded-full py-1 px-2 mr-2'>
                        Hardworking
                    </div>
                </div>
            </div>
            
        </div>
        {/* Second Column */}
        {/* About */}
        <div className='flex-auto w-10 pl-6'>
            <div className='py-2'>
                <h1 className='font-semibold text-2xl'>About:</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur recusandae animi voluptatum? Illum voluptatibus nihil perspiciatis, et omnis alias explicabo repellat aspernatur facere, commodi earum animi ipsa neque voluptatem?</p>
            </div>

             {/* Experience */}
            <div className='py-2'>
                    <h1 className='font-semibold text-2xl py-2'>Experience:</h1>
                    <div className='flex flex-col pt-2'>
                        <h1 className='flex-1 font-semibold'>Software Developer</h1>
                        <div className='flex  text-1xl'>                       
                            <h1 className='flex-1 font-semibold'>CubucCode Digital Media </h1>
                            <h1 className='flex-1 font-semibold'>2019 -2018</h1>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita, nesciunt laborum veniam soluta quibusdam debitis non quod, animi laudantium, consequuntur velit ipsum cupiditate! Perspiciatis mollitia voluptatem dicta? Excepturi, ab?</p>
                    
                     <div className='flex flex-col pt-2'>
                        <h1 className='flex-1 font-semibold'>Software Developer</h1>
                        <div className='flex  text-1xl'>                       
                            <h1 className='flex-1 font-semibold'>CubucCode Digital Media </h1>
                            <h1 className='flex-1 font-semibold'>2019 -2018</h1>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita, nesciunt laborum veniam soluta quibusdam debitis non quod, animi laudantium, consequuntur velit ipsum cupiditate! Perspiciatis mollitia voluptatem dicta? Excepturi, ab?</p>

                    <div className='flex flex-col pt-2'>
                        <h1 className='flex-1 font-semibold'>Software Developer</h1>
                        <div className='flex  text-1xl'>                       
                            <h1 className='flex-1 font-semibold'>CubucCode Digital Media </h1>
                            <h1 className='flex-1 font-semibold'>2019 -2018</h1>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita, nesciunt laborum veniam soluta quibusdam debitis non quod, animi laudantium, consequuntur velit ipsum cupiditate! Perspiciatis mollitia voluptatem dicta? Excepturi, ab?</p>
            </div>
        </div>
       
      </div>
    </div>
  )
}

export default design2
