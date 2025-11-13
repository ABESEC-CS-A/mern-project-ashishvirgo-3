import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../Components/UserNavbar'

const UserDashboard = () => {
  return (
    <div>
      <Header/>
      <UserNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default UserDashboard
