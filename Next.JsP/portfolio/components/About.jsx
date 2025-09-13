import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-16 scroll-mt-20">

            <h4 className="mb-2 text-lg font-ovo text-gray-600 text-center">
                Introduction</h4>
            <h2 className="text-4xl sm:text-5xl font-ovo font-semibold text-gray-700 text-center">
                About Me
            </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-20 mt-16">
            <div className="w-64 sm:w-80 lg:w-[22rem] rounded-3xl overflow-hidden shadow-lg flex-shrink-0">
                <Image
                src={assets.user_image} alt="user"
                className="w-full h-full rounded-3xl object-cover" />
            </div>

            <div className="flex-1 flex flex-col justify-center lg:text-left">
                <p className="mb-10 max-w-2xl mx-auto lg:mx-0 font-ovo text-gray-700 leading-relaxed text-center">
                    I am a fresher Full Stack Developer with over 1 year of professional
                    expertise in the field. Throughout my career, I have demonstrated a
                    strong ability to adapt and learn new technologies quickly. I am
                    passionate about building efficient and scalable web applications that
                    deliver exceptional user experiences.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0 ">
                    {infoList.map(({ icon, title, description }, index) => (
                        <li
                            key={index}
                            className="border border-gray-400 rounded-xl p-6 cursor-pointer
                                hover:bg-[#daebe8] hover:shadow-[4px_4px_0px_0px_#000000] 
                                hover:-translate-y-1 duration-500" >
                            <Image src={icon} alt={title} className="w-7 mt-2" />
                            <h3 className="my-3 font-semibold text-gray-800">{title}</h3>
                            <p className="text-gray-600 text-sm">{description}</p>
                        </li>
                    ))}
                </ul>

                <h4 className='my-6 text-gray-700 font-ovo text-center'>Tools I use</h4>

                <ul className='flex items-center justify-center lg:justify-start gap-3 sm:gap-5'>
                    {toolsData.map(( tool, index ) => (
                        <li key={index} className="flex items-center justify-center w-12 sm:w-16 aspect-square 
                        border border-gray-400 rounded-lg p-2 cursor-pointer hover:-translate-y-1 duration-500">
                            <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                        </li>
                    ))}
                </ul>
            </div>
         </div>

    </div>
  )
}

export default About;
