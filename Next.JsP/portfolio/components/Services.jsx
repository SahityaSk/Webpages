import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const Services = () => {
  return (
    <div className="w-full px-[12%] py-16 scroll-mt-20" id="services">
        <h4 className="mb-2 text-lg font-ovo text-gray-600 text-center">
            What I Offer? </h4>
        <h2 className="text-4xl sm:text-5xl font-ovo font-semibold text-gray-700 text-center">
            Services
        </h2>

        <p className='text-center max-w-2xl mx-auto mt-6 mb-12 font-Ovo text-gray-700'> 
            I am a passionate and dedicated full-stack web developer with expertise
            in both front-end and back-end technologies.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
            {serviceData.map(({ icon, title, description, link }, index) => (
                <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer
                    hover:bg-[#daebe8] hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-y-1 duration-500">
                    <Image src={icon} alt='' className="w-10"/>
                    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>
                        {description}
                    </p>
                    <a href={link} className='flex items-center justify-center gap-2 text-sm mt-5'>
                        Read more <Image src={assets.right_arrow} alt='' className='w-4'/>
                    </a>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Services;
