import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Home
