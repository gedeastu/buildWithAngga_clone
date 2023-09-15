import React from 'react'
import {useForm} from 'react-hook-form'
const SignIn = () => {
  const form = useForm();
  const {register}= form
  register()
  return (
    <>
    <div className='flex flex-col items-center'>
    <h1>Sign In & Upgrade Skills</h1>
    <form action="" className='flex flex-col'>
    <label htmlFor="Email">Email Address</label>
    <input type="email" />
    <label htmlFor="Password">Password</label>
    <input type="password" />

    <button>Submit</button>
    </form>
    </div>

    </>
  )
}

export default SignIn