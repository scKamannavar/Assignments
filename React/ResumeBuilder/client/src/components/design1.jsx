import React from 'react'

const design1 = () => {
  return (
    <div className='flex flex-col justify-start font-serif'>
      <div className='flex-1 border-slate-600 border-b'>
        <h1 className='text-4xl'>Sagar c Kamannavar</h1>
      </div>
      <div className='py-2'>
        <h1 className='font-semibold'>Gmail : <span className='font-normal'>sagarck08@gmail.com</span></h1>
        <h1 className='font-semibold'>Contact : <span className='font-sans font-normal'>8150903238</span></h1>
      </div>
      {/* About/Objective */}
      <div className='py-2'>
        <h1 className='font-semibold text-2xl'>About:</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur recusandae animi voluptatum? Illum voluptatibus nihil perspiciatis, et omnis alias explicabo repellat aspernatur facere, commodi earum animi ipsa neque voluptatem?</p>
      </div>
      {/* Experience */}
      <div className='py-2'>
            <h1 className='font-semibold text-2xl'>Experience:</h1>
            <div className='flex py-2 text-1xl'>
                <h1 className='flex-1 font-semibold'>Software Developer</h1>
                <h1 className='flex-1 font-semibold'>CubucCode Digital Media </h1>
                <h1 className='flex-1 font-semibold'>2019 -2018</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita, nesciunt laborum veniam soluta quibusdam debitis non quod, animi laudantium, consequuntur velit ipsum cupiditate! Perspiciatis mollitia voluptatem dicta? Excepturi, ab?</p>
            
            <div className='flex py-2 text-1xl'>
                <h1 className='flex-1 font-semibold'>Software Developer</h1>
                <h1 className='flex-1 font-semibold'>CubucCode Digital Media </h1>
                <h1 className='flex-1 font-semibold'>2019 -2018</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita, nesciunt laborum veniam soluta quibusdam debitis non quod, animi laudantium, consequuntur velit ipsum cupiditate! Perspiciatis mollitia voluptatem dicta? Excepturi, ab?</p>            
      
            <div className='flex py-2 text-1xl'>
                <h1 className='flex-1 font-semibold'>Software Developer</h1>
                <h1 className='flex-1 font-semibold'>CubucCode Digital Media </h1>
                <h1 className='flex-1 font-semibold'>2019 -2018</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita, nesciunt laborum veniam soluta quibusdam debitis non quod, animi laudantium, consequuntur velit ipsum cupiditate! Perspiciatis mollitia voluptatem dicta? Excepturi, ab?</p>
      </div>
        {/* Education */}
        <div className='py-2'>
            <h1 className='font-semibold text-2xl '>Education:</h1>
            <div className='flex'>
                <div className='w-4 flex justify-start pt-2'>
                ●
                </div>

                <div className='flex-1'>
                    <div className='flex pt-2 text-1xl'>
                        <h1 className='flex-1 '>Jain College of Engineering, Belagavi</h1>
                        <h1 className='flex-1 '>2013-2020</h1>
                    </div>
                    <div className='flex pt-2 text-1xl'>
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
                    <div className='flex pt-2 text-1xl'>
                        <h1 className='flex-1 '>Jain College of Engineering, Belagavi</h1>
                        <h1 className='flex-1 '>2013-2020</h1>
                    </div>
                    <div className='flex pt-2 text-1xl'>
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
                    <div className='flex pt-2 text-1xl'>
                        <h1 className='flex-1 '>Jain College of Engineering, Belagavi</h1>
                        <h1 className='flex-1 '>2013-2020</h1>
                    </div>
                    <div className='flex pt-2 text-1xl'>
                        <h1 className='flex-1 '>BAchelors of Engineering</h1>
                        <h1 className='flex-1 '>7.8 CGPA</h1>
                    </div>
                </div>
            </div>
      </div>
      <div className='flex flex-col'>{/* skills */}
        <h1 className='font-semibold text-2xl '>Skills:</h1>
        <div className='flex flex-1'>
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
      <div className='flex flex-col'>{/* Hobbies */}
        <h1 className='font-semibold text-2xl '>Hobbies/Interests:</h1>
        <div className='flex flex-1'>
            <div className='bg-gray-200 rounded-full py-1 px-2 mr-2'>
                Basketball
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
  )
}

export default design1
