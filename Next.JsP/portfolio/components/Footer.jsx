import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20 bg-gray-100'>
      <div className='w-full text-center py-6'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center justify-center gap-2 text-center mx-auto text-gray-600'>
            <Image src={assets.mail_icon} alt='' className='w-6 mx-auto'/>
            sahitya.sk913181@gmail.com
        </div>
      </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-6 px-4 text-gray-600'>
            <p>@ 2025 Sahitya Sk. All rights reserved.</p>
            <ul className='flex items-center justify-center gap-6 mt-4 sm:mt-0 text-gray-600'>
                <li><a target='_blank' href="https://github.com/SahityaSk">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/sahitya-sk-7986b4325/">LinkedIn</a></li>
                <li><a target='_blank' href="https://www.facebook.com/sahitya.sk.3/">Facebook</a></li>
                <li><a target='_blank' href="https://www.instagram.com/absorbing_man_12/">Instagram</a></li>
            </ul>
        </div>  

    </div>
  )
}

export default Footer;
