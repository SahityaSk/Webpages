import React from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import List from '../components/List';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <List/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home;
