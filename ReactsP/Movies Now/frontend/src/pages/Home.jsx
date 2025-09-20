import React from 'react'
import MovieSlider from '../components/MovieSlider';
import FeaturedSection from '../components/FeaturedSection';
import MovieCard from '../components/MovieCard';
import TrailerSection from '../components/TrailerSection';

const Home = () => {
  return (
    <>
      <MovieSlider/>
      <FeaturedSection/>
      <TrailerSection/>
    </>
  )
}

export default Home;
