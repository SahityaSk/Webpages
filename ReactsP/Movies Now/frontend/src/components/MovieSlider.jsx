"use client";
import { useState, useEffect } from "react";
import { CalendarIcon, ClockIcon, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets"; 
import { useNavigate } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Demon Slayer:\nKimetsu no Yaiba\nInfinity Castle",
    bg: "/demonslayer.png",
    logo: assets.demonSlayerLogo,
    genres: "Action | Adventure | Anime | UA13+",
    year: "2025",
    duration: "2h 35m",
    description: "The Demon Slayer Corps plunge into Infinity Castle to defeat Muzan. However, the remaining Hashiras and the Demon Slayers who survived Tanjiro's Final Selection are pitted against the remaining members of the Twelve Kizuki first.",
  },
  {
    id: 2,
    title: "The Conjuring\n Last Rites",
    bg: "/conjuring.png",
    genres: "Thriller | Adventure | Horror | A",
    year: "2025",
    duration: "2h 15m",
    description: "Ed and Lorraine Warren face their most haunting and dangerous case yet, as they confront sinister entities that threaten to unravel everything they hold dear.",
  },
  {
    id: 3,
    title: "Avengers\nDoomsday",
    bg: "/Doomsday.png",
    logo: assets.marvelLogo,
    genres: "Action | Adventure | Sci-Fi | UA13+",
    year: "2026",
    duration: "2h 45m",
    description: "Doomsday will very loosely adapt Avengers, Infinity and New Avengers run which includes whole Builder wars, Incursions, Time Runs Out and whole destruction of multiverse plot.",
  },
  {
    id: 4,
    title: "Inception",
    bg: "/inception.png",
    genres: "Action | Sci-Fi | Adventure | Thriller | A",
    year: "2010",
    duration: "2h 38m",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
  },
  {
    id: 5,
    title: "Jurassic World :\n Fallen Kingdom",
    bg: "/jurassic_world.png",
    logo: assets.jurassicLogo,
    genres: "Action | Sci-Fi | UA13+",
    year: "2015",
    duration: "2h 4m",
    description: "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.",
  },
];

const MovieSlider = () => {

  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const nextMovie = () => setIndex((prev) => (prev + 1) % movies.length);
  const prevMovie = () => setIndex((prev) => (prev - 1 + movies.length) % movies.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextMovie();
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const movie = movies[index];

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={movie.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.bg})` }}>
          <img src={movie.logo} alt='' className="max-h-16 lg:h-20 mt-20" />
          <h1 className="text-4xl md:text-6xl md:leading-tight font-semibold max-w-3xl text-white drop-shadow-lg whitespace-pre-line">
            {movie.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-200">
            <span>{movie.genres}</span>
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-5 h-5" /> {movie.year}
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="w-5 h-5" /> {movie.duration}
            </div>
          </div>

           <p className="max-w-md text-gray-300 mb-3">{movie.description}</p>

          <button onClick={()=> navigate('/movies')}
          className="flex items center gap-2 px-6 py-4 text-sm bg-red-400
          hover:scale-105 transition rounded-full font-medium cursor-pointer">
            Explore Movies
            <ArrowRight className="w-5 h-5"/>
          </button>

        </motion.div>
      </AnimatePresence>

      <button onClick={prevMovie}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70">
        <ChevronLeft />
      </button>
      <button onClick={nextMovie}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70">
        <ChevronRight />
      </button>
    </div>
  );
};

export default MovieSlider;

