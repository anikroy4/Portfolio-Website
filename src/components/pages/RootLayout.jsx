import React from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default RootLayout
