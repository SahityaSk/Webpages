import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
        <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog!</h1>
        <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get the latest Blog, Tech news and many more..</p>
        <form className='flex items-center w-full max-w-2xl h-12 md:h-13'>
        <input type="text"
          className='border border-gray-300 rounded-l-md h-full outline-none w-full px-3 text-gray-500'
          placeholder='Enter Your Email Id'
          required/>
        <button type="submit"
          className="flex items-center gap-2 rounded-r-md text-lg cursor-pointer bg-yellow-400 text-white px-6 h-full hover:scale-105 transition-all">
          Subscribe
        </button>
        </form>
    </div>

  )
}

export default Newsletter;
