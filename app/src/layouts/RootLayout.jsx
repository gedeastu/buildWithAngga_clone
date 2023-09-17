import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import React from 'react'
const RootLayout = () => {
  return (
    <>
    <div className="root-layout">
    <header>
      <Navbar />
    </header>
    <Outlet />
    </div>
    </>
  )
}

export default RootLayout