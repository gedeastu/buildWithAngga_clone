import './App.css'
import { Suspense, lazy } from 'react'
import RootLayout from './layouts/RootLayout'
import HomeLayout from './layouts/HomeLayout'

// import Promo from './pages/Promo'
// import Home from './pages/Home'
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
const Promo = lazy(()=>import('./pages/Promo'))
const Home = lazy(()=>import('./pages/Home'))
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} loader={DataDrawerMobile}>
    <Route path='/' element={<HomeLayout/>}>
      <Route index path='/' element={<Home/>}/>
    </Route>
    <Route path='/promo' element={<Promo/>}/>
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
