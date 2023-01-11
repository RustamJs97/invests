import React from 'react'
import Portfolio from '../../components/Home/Portfolio';
import Texno from '../../components/Home/Texno';
import User from '../../components/Home/User';
import Header from '../../components/Home/Header';
import Academy from '../../components/Home/Mentors';

const Home = () => {

  return (
    <>
      <Header />
      <Texno />
      <User />
      <Academy />
      <Portfolio />
    </>
  )
}

export default Home