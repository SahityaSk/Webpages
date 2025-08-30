import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <img onClick={() => navigate('/')} src={assets.logo} alt="logo" className="w-24 sm:w-44 cursor-pointer"/>
      <button onClick={() => navigate('/admin')} className="flex items-center gap-2 rounded-full text-lg cursor-pointer bg-yellow-400 text-white px-6 py-2 rounded hover:scale-105 transition-all">
        Login 
        <img src={assets.arrow} alt="arrow" className="w-3" />
      </button>
    </div>
  )
}

export default Navbar;
