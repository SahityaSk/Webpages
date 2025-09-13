import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col justify-center items-center gap-4'>
  
      <Image src={assets.profile_img} alt='' 
        className='rounded-full w-32 mx-auto' />

      <h3 className='flex justify-center items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm Sahitya Sk 
        <Image src={assets.hand_icon} alt='' className='w-6' />
      </h3>

      <h1 className='text-3xl sm:text-4xl lg:text-[66px] font-ovo mb-4'>
        A Full Stack web developer based in India.
      </h1>

      <p className='max-w-2xl mx-auto font-Ovo'>
        I am a passionate and dedicated full-stack web developer with expertise
        in both front-end and back-end technologies. I love creating dynamic and
        responsive web applications that provide seamless user experiences
      </p>

      <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-4'>
        <a href="#contact" 
          className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'> 
          Contact Me 
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </a>

        <a href="/sample-resume.pdf" download 
          className='px-10 py-2 border rounded-full border-gray-500 flex items-center gap-2'> 
          My Resume 
          <Image src={assets.download_icon} alt='' className='w-4' />
        </a>
      </div>
    </div>

  )
}

export default Header;
