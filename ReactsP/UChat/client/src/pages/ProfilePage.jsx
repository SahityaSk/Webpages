import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets';

const ProfilePage = () => {

  const [selectedImage, setSelectedImage] = useState(null)
  const navigate = useNavigate();
  const [name, setName] = useState("Rishav Biswas")
  const [bio, setBio] = useState("Hi everyone, I am using UChat.")

  const handleSubmit = async(e)=>{
    e.preventDefault();
    navigate('/')
  }

  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-1 border-red-200
      flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
        <form onSubmit={handleSubmit}
          className='flex flex-col gap-5 p-10 flex-1'>
          <h3 className='text-lg'>Profile Details</h3>
          <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
            <input onChange={(e)=>setSelectedImage(e.target.files[0])} 
              type="file" id='avatar' accept='.png, .jpg, .jepg' hidden />
            <img src={selectedImage ? URL.createObjectURL(selectedImage) : assets.avatar_icon} alt="" 
              className={`w-12 h-12 ${selectedImage && 'rounded-full'}`}/>
            Upload Profile Image
          </label>
          <input onChange={(e)=>setName(e.target.value)} value={name}
            type="text" required placeholder='Your Name'
            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-red-200'/>
          <textarea onChange={(e)=>setBio(e.target.value)} value={bio}
            placeholder='Write profile bio' required rows={4}
            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-red-200'>
          </textarea>
          <button type='submit'
          className='p-2 bg-gradient-to-r from-gray-200 to-red-400 text-gray-800 font-medium rounded-full cursor-pointer'>
            Save</button>
        </form>
        <img className='max-w-50 rounded-full mx-10 max-sm:mt-10'
        src={assets.logo} alt="" />
      </div>
    </div>
  )
}

export default ProfilePage;

