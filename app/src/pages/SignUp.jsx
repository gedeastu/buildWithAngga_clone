import React from 'react'

const SignUp = () => {
  return (
    <>
    <div className='flex flex-col items-center'>
    <h1>Sign Up & Find Skills</h1>
    <form action="" className='flex flex-col'>
    <label htmlFor="Email">Name</label>
    <input type="text" />
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

export default SignUp