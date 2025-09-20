import { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'
import ReactPlayer from 'react-player'

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-44 py-10 sm:py-16 md:py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg mx-auto max-w-[960px]">
        Trailers
      </p>

      <div className="relative mt-6 flex justify-center">
        <BlurCircle top="-100px" right="-100px" />
        <div className="w-full max-w-[960px] aspect-video">
          <ReactPlayer url={currentTrailer.videoUrl} 
            controls width="100%" height="100%"
            className="rounded-lg overflow-hidden"/>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mt-8">
        {dummyTrailers.map((trailer) => (
          <div key={trailer.image}
            onClick={() => setCurrentTrailer(trailer)}
            className="relative cursor-pointer transition-transform duration-300 hover:-translate-y-1 group">
            <img src={trailer.image} alt="trailer"
              className="rounded-lg w-full h-full object-cover brightness-75" />
            <PlayCircleIcon strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-8 h-8 md:w-12 md:h-12 transform -translate-x-1/2 -translate-y-1/2 opacity-80 group-hover:opacity-100 transition"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrailerSection;
