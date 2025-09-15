import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, []);

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt="" className='w-full'/>
    </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll ? 'bg-white/30 bg-opacity-50 backdrop-blur-lg shadow-sm' : ''}`}>
        <a href="#top">
            <Image src={assets.logo} alt=""
            className='w-36 cursor-pointer mr-14'/>
        </a>
        <ul className={`hidden md:flex items-center gap-4 md:gap-6 lg:gap-8 rounded-full px-6 md:px-8 lg:px-10 py-2 md:py-3 
            ${isScroll ? "" : "bg-white shadow-md bg-opacity-50 backdrop-blur-sm"}`}>
            <li><a className="font-ovo text-sm md:text-sm lg:text-base" href="#top">Home</a></li>
            <li><a className="font-ovo text-sm md:text-sm lg:text-base" href="#about">About Me</a></li>
            <li><a className="font-ovo text-sm md:text-sm lg:text-base" href="#services">Services</a></li>
            <li><a className="font-ovo text-sm md:text-sm lg:text-base" href="#work">My Work</a></li>
            <li><a className="font-ovo text-sm md:text-sm lg:text-base" href="#contact">Contact Me</a></li>
        </ul>


        <div className='flex items-center gap-4 md:ml-4'>

            <button onClick={()=>setIsDarkMode(prev => !prev)}>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='w-6 cursor-pointer'/>
            </button>

            <a href="#contact"
                className="flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-2 sm:py-3 
                border border-black rounded-full ml-2 sm:ml-4 text-sm sm:text-base font-Ovo">
                    Contact
                    <Image src={assets.arrow_icon} alt="" className="w-3 sm:w-4 cursor-pointer" />    
            </a>

            <button onClick={openMenu} className='block md:hidden ml-2 sm:ml-4'>
                <Image src={assets.menu_black} alt="" className='w-6 cursor-pointer'/>
            </button>

        </div>

        {/* Mobile Menu - to be implemented */}

         <ul ref={sideMenuRef} className='md:hidden fixed gap-4 py-20 px-10 flex flex-col -right-64 top-0 bottom-0 w-64 h-screen bg-rose-50 transition duration-500'>
            <div className='absolute top-6 right-6' onClick={closeMenu}>
                <Image src={assets.close_black} alt="" className='w-5 cursor-pointer'/>
            </div>
            <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a></li>
         </ul>

      </nav>
    </>
  )
}

export default Navbar;
