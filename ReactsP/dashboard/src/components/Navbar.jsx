import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-centre py-5 mx-8  sm:mx-20 xl:mx-32'>
        <img src={assets.logo} alt="logo" className='w-22 sm:w-44' />
        <button>
            Login
            <img src={assets.arrow} alt="arrow" className='w-3'/>
        </button>
    </div>
  )
}

export default Navbar;
