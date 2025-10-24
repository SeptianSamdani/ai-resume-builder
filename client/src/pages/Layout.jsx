import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <div className="">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
