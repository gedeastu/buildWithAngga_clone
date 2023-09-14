import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
const RegisterLayout = () => {
  return (
    <>
    <div>RegisterLayout</div>
    <nav>
    <NavLink to={'signIn'}>Sign In</NavLink>
    <NavLink to={'signUp'}>Sign Up</NavLink>
    </nav>
    <Outlet/>
    </>
  )
}

export default RegisterLayout