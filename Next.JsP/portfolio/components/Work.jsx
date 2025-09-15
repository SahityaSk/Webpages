import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const Work = () => {
  return (
    <div className="w-full px-[12%] py-16 scroll-mt-20" id="work">
      <h4 className="mb-2 text-lg font-ovo text-gray-600 text-center">
           My Portfolio </h4>
        <h2 className="text-4xl sm:text-5xl font-ovo font-semibold text-gray-700 text-center">
            My latest works
        </h2>

        <p className='text-center max-w-2xl mx-auto mt-6 mb-12 font-Ovo text-gray-700'> 
            Welcome to my Web Development Portfolio! Here, you'll find a curated selection of my latest projects that 
            showcase my skills and expertise as a full-stack web developer. Each project reflects my commitment to delivering high-quality, 
            user-centric solutions that meet the unique needs of clients across various industries.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>

            {/* Project Cards */}
            {workData.map(( project, index )=>(
                <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' 
                  style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between
                           group-hover:bottom-7 duration-500'>
                        <div>
                          <h2 className='font-semibold'>{project.title}</h2>
                          <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-lg border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_0px_#000000] group-hover:bg-[#FFCC00] transition'>
                          <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                          <a href={project.link}></a>
                        </div>
                    </div>
                </div> 
            ))}
        </div>

        <a href="" className='w-max flex items-center jusify-center py-3 px-10 mx-auto my-20 gap-2 text-gray-700 font-ovo
         border-1 border-gray-700 rounded-full hover:bg-[#daebe8] hover:text-black duration-500'>
          Show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4 inline'/>
        </a>

    </div>
  )
}

export default Work;
