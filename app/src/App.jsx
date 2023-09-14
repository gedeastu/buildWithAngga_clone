import './App.css'
import { Suspense, lazy } from 'react'
import {
  createBrowserRouter, 
  Route,
  createRoutesFromElements,
  RouterProvider
} 
from 'react-router-dom'

import { DataDrawerMobile } from './components/Drawer'
// const loadComponent = (urlName) => {
//   return import(`./${urlName}`).then((module) => module.default);
// };
const RootLayout = lazy(()=>import('./layouts/RootLayout'))
const HomeLayout = lazy(()=>import('./layouts/HomeLayout'))
const RegisterLayout = lazy(()=>import('./layouts/RegisterLayout'))
const Promo = lazy(()=>import('./pages/Promo'))
const Home = lazy(()=>import('./pages/Home'))
const SignIn = lazy(()=>import('./pages/SignIn'))
const SignUp = lazy(()=>import('./pages/SignUp'))
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} loader={DataDrawerMobile}>
    <Route path='/' element={<HomeLayout/>}>
      <Route index path='/' element={<Home/>}/>
    </Route>

    <Route path='promo' element={<Promo/>}/>

    <Route path='register' element={<RegisterLayout/>}>
        <Route path='signIn' element={<SignIn/>}/>
        <Route path='signUp' element={<SignUp/>}/>
    </Route>
  </Route>
  )
)
const App = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router}/>
    </Suspense>
    </>
  )
}

export default App
